import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

import type { StatsCardProps } from '@/features/dashboard/dashboard.types';

export default function StatsCard<T>({ icon, title, content }: StatsCardProps<T>) {
  return (
    <Card className="shadow-[0_0_10px_rgba(59,130,246,0.35)] ring-1 ring-blue-300/30">
      <CardHeader>
        <CardTitle className="flex items-center gap-1">
          {icon}
          <p className="text-md">{title}</p>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-lg font-semibold">{content + '°'}</p>
      </CardContent>
    </Card>
  );
}
