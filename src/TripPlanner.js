import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import Controls from './Controls';
import DetailView from './DetailView';
import Map from './Map';
import axios from 'axios';
import tripData from './tripData';
import attractionsData from './attractionsData';

const API_URL = 'http://localhost:3009/api';

const TripPlanner = () => {
  const [activeDay, setActiveDay] = useState(0);
  const [activeCity, setActiveCity] = useState(0);
  const [activeDetail, setActiveDetail] = useState('hotel');
  const [currentCityData, setCurrentCityData] = useState(null);
  const [selectedAttraction, setSelectedAttraction] = useState(null);
  const [nearestMetro, setNearestMetro] = useState(null);
  const [walkingRoute, setWalkingRoute] = useState(null);
  const [starredAttractions, setStarredAttractions] = useState([]);
  const [mapMarkers, setMapMarkers] = useState([]);
  const [tour, setTour] = useState(null);
  const [isTourCreating, setIsTourCreating] = useState(false);
  const [hotel, setHotel] = useState(null);

  useEffect(() => {
    fetchStarredAttractions(activeDay);
  }, [activeDay]);

  useEffect(() => {
    const dayData = tripData[activeDay];
    const cityData = dayData.cities[activeCity];
    const cityName = cityData.name;

    const updatedCityData = {
      ...cityData,
      activities: attractionsData[cityName] || []
    };

    setCurrentCityData(updatedCityData);
    setSelectedAttraction(null);
    setNearestMetro(null);
    setWalkingRoute(null);
    setTour(null);
    setHotel(cityData.hotel);
  }, [activeDay, activeCity]);

  const fetchStarredAttractions = async (day) => {
    try {
      const response = await axios.get(`${API_URL}/starred-attractions?day=${day}`);
      setStarredAttractions(response.data.results.map(item => item.attraction_id));
    } catch (error) {
      console.error('Error fetching starred attractions:', error);
    }
  };

  const handleDayChange = (newDay) => {
    setActiveDay(newDay);
    if (tripData[newDay].cities.length <= activeCity) {
      setActiveCity(0);
    }
    fetchStarredAttractions(newDay);
  };

  const handleSelectAttraction = (attraction, metro) => {
    setSelectedAttraction(attraction);
    setNearestMetro(metro);
    if (metro) {
      setWalkingRoute({
        start: [attraction.latitude, attraction.longitude],
        end: [metro.location.lat(), metro.location.lng()]
      });
    } else {
      setWalkingRoute(null);
    }
  };

  const handleCloseRoute = () => {
    setWalkingRoute(null);
  };

  const handleToggleStar = async (attractionId) => {
    try {
      if (starredAttractions.includes(attractionId)) {
        await axios.delete(`${API_URL}/starred-attractions?attractionId=${attractionId}&day=${activeDay}`);
        setStarredAttractions(prev => prev.filter(id => id !== attractionId));
      } else {
        await axios.post(`${API_URL}/starred-attractions`, { attractionId, day: activeDay });
        setStarredAttractions(prev => [...prev, attractionId]);
      }
    } catch (error) {
      console.error('Error toggling star:', error);
    }
  };

  const handleToggleMarker = (attraction) => {
    setMapMarkers(prevMarkers => {
      const isMarkerPresent = prevMarkers.some(marker => marker.id === attraction.id);
      if (isMarkerPresent) {
        return prevMarkers.filter(marker => marker.id !== attraction.id);
      } else {
        return [...prevMarkers, { 
          id: attraction.id, 
          latitude: attraction.latitude, 
          longitude: attraction.longitude,
          name: attraction.name
        }];
      }
    });
  };

  const handleCreateTour = async (createdTour) => {
    // Add latitude and longitude to each tour stop
    const tourWithCoordinates = {
      ...createdTour,
      tour: createdTour.tour.map(stop => {
        const attraction = currentCityData.activities.find(a => a.id === stop.id);
        return {
          ...stop,
          latitude: attraction ? attraction.latitude : null,
          longitude: attraction ? attraction.longitude : null,
        };
      })
    };
    setTour(tourWithCoordinates);
    setActiveDetail('tour');
    setIsTourCreating(false);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Controls
        tripData={tripData}
        activeDay={activeDay}
        setActiveDay={handleDayChange}
        activeCity={activeCity}
        setActiveCity={setActiveCity}
        activeDetail={activeDetail}
        setActiveDetail={setActiveDetail}
        isTourAvailable={!!tour}
      />
      <Box sx={{ flex: 1, overflow: 'auto' }}>
        {currentCityData && (
          <DetailView
            data={currentCityData[activeDetail === 'tour' ? 'activities' : activeDetail]}
            type={activeDetail}
            cityName={currentCityData.name}
            onSelectAttraction={handleSelectAttraction}
            starredAttractions={starredAttractions}
            onToggleStar={handleToggleStar}
            onToggleMarker={handleToggleMarker}
            mapMarkers={mapMarkers}
            isTourCreating={isTourCreating}
            onCreateTour={handleCreateTour}
            tour={tour}
            attractionsData={currentCityData.activities}
            activeDay={activeDay + 1} // Adding 1 because activeDay is zero-indexed
            hotel={hotel}
          />
        )}
      </Box>
      <Box sx={{ height: '40vh' }}>
        <Map 
          tripData={tripData} 
          activeDay={activeDay}
          activeCity={activeCity}
          selectedAttraction={selectedAttraction}
          nearestMetro={nearestMetro}
          walkingRoute={walkingRoute}
          onCloseRoute={handleCloseRoute}
          mapMarkers={mapMarkers}
          viewType={activeDetail}
          tour={tour}
          hotel={hotel}
        />
      </Box>
    </Box>
  );
};

export default TripPlanner;