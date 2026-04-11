import type { GeoCodingResponse, WeatherForecast } from '@/features/dashboard/dashboard.types';

const getCities = async (name: string): Promise<GeoCodingResponse> => {
  const response = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${name}&count=10&language=en&format=json`,
  );

  return response.json() as Promise<GeoCodingResponse>;
};

const fetchWeather = async (coordinates: {
  latitude: number;
  longitude: number;
}): Promise<WeatherForecast> => {
  const response = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${coordinates.latitude}&longitude=${coordinates.longitude}&daily=weather_code,temperature_2m_max,temperature_2m_min&current=temperature_2m,relative_humidity_2m,wind_gusts_10m,weather_code&timezone=Asia%2FSingapore&temperature_unit=fahrenheit`,
  );

  return response.json() as Promise<WeatherForecast>;
};

export { getCities, fetchWeather };
