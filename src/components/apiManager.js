const fetchForecast = async () => {
  const url = 'https://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=19.432608&lon=-99.133209&appid=459c5dbf653333dfe4840ac28dabcd59';
  
  const response = await fetch(url);
  const forecast = await response.json();

  return forecast;
}

export default fetchForecast;