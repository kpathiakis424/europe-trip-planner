import React, { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap, Polyline } from 'react-leaflet';
import L from 'leaflet';
import axios from 'axios';
import 'leaflet/dist/leaflet.css';
import config from './config';
import './Map.css';

const customIcon = (number) => new L.DivIcon({
  className: 'custom-icon',
  html: `<div style="background-color: #bb86fc; color: #000000; border-radius: 50%; width: 30px; height: 30px; display: flex; justify-content: center; align-items: center; font-weight: bold;">${number}</div>`,
});

const LOCAL_API_URL = 'http://localhost:3009/api/directions';

const attractionIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const hotelIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const GOOGLE_MAPS_API_KEY = config.GOOGLE_MAPS_API_KEY;
const GOOGLE_DIRECTIONS_API_URL = 'https://maps.googleapis.com/maps/api/directions/json';

const TRANSPORT_MODES = ['walking', 'driving', 'bicycling', 'transit'];
const MAX_WALKING_DURATION = 1800; // 30 minutes
const MAX_WALKING_DISTANCE = 2000; // 2 km

function MapUpdater({ center, zoom, tour, hotel, viewType, onCloseRoute }) {
  const map = useMap();
  const routeLayerRef = useRef(null);

  useEffect(() => {
    if (center && center[0] !== undefined && center[1] !== undefined) {
      map.setView(center, zoom);
    }
  }, [center, zoom, map]);

  useEffect(() => {
    // Clear existing routes
    if (routeLayerRef.current) {
      map.removeLayer(routeLayerRef.current);
      routeLayerRef.current = null;
    }

    const fetchRoutes = async (start, end) => {
      try {
        const response = await axios.post('http://localhost:3009/api/directions', {
          origin: `${start[0]},${start[1]}`,
          destination: `${end[0]},${end[1]}`,
          modes: TRANSPORT_MODES
        });
    
        return response.data.map(route => ({
          ...route,
          geometry: decodePolyline(route.geometry)
        }));
      } catch (error) {
        console.error('Error fetching routes:', error);
        throw error;
      }
    };

    const decodePolyline = (encoded) => {
      // ... (keep the existing decodePolyline function)
    };

    const chooseBestRoute = (routes) => {
      // ... (keep the existing chooseBestRoute function)
    };

    const fetchAndDisplayTourRoute = async () => {
      if (viewType === 'tour' && tour && tour.tour) {
        const waypoints = [
          hotel && hotel.latitude && hotel.longitude ? [hotel.latitude, hotel.longitude] : null,
          ...tour.tour.filter(stop => stop && stop.latitude && stop.longitude).map(stop => [stop.latitude, stop.longitude]),
          hotel && hotel.latitude && hotel.longitude ? [hotel.latitude, hotel.longitude] : null
        ].filter(Boolean);

        let fullTourRoute = [];
        for (let i = 0; i < waypoints.length - 1; i++) {
          const routes = await fetchRoutes(waypoints[i], waypoints[i + 1]);
          const bestRoute = chooseBestRoute(routes);
          fullTourRoute = [...fullTourRoute, ...bestRoute.geometry];
        }

        const routeLatLngs = fullTourRoute;
        routeLayerRef.current = L.polyline(routeLatLngs, { color: '#bb86fc' }).addTo(map);
        map.fitBounds(routeLayerRef.current.getBounds());

        // Add close button
        const closeButton = L.control({ position: 'topright' });
        closeButton.onAdd = () => {
          const div = L.DomUtil.create('div', 'close-button');
          div.innerHTML = '✕';
          div.style.fontSize = '20px';
          div.style.fontWeight = 'bold';
          div.style.cursor = 'pointer';
          div.onclick = onCloseRoute;
          return div;
        };
        closeButton.addTo(map);
      }
    };

    fetchAndDisplayTourRoute();

  }, [tour, hotel, viewType, map, onCloseRoute]);

  return null;
}

const fetchRoutes = async (start, end) => {
  try {
    const response = await axios.post(LOCAL_API_URL, {
      origin: `${start[0]},${start[1]}`,
      destination: `${end[0]},${end[1]}`,
      modes: TRANSPORT_MODES
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching routes:', error);
    throw error;
  }
};

const Map = ({ 
  tripData, 
  activeDay, 
  activeCity, 
  selectedAttraction, 
  walkingRoute, 
  onCloseRoute, 
  mapMarkers,
  viewType,
  tour,
  hotel 
}) => {
  const currentDayData = tripData && tripData[activeDay];
  const currentCityData = currentDayData && currentDayData.cities && currentDayData.cities[activeCity];
  
  let center = [51.505, -0.09];  // Default center (London)
  let zoom = 13;  // Default zoom

  if (hotel && hotel.latitude && hotel.longitude) {
    center = [hotel.latitude, hotel.longitude];
    zoom = viewType === 'hotel' ? 15 : 13;
  } else if (selectedAttraction && selectedAttraction.latitude && selectedAttraction.longitude) {
    center = [selectedAttraction.latitude, selectedAttraction.longitude];
  } else if (currentCityData && currentCityData.location && currentCityData.location.lat && currentCityData.location.lng) {
    center = [currentCityData.location.lat, currentCityData.location.lng];
  }

  return (
    <div className="map-container glass-effect">
      <MapContainer center={center} zoom={zoom} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        />
        <MapUpdater 
          center={center} 
          zoom={zoom} 
          tour={tour}
          hotel={hotel}
          viewType={viewType}
          onCloseRoute={onCloseRoute}
        />
        
        {selectedAttraction && selectedAttraction.latitude && selectedAttraction.longitude && viewType !== 'tour' && (
          <Marker position={[selectedAttraction.latitude, selectedAttraction.longitude]} icon={attractionIcon}>
            <Popup>{selectedAttraction.name}</Popup>
          </Marker>
        )}

        {mapMarkers && mapMarkers.map((marker) => (
          marker && marker.latitude && marker.longitude && (
            <Marker 
              key={marker.id}
              position={[marker.latitude, marker.longitude]}
              icon={attractionIcon}
            >
              <Popup>{marker.name}</Popup>
            </Marker>
          )
        ))}

        {hotel && hotel.latitude && hotel.longitude && (
          <Marker position={[hotel.latitude, hotel.longitude]} icon={hotelIcon}>
            <Popup>{hotel.name}</Popup>
          </Marker>
        )}

        {viewType === 'tour' && tour && tour.tour && tour.tour.map((stop, index) => (
          stop && stop.latitude && stop.longitude && (
            <Marker 
              key={stop.id}
              position={[stop.latitude, stop.longitude]}
              icon={customIcon(index + 1)}
            >
              <Popup>{stop.name}</Popup>
            </Marker>
          )
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;