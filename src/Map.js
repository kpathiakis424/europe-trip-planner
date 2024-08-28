import React, { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap, Polyline } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './Map.css';

// Import a polyline decoding function
import { decode } from '@mapbox/polyline';

const customIcon = (number) => new L.DivIcon({
  className: 'custom-icon',
  html: `<div style="background-color: #bb86fc; color: #000000; border-radius: 50%; width: 30px; height: 30px; display: flex; justify-content: center; align-items: center; font-weight: bold;">${number}</div>`,
});

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

function MapUpdater({ center, zoom, tour, hotel, viewType, onCloseRoute, directions }) {
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

    if (viewType === 'tour' && tour && tour.tour && directions && directions.length > 0) {
      const routePoints = directions.flatMap(directionSet => {
        if (directionSet && directionSet.length > 0) {
          const bestRoute = chooseBestRoute(directionSet);
          if (bestRoute && bestRoute.polyline) {
            return decode(bestRoute.polyline);
          }
        }
        return [];
      }).filter(point => point.length === 2);

      if (routePoints.length > 0) {
        routeLayerRef.current = L.polyline(routePoints, { color: '#bb86fc' }).addTo(map);
        map.fitBounds(routeLayerRef.current.getBounds());

        // Add close button
       
      }
    }
  }, [tour, hotel, viewType, map, onCloseRoute, directions]);

  return null;
}

const chooseBestRoute = (routes) => {
  const walkingRoute = routes.find(r => r.mode === 'walking');
  const transitRoute = routes.find(r => r.mode === 'transit');
  const drivingRoute = routes.find(r => r.mode === 'driving');

  if (walkingRoute && walkingRoute.duration < 1800) { // Less than 30 minutes
    return walkingRoute;
  } else if (transitRoute) {
    return transitRoute;
  } else {
    return drivingRoute || walkingRoute || transitRoute;
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
  hotel,
  selectedRoute,
  directions
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
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <MapUpdater 
          center={center} 
          zoom={zoom} 
          tour={tour}
          hotel={hotel}
          viewType={viewType}
          onCloseRoute={onCloseRoute}
          directions={directions}
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

        {walkingRoute && (
          <Polyline 
            positions={[walkingRoute.start, walkingRoute.end]}
            color="#bb86fc"
          />
        )}

        {selectedRoute && (
          <Polyline
            positions={decode(selectedRoute)}
            color="#bb86fc"
          />
        )}
      </MapContainer>
    </div>
  );
};

export default Map;