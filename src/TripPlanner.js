import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Controls from './Controls';
import DetailView from './DetailView';
import TripOverview from './TripOverview';
import Map from './Map';
import tripData from './tripData';
import attractionsData from './attractionsData';
import './TripPlanner.css';

const API_URL = process.env.NODE_ENV === 'production'
  ? 'https://eurotrip.pathiakis.com/api'
  : 'http://localhost:3009/api';

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
  const [transportData, setTransportData] = useState(null);
  const [selectedRoute, setSelectedRoute] = useState(null);
  const [selectedRouteSteps, setSelectedRouteSteps] = useState(null);
  const [isTourSaved, setIsTourSaved] = useState(false);
  const [summary, setSummary] = useState('');
  const [tips, setTips] = useState('');
  const [isTourCreated, setIsTourCreated] = useState(false);
  const [directions, setDirections] = useState(null);
  const [isCreatingTour, setIsCreatingTour] = useState(false);

  useEffect(() => {
    fetchStarredAttractions(activeDay);
  }, [activeDay]);

  useEffect(() => {
    if (activeDay !== 'overview') {
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

      if (activeDay === 2) {
        fetchTransportData('Amsterdam', 'Brussels');
      } else if (activeDay === 4) {
        fetchTransportData('Brussels', 'Paris');
      } else {
        setTransportData(null);
      }

      // Fetch the newest tour for the current day and city
      fetchNewestTour(activeDay, cityName);
    }
  }, [activeDay, activeCity]);

  const fetchStarredAttractions = async (day) => {
    try {
      const response = await axios.get(`${API_URL}/starred-attractions?day=${day}`);
      setStarredAttractions(response.data.results.map(item => item.attraction_id));
    } catch (error) {
      console.error('Error fetching starred attractions:', error);
    }
  };

  const fetchTransportData = async (origin, destination) => {
    try {
      const response = await axios.get(`${API_URL}/transport-options`, {
        params: {
          origin,
          destination,
          departure_time: 1725871200
        }
      });

      const formattedOptions = response.data.routes.map(route => ({
        duration: route.legs.reduce((total, leg) => total + leg.duration.value, 0),
        startTime: route.legs[0].departure_time.text,
        endTime: route.legs[route.legs.length - 1].arrival_time.text,
        steps: route.legs.flatMap(leg => leg.steps.map(step => ({
          type: step.travel_mode,
          instruction: step.html_instructions,
          duration: step.duration.text,
          distance: step.distance.text,
          polyline: step.polyline.points,
          transit_details: step.transit_details
        }))),
        summary: route.summary
      }));

      setTransportData({
        origin,
        destination,
        options: formattedOptions
      });
    } catch (error) {
      console.error('Error fetching transport options:', error);
      setTransportData(null);
    }
  };

  const fetchDirectionsForTour = async (tourStops) => {
    const directionsData = [];
    for (let i = 0; i < tourStops.length - 1; i++) {
      const origin = `${tourStops[i].latitude},${tourStops[i].longitude}`;
      const destination = `${tourStops[i + 1].latitude},${tourStops[i + 1].longitude}`;

      try {
        const response = await axios.post(`${API_URL}/directions`, {
          origin,
          destination,
          modes: ['walking', 'transit', 'driving']
        });

        directionsData.push(response.data);
      } catch (error) {
        console.error('Error fetching directions:', error);
      }
    }
    return directionsData;
  };

  const handleDayChange = (newDay) => {
    setActiveDay(newDay);
    if (newDay !== 'overview' && tripData[newDay].cities.length <= activeCity) {
      setActiveCity(0);
    }
    if (newDay !== 'overview') {
      fetchStarredAttractions(newDay);
    }
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
    setDirections(null);
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

  const fetchNewestTour = async (day, city) => {
    try {
      const response = await axios.get(`${API_URL}/newest-tour`, {
        params: { day, city }
      });
      if (response.data) {
        const tourData = response.data.tour_data;
        setTour(tourData);
        setIsTourCreated(true);
        setIsTourSaved(true);
        setSummary(tourData.summary || '');
        setTips(tourData.tips || '');
        
        if (tourData.tour) {
          const directionsData = await fetchDirectionsForTour(tourData.tour);
          setDirections(directionsData);
        }
      } else {
        setTour(null);
        setIsTourCreated(false);
        setIsTourSaved(false);
        setSummary('');
        setTips('');
        setDirections(null);
      }
    } catch (error) {
      console.error('Error fetching newest tour:', error);
    }
  };

  const handleCreateTour = async (selectedAttractions) => {
    setIsCreatingTour(true);
    setIsTourCreating(true);

    try {
      const response = await axios.post(`${API_URL}/create-tour`, {
        attractions: selectedAttractions,
        day: activeDay,
        city: currentCityData.name,
      });

      if (response.data && response.data.tour) {
        const tourWithCoordinates = {
          ...response.data,
          tour: response.data.tour.map(stop => {
            const attraction = selectedAttractions.find(a => a.id === stop.id);
            return {
              ...stop,
              latitude: attraction ? attraction.latitude : null,
              longitude: attraction ? attraction.longitude : null,
            };
          })
        };

        setTour(tourWithCoordinates);
        const directionsData = await fetchDirectionsForTour(tourWithCoordinates.tour);
        setDirections(directionsData);

        // Automatically save the tour
        await handleSaveTour(tourWithCoordinates);

        setActiveDetail('tour');
        setIsTourCreated(true);
        setSummary(tourWithCoordinates.summary || '');
        setTips(tourWithCoordinates.tips || '');
      } else {
        console.error('Invalid tour data received from API');
      }
    } catch (error) {
      console.error('Error creating tour:', error);
    } finally {
      setIsCreatingTour(false);
      setIsTourCreating(false);
    }
  };

  const handleDeleteTour = async () => {
    try {
      await axios.delete(`${API_URL}/delete-tour`, {
        params: { day: activeDay, city: currentCityData.name }
      });
      setTour(null);
      setIsTourCreated(false);
      setIsTourSaved(false);
      setSummary('');
      setTips('');
      setDirections(null);
    } catch (error) {
      console.error('Error deleting tour:', error);
    }
  };

  const handleSaveTour = async (tourData = tour) => {
    try {
      const tourDataToSave = {
        ...tourData,
        summary,
        tips,
        directions
      };

      await axios.post(`${API_URL}/save-tour`, {
        day: activeDay,
        city: currentCityData.name,
        tourData: tourDataToSave
      });

      setIsTourSaved(true);
      setTour(tourDataToSave);
    } catch (error) {
      console.error('Error saving tour:', error);
    }
  };

  const handleSummaryChange = (newSummary) => {
    setSummary(newSummary);
  };

  const handleTipsChange = (newTips) => {
    setTips(newTips);
  };

  const handleSelectTransportRoute = (route) => {
    setSelectedRoute(route);
    setSelectedRouteSteps(route ? route.steps : null);
  };

  const handleSelectDetail = (detail) => {
    setActiveDetail(detail);
    if (detail === 'tour' && !tour && currentCityData) {
      fetchNewestTour(activeDay, currentCityData.name);
    }
  };

  return (
    <div className="trip-planner">
      <div className="trip-planner__controls">
        <Controls
          tripData={tripData}
          activeDay={activeDay}
          setActiveDay={handleDayChange}
          activeCity={activeCity}
          setActiveCity={setActiveCity}
          activeDetail={activeDetail}
          setActiveDetail={handleSelectDetail}
          isTourCreated={isTourCreated}
          isTourSaved={isTourSaved}
          isTransportAvailable={!!transportData}
        />
      </div>
      <div className="trip-planner__content">
        <div className="trip-planner__detail-view">
          {activeDay === 'overview' ? (
            <TripOverview transportData={transportData} />
          ) : currentCityData && (
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
              onSaveTour={handleSaveTour}
              isTourSaved={isTourSaved}
              tour={tour}
              attractionsData={currentCityData.activities}
              activeDay={activeDay}
              hotel={hotel}
              transportData={transportData}
              setSelectedTransportRoute={handleSelectTransportRoute}
              onDeleteTour={handleDeleteTour}
              isCreatingTour={isCreatingTour}
              selectedRoute={selectedRoute}
              selectedRouteSteps={selectedRouteSteps}
              onSummaryChange={handleSummaryChange}
              onTipsChange={handleTipsChange}
              summary={summary}
              tips={tips}
              directions={directions}
              isTourCreated={isTourCreated}
            />
          )}
        </div>
        <div className="trip-planner__map-container glass-effect">
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
            selectedRoute={selectedRoute}
            selectedRouteSteps={selectedRouteSteps}
            directions={directions}
          />
        </div>
      </div>
    </div>
  );
};

export default TripPlanner;