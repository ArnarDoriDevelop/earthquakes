import axios from 'axios';

// Component that access data from an API
// For now there is only GET method to get a list of eartquakes
// Need to GET by id, POST, DELETE or UPDATE add corresponding methods here

const api = axios.create({
  baseURL: 'https://apis.is/earthquake/is',
});

// Get a list of earthquakes from API
export const getEarthquakesList = () => { 
  return api.get('/');
};


