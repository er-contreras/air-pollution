import { getDetails } from '../redux/airPollution/airPollution';

const fetchForecast = async (lat, lon) => {
  const url = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=459c5dbf653333dfe4840ac28dabcd59`;

  const response = await fetch(url);
  const details = await response.json();

  return details;
};

export const getAQIThunk = (lat, lon) => (dispatch) => {
  fetchForecast(lat, lon).then((response) => {
    dispatch(getDetails(Object.entries(response)));
  });
};

export default fetchForecast;
