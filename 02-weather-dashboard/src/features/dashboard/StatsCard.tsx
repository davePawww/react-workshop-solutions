import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

import type { StatsCardProps } from '@/features/dashboard/dashboard.types';

export default function StatsCard({ icon, title, content, unit }: StatsCardProps) {
  return (
    <Card className="hover:shadow-[0_0_4px_rgba(59,130,246,0.35)] hover:shadow-teal-500">
      <CardHeader>
        <CardTitle className="flex items-center gap-1">
          {icon}
          <p className="text-md">{title}</p>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-lg font-semibold">
          {content} {unit && unit}
        </p>
      </CardContent>
    </Card>
  );
}
