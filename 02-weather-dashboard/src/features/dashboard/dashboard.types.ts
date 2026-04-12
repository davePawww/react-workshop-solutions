import type { Dispatch, JSX, SetStateAction } from 'react';

export type GeoLocation = {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  country: string;
  countryCode: string;
  timezone: string;
  admin1: string;
  admin2: string;
  admin3: string;
};

export type GeoCodingResponse = {
  results?: GeoLocation[];
};

export type StatsCardProps = {
  icon: JSX.Element;
  title: string;
  content: string | number;
  unit?: string;
};

export type ForecastCardProps = {
  date: string;
  tempHigh: number;
  tempLow: number;
  weatherCondition: string;
};

export type Coordinates = Pick<GeoLocation, 'latitude' | 'longitude' | 'timezone'>;

export type WeatherForecast = {
  latitude: number;
  longitude: number;
  timezone: string;
  timezone_abbreviation: string;
  current_units: {
    temperature_2m: string;
    relative_humidity_2m: string;
    wind_gusts_10m: string;
    weather_code: string;
  };
  current: {
    temperature_2m: number;
    relative_humidity_2m: number;
    wind_gusts_10m: number;
    weather_code: number;
  };
  daily_units: {
    time: string;
    weather_code: string;
    temperature_2m_max: string;
    temperature_2m_min: string;
  };
  daily: {
    time: string[];
    weather_code: number[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
  };
};

export type WeatherSearchProps = {
  onSelectCoordinates: Dispatch<SetStateAction<Coordinates | null>>;
  onSelectCity: Dispatch<SetStateAction<string>>;
};

export type CurrentWeatherProps = {
  data: WeatherForecast;
  cityName: string;
};
export type WeatherForecastProps = {
  data: WeatherForecast;
};
