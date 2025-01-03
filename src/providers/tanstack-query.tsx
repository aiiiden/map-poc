import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

export function TanstackQueryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const env = import.meta.env.VITE_ENVIRONMENT;

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {env === 'development' && <ReactQueryDevtools initialIsOpen={false} />}
    </QueryClientProvider>
  );
}
