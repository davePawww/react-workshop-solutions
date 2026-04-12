import { Thermometer, Building, CloudRain, Droplets, Wind } from 'lucide-react';

import StatsCard from '@/features/dashboard/StatsCard';
import { getWeatherCode } from '@/utils';

import type { CurrentWeatherProps } from '@/features/dashboard/dashboard.types';

export default function CurrentWeather({ data, cityName }: CurrentWeatherProps) {
  return (
    <div>
      <h1 className="mb-1.5 text-lg font-medium tracking-wider">Current Weather</h1>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-5">
        <StatsCard
          icon={<Building className="text-teal-500" size={20} />}
          title={'City'}
          content={cityName}
        />
        <StatsCard
          icon={<Thermometer className="text-teal-500" size={20} />}
          title={'Temperature'}
          content={data.current.temperature_2m}
          unit={data.current_units.temperature_2m}
        />
        <StatsCard
          icon={<CloudRain className="text-teal-500" size={20} />}
          title={'Weather Condition'}
          content={getWeatherCode(data.current.weather_code)}
        />
        <StatsCard
          icon={<Droplets className="text-teal-500" size={20} />}
          title={'Humidity'}
          content={data.current.relative_humidity_2m}
          unit={data.current_units.relative_humidity_2m}
        />
        <StatsCard
          icon={<Wind className="text-teal-500" size={20} />}
          title={'Wind'}
          content={data.current.wind_gusts_10m}
          unit={data.current_units.wind_gusts_10m}
        />
      </div>
    </div>
  );
}
