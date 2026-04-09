import { CurrentWeather } from '@/features/dashboard/CurrentWeather';
import { WeatherSearch } from '@/features/dashboard/WeatherSearch';

export function Dashboard() {
  return (
    <main className="flex flex-col items-center justify-center">
      <WeatherSearch />
      <CurrentWeather />
    </main>
  );
}
