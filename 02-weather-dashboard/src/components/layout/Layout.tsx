import type { LayoutProps } from '@/features/dashboard/dashboard.types';

export default function Layout({ children }: LayoutProps) {
  return <div className="flex min-h-dvh flex-col">{children}</div>;
}
