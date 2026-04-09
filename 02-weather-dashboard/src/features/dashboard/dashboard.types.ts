import type { JSX } from 'react';

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

export type StatsCardProps<T> = {
  icon: JSX.Element;
  title: string;
  content: T;
};
