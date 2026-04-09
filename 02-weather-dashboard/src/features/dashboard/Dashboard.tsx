import { CurrentWeather } from '@/features/dashboard/CurrentWeather';
import { WeatherSearch } from '@/features/dashboard/WeatherSearch';

export function Dashboard() {
  return (
    <main className="flex min-h-screen w-full items-center justify-center">
      <div className="w-full max-w-3xl space-y-4">
        <WeatherSearch />
        <CurrentWeather />
      </div>
    </main>
  );
}
