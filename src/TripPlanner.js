import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Controls from './Controls';
import DetailView from './DetailView';
import Map from './Map';
import tripData from './tripData';
import attractionsData from './attractionsData';
import './TripPlanner.css';

const API_URL = process.env.NODE_ENV === 'production'
  ? 'http://kevin.home:3009/api'
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
  const [tours, setTours] = useState({});
  const [isTourCreated, setIsTourCreated] = useState(false);
  const [toursCount, setToursCount] = useState({});
  const [directions, setDirections] = useState(null);

  useEffect(() => {
    fetchStarredAttractions(activeDay);
    fetchSavedTours(activeDay);
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

    if (activeDay === 2) {
      fetchTransportData('Amsterdam', 'Brussels');
    } else if (activeDay === 4) {
      fetchTransportData('Brussels', 'Paris');
    } else {
      setTransportData(null);
    }

    fetchSavedTours(activeDay);
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

  const fetchSavedTours = async (day) => {
    try {
      const response = await axios.get(`${API_URL}/saved-tours?day=${day}`);
      setTours(prevTours => ({
        ...prevTours,
        [day]: response.data
      }));
      setToursCount(prevCount => ({
        ...prevCount,
        [day]: response.data.length
      }));
    } catch (error) {
      console.error('Error fetching saved tours:', error);
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

  const handleCreateTour = async (selectedAttractions) => {
    setIsTourCreating(true);

    try {
      const response = await axios.post(`${API_URL}/create-tour`, {
        attractions: selectedAttractions,
        day: activeDay + 1,
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

        setActiveDetail('tour');
        setIsTourCreated(true);
        setIsTourSaved(false);
        setSummary(tourWithCoordinates.summary || '');
        setTips(tourWithCoordinates.tips || '');
      } else {
        console.error('Invalid tour data received from API');
      }
    } catch (error) {
      console.error('Error creating tour:', error);
    } finally {
      setIsTourCreating(false);
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

  const handleSaveTour = async () => {
    try {
      const tourDataToSave = {
        ...tour,
        summary,
        tips,
        directions
      };

      const response = await axios.post(`${API_URL}/save-tour`, {
        day: activeDay,
        city: currentCityData.name,
        tourData: tourDataToSave
      });

      setIsTourSaved(true);
      setToursCount(prevCount => ({ ...prevCount, [activeDay]: (prevCount[activeDay] || 0) + 1 }));
      setTours(prevTours => ({ 
        ...prevTours, 
        [activeDay]: [...(prevTours[activeDay] || []), { ...response.data, tour_data: tourDataToSave }]
      }));
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

  const handleRouteSelect = (route, steps) => {
    setSelectedRoute(route);
    setSelectedRouteSteps(steps);
  };

  const handleSelectTour = (tourId) => {
    if (tourId === 'new') {
      setTour(null);
      setIsTourCreated(false);
      setIsTourSaved(false);
      setSummary('');
      setTips('');
      setDirections(null);
    } else {
      const selectedTour = tours[activeDay][tourId];
      if (selectedTour) {
        let tourData;
        if (typeof selectedTour.tour_data === 'string') {
          try {
            tourData = JSON.parse(selectedTour.tour_data);
          } catch (error) {
            console.error('Error parsing tour data:', error);
            tourData = null;
          }
        } else if (typeof selectedTour.tour_data === 'object') {
          tourData = selectedTour.tour_data;
        } else {
          console.error('Invalid tour data format');
          tourData = null;
        }

        if (tourData) {
          setTour(tourData);
          setSummary(tourData.summary || '');
          setTips(tourData.tips || '');
          setDirections(tourData.directions || null);
          setIsTourCreated(true);
          setIsTourSaved(true);

          if ((activeDay === 2 && currentCityData.name === 'Brussels') || 
              (activeDay === 4 && currentCityData.name === 'Paris')) {
            fetchTransportData(activeDay === 2 ? 'Amsterdam' : 'Brussels', currentCityData.name);
          }
        } else {
          console.error('Selected tour data is invalid or missing');
        }
      } else {
        console.error('Selected tour not found');
      }
    }
    setActiveDetail('tour');
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
          setActiveDetail={setActiveDetail}
          isTourCreated={isTourCreated}
          isTourSaved={isTourSaved}
          toursCount={toursCount}
          onSaveTour={handleSaveTour}
          onSelectTour={handleSelectTour}
          isTransportAvailable={!!transportData}
          isTourAvailable={toursCount[activeDay] > 0 || isTourCreated}
        />
      </div>
      <div className="trip-planner__content">
        <div className="trip-planner__detail-view">
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
              onSaveTour={handleSaveTour}
              isTourSaved={isTourSaved}
              tour={tour}
              attractionsData={currentCityData.activities}
              activeDay={activeDay + 1}
              hotel={hotel}
              transportData={transportData}
              onRouteSelect={handleRouteSelect}
              selectedRoute={selectedRoute}
              selectedRouteSteps={selectedRouteSteps}
              onSummaryChange={handleSummaryChange}
              onTipsChange={handleTipsChange}
              summary={summary}
              tips={tips}
              directions={directions}
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