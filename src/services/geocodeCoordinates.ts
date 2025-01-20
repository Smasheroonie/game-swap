import axios from 'axios';

const opencageAPIKEY = import.meta.env.VITE_OPENCAGE_API_KEY;

export const getCoordinates = async (address: string): Promise<[number, number] | null> => {
  try {
    const response = await axios.get(`https://api.opencagedata.com/geocode/v1/json`, {
      params: {
        q: address,
        key: opencageAPIKEY,
      },
    });
    const result = response.data.results[0];
    if (result) {
      const { lat, lng } = result.geometry;
      return [lat, lng];
    }
    return null;
  } catch (error) {
    console.error('Error fetching geocode data:', error);
    return null;
  }
};

export const fetchGeocode = async (location: string): Promise<{ lat: number, lng: number } | null> => {
  try {
    const response = await axios.get(
      `https://api.opencagedata.com/geocode/v1/json`,
      {
        params: {
          q: location, 
          key: opencageAPIKEY, 
        },
      }
    );

    const result = response.data.results[0];
    if (result) {
      const { lat, lng } = result.geometry;
      console.log("Retrieved coordinates:", { lat, lng });
      return { lat, lng }; 
    } else {
      console.error("No results found for location:", location);
      return null;
    }
  } catch (error) {
    console.error("Error fetching geocode data:", error);
    return null;
  }
};