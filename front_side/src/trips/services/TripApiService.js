import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL

export const getTrips = async () => {
  try {
    const { data } = await axios.get(`${apiUrl}/Trip`);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const deletTrip = async (tripId) => {
  try {
    const { data } = await axios.delete(`${apiUrl}/Trip/${tripId}`);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const createTrip = async(trip) => {
  try {
      const { data } = await axios.post(`${apiUrl}/Trip/`, trip);
      return data;
  } catch (error) {
      return Promise.reject(error.message);
  }
};

export const editTrip = async (tripId, editedTrip) => {
  try {
    const { data } = await axios.put(`${apiUrl}/trip/${tripId}`, editedTrip);
    return data;
  } catch (error) {
        console.error("Error in editTrip:", error);

    return Promise.reject(error.message);
  }
}

export const getTripById = async (tripId) => {
  try {
    const { data } = await axios.get(`${apiUrl}/Trip/${tripId}`);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const getTripsByCountry = async (country) => {
  try {
    const { data } = await axios.get(`${apiUrl}/Trip/${country}`);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const getLikedTrips = async () => {
  try {
    const { data } = await axios.get(`${apiUrl}/Trip/likes`)
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
}

export const likeTrip = async (tripId) => {
  try {
    const { data } = await axios.patch(`${apiUrl}/Trip/${tripId}`)
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
}

export const likedTripsId = async () => {
  try{
    const { data } = await axios.get(`${apiUrl}/Trip/likesId`)
    return data;
  }catch (error) {
    return Promise.reject(error.message);
  }
}