import { Cloud } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';

export default function ForecastCard() {
  return (
    <Card className="shadow-[0_0_10px_rgba(59,130,246,0.35)] ring-1 ring-blue-300/30">
      <CardContent className="flex items-center justify-around">
        <div className="text-center">
          <h1>TODAY</h1>
          <p>4/10</p>
        </div>
        <div>
          <Cloud />
          <h1>
            38 <span>29</span>
          </h1>
        </div>
        <div>
          <h1>Weather Condition</h1>
          <p>Cloudy</p>
        </div>
      </CardContent>
    </Card>
  );
}
