import Title from '@/components/Title';
import CurrentWeather from '@/features/dashboard/CurrentWeather';
import WeatherForecast from '@/features/dashboard/WeatherForecast';
import WeatherSearch from '@/features/dashboard/WeatherSearch';

export function Dashboard() {
  return (
    <main className="flex min-h-screen w-full items-center justify-center">
      <div className="w-full max-w-3xl space-y-8">
        <Title />
        <WeatherSearch />
        <CurrentWeather />
        <WeatherForecast />
      </div>
    </main>
  );
}
