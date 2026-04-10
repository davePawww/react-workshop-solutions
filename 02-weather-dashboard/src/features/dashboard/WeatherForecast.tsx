import ForecastCard from '@/features/dashboard/ForecastCard';

export default function WeatherForecast() {
  return (
    <div>
      <h1 className="mb-1.5 text-lg font-medium tracking-wider">Weather Forecast</h1>
      <div className="space-y-4">
        <ForecastCard />
        <ForecastCard />
        <ForecastCard />
        <ForecastCard />
        <ForecastCard />
        <ForecastCard />
        <ForecastCard />
      </div>
    </div>
  );
}
