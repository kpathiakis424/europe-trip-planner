import { useState, useCallback } from 'react';
import { useLoadScript } from '@react-google-maps/api';
import config from './config';

const libraries = ["places"];

export function useNearestMetroStation() {
  const [nearestMetro, setNearestMetro] = useState(null);
  const [loading, setLoading] = useState(false);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: config.GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const findNearestMetroStation = useCallback(async (address) => {
    if (!isLoaded) return "Maps not loaded";
    if (loadError) return "Error loading maps";

    setLoading(true);

    const geocoder = new window.google.maps.Geocoder();
    const service = new window.google.maps.places.PlacesService(document.createElement('div'));

    try {
      // First, geocode the address
      const geocodeResult = await new Promise((resolve, reject) => {
        geocoder.geocode({ address }, (results, status) => {
          if (status === "OK") resolve(results[0].geometry.location);
          else reject("Geocode failed: " + status);
        });
      });

      // Then, search for nearby metro stations
      const nearbySearchResult = await new Promise((resolve, reject) => {
        service.nearbySearch({
          location: geocodeResult,
          rankBy: window.google.maps.places.RankBy.DISTANCE,
          type: "subway_station"
        }, (results, status) => {
          if (status === window.google.maps.places.PlacesServiceStatus.OK) {
            resolve(results[0]);
          } else {
            reject("Nearby search failed: " + status);
          }
        });
      });

      const result = {
        name: nearbySearchResult.name,
        address: nearbySearchResult.vicinity,
        location: nearbySearchResult.geometry.location
      };

      setNearestMetro(result);
      setLoading(false);
      return result;
    } catch (error) {
      console.error("Error finding nearest metro station:", error);
      setLoading(false);
      return "Error finding nearest metro station";
    }
  }, [isLoaded, loadError]);

  return { findNearestMetroStation, nearestMetro, loading, isLoaded, loadError };
}