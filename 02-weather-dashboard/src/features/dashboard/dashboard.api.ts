import type { GeoCodingResponse } from '@/features/dashboard/dashboard.types';

const getCities = async (name: string): Promise<GeoCodingResponse> => {
  const response = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${name}&count=10&language=en&format=json`,
  );

  return response.json() as Promise<GeoCodingResponse>;
};

export { getCities };
