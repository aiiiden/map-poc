import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Layout from './components/layout';

const router = createBrowserRouter([
  {
    path: '',
    element: <Layout />,
    children: [
      {
        path: '/',
        lazy: async () => ({
          Component: (await import('./pages/index')).default,
        }),
      },
      {
        path: '/about',
        lazy: async () => ({
          Component: (await import('./pages/about')).default,
        }),
      },
      {
        path: '/map',
        lazy: async () => ({
          Component: (await import('./pages/map')).default,
        }),
      },
    ],
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
