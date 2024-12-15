import { Loader } from '@googlemaps/js-api-loader';
import { GOOGLE_MAPS_API_KEY } from '../config/keys';
import { Coordinates } from '../types/delivery';

const loader = new Loader({
  apiKey: GOOGLE_MAPS_API_KEY,
  version: "weekly",
  libraries: ["places", "geometry"]
});

let geocoder: google.maps.Geocoder | null = null;

export async function initMapsServices() {
  await loader.load();
  geocoder = new google.maps.Geocoder();
}

export async function getCoordinatesFromAddress(address: string): Promise<Coordinates | null> {
  if (!geocoder) await initMapsServices();
  
  try {
    const response = await geocoder!.geocode({ address });
    if (response.results[0]) {
      const { lat, lng } = response.results[0].geometry.location;
      return { lat: lat(), lng: lng() };
    }
    return null;
  } catch (error) {
    console.error('Error geocoding address:', error);
    return null;
  }
}