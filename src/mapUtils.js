import config from './config'; // Adjust this path if necessary

let isScriptLoaded = false;
let scriptPromise = null;

const loadGoogleMapsScript = () => {
  if (isScriptLoaded) return Promise.resolve();
  if (scriptPromise) return scriptPromise;

  scriptPromise = new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${config.GOOGLE_MAPS_API_KEY}&libraries=places`;
    script.async = true;
    script.defer = true;
    script.onload = () => {
      isScriptLoaded = true;
      resolve();
    };
    script.onerror = reject;
    document.head.appendChild(script);
  });

  return scriptPromise;
};

export const findNearestMetroStation = async (location) => {
  await loadGoogleMapsScript();

  return new Promise((resolve, reject) => {
    const geocoder = new window.google.maps.Geocoder();
    const service = new window.google.maps.places.PlacesService(document.createElement('div'));

    const searchNearby = (location) => {
      service.nearbySearch({
        location: location,
        rankBy: window.google.maps.places.RankBy.DISTANCE,
        type: "subway_station"
      }, (results, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK && results.length > 0) {
          resolve({
            name: results[0].name,
            address: results[0].vicinity,
            location: results[0].geometry.location.toJSON()
          });
        } else {
          reject("No subway stations found nearby");
        }
      });
    };

    if (typeof location === 'string') {
      // If location is a string, assume it's an address and geocode it
      geocoder.geocode({ address: location }, (results, status) => {
        if (status === "OK") {
          searchNearby(results[0].geometry.location);
        } else {
          reject("Geocode was not successful for the following reason: " + status);
        }
      });
    } else if (location.lat && location.lng) {
      // If location is an object with lat and lng, use it directly
      searchNearby(location);
    } else {
      reject("Invalid location format");
    }
  });
};