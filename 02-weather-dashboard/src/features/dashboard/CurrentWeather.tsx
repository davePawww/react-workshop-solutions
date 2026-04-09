import { Thermometer, Building, CloudRain, Droplets, Wind } from 'lucide-react';

import StatsCard from '@/features/dashboard/StatsCard';

export function CurrentWeather() {
  return (
    <>
      <h1 className="mt-8 font-medium">Current Weather</h1>
      <div className="grid grid-cols-3 gap-5">
        <StatsCard
          icon={<Building size={20} />}
          title={'City'}
          content={'Valenzuela, Metro Manila'}
        />
        <StatsCard icon={<Thermometer size={20} />} title={'Temperature'} content={28.2} />
        <StatsCard icon={<CloudRain size={20} />} title={'Weather Condition'} content={'Rainy'} />
        <StatsCard icon={<Droplets size={20} />} title={'Humidity'} content={33} />
        <StatsCard icon={<Wind size={20} />} title={'Wind'} content={28.2} />
      </div>
    </>
  );
}
