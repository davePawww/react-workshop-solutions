import type {
  Coordinates,
  GeoCodingResponse,
  WeatherForecast,
} from '@/features/dashboard/dashboard.types';

const getCities = async (name: string): Promise<GeoCodingResponse> => {
  const response = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(name)}&count=10&language=en&format=json`,
  );

  if (!response.ok) throw new Error(`Request failed: ${response.status}`);

  return response.json() as Promise<GeoCodingResponse>;
};

const fetchWeather = async (coordinates: Coordinates): Promise<WeatherForecast> => {
  const response = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${coordinates.latitude}&longitude=${coordinates.longitude}&daily=weather_code,temperature_2m_max,temperature_2m_min&current=temperature_2m,relative_humidity_2m,wind_gusts_10m,weather_code&timezone=${encodeURIComponent(coordinates.timezone)}&temperature_unit=fahrenheit`,
  );

  if (!response.ok) throw new Error(`Request failed: ${response.status}`);

  return response.json() as Promise<WeatherForecast>;
};

export { getCities, fetchWeather };
