import ForecastCard from '@/features/dashboard/ForecastCard';
import { getWeatherCode } from '@/utils';

import type { WeatherForecastProps } from '@/features/dashboard/dashboard.types';

export default function WeatherForecast({ data }: WeatherForecastProps) {
  return (
    <div>
      <h1 className="mb-1.5 text-lg font-medium tracking-wider">Weather Forecast</h1>
      <div className="space-y-4">
        {data.daily.time.map((d, i) => {
          return (
            <ForecastCard
              key={d}
              date={d}
              tempHigh={data.daily.temperature_2m_max[i]}
              tempLow={data.daily.temperature_2m_min[i]}
              weatherCondition={getWeatherCode(data.daily.weather_code[i])}
            />
          );
        })}
      </div>
    </div>
  );
}
