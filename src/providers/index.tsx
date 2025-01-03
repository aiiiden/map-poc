import { TanstackQueryProvider } from './tanstack-query';

export function Providers({ children }: { children: React.ReactNode }) {
  return <TanstackQueryProvider>{children}</TanstackQueryProvider>;
}
