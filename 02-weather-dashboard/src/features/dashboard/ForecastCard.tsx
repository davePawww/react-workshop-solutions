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
    <Card className="hover:shadow-[0_0_4px_rgba(59,130,246,0.35)] hover:shadow-teal-500">
      <CardContent className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))]">
        <div className="text-center">
          <h1 className="font-semibol text-lg">{getDayOfTheWeek(date)}</h1>
          <p className="text-teal-500/80">{date}</p>
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
