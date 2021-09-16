import { getDetails } from '../redux/airPollution/airPollution';

const fetchForecast = async () => {
  const url = 'https://api.openweathermap.org/data/2.5/air_pollution?lat=19.432608&lon=-99.133209&appid=459c5dbf653333dfe4840ac28dabcd59';

  const response = await fetch(url);
  const details = await response.json();

  return details;
};

// Apply the middleware
export const getAQIThunk = () => (dispatch) => {
  fetchForecast().then((response) => {
    // dispatch(getDetails(Object.entries(response)));
    dispatch(getDetails(Object.entries(response)));
  });
};

export default fetchForecast;
