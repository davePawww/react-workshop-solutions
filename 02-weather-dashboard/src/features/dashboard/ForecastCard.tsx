import { LucideThermometerSun, Sun } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';
import { getDayOfTheWeek } from '@/utils';

import type { ForecastCardProps } from '@/features/dashboard/dashboard.types';

export default function ForecastCard({
  date,
  tempHigh,
  tempLow,
  weatherCondition,
}: ForecastCardProps) {
  return (
    <Card className="shadow-[0_0_10px_rgba(59,130,246,0.35)] ring-1 ring-blue-300/30">
      <CardContent className="flex items-center justify-around">
        <div className="text-center">
          <h1 className="text-lg font-semibold">{getDayOfTheWeek(date)}</h1>
          <p className="text-white/50">{date}</p>
        </div>
        <div className="flex items-center gap-2">
          <LucideThermometerSun />
          <div className="flex items-end gap-1">
            <h1 className="text-xl font-semibold">{tempHigh + '°'}</h1>
            <p className="text-md text-white/50">{tempLow + '°'}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Sun />
          <p className="text-xl font-semibold tracking-wide">{weatherCondition}</p>
        </div>
      </CardContent>
    </Card>
  );
}
