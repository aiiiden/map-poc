import { Outlet } from 'react-router-dom';

import { cn } from '@/lib/tailwind-utils';

export default function MobileLayout() {
  return (
    <div className={cn(['min-h-svh antialiased bg-gray-50'])}>
      <div
        className={cn([
          'max-w-screen-sm mx-auto h-svh overflow-y-auto bg-white',
        ])}
      >
        <Outlet />
      </div>
    </div>
  );
}
