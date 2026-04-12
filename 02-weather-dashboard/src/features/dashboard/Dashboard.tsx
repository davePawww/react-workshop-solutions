import { skipToken, useQuery } from '@tanstack/react-query';
import { useState } from 'react';

import Title from '@/components/Title';
import { Spinner } from '@/components/ui/spinner';
import CurrentWeather from '@/features/dashboard/CurrentWeather';
import { fetchWeather } from '@/features/dashboard/dashboard.api';
import WeatherForecast from '@/features/dashboard/WeatherForecast';
import WeatherSearch from '@/features/dashboard/WeatherSearch';

import type { Coordinates } from '@/features/dashboard/dashboard.types';

export function Dashboard() {
  const [cityName, setCityName] = useState('');
  const [coordinates, setCoordinates] = useState<Coordinates | null>(null);

  const { data, isLoading } = useQuery({
    queryKey: ['weather', coordinates],
    queryFn: coordinates ? () => fetchWeather(coordinates) : skipToken,
  });

  return (
    <main className="flex w-full flex-1 items-center justify-center overflow-hidden py-12">
      <div className="w-full max-w-3xl space-y-8 py-24">
        <Title />
        <WeatherSearch onSelectCoordinates={setCoordinates} onSelectCity={setCityName} />
        {isLoading && (
          <div className="flex items-center justify-center gap-2">
            <Spinner />
            <p>Loading weather..</p>
          </div>
        )}
        {!isLoading && data && (
          <>
            <CurrentWeather data={data} cityName={cityName} />
            <WeatherForecast data={data} />
          </>
        )}
      </div>
    </main>
  );
}
