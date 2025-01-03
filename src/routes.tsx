import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Layout from './components/layout';
import { lazyLoad } from './lib/route-utils';

const router = createBrowserRouter([
  {
    path: '',
    element: <Layout />,
    children: [
      {
        path: '/',
        lazy: lazyLoad('pages/index'),
      },
      {
        path: '/about',
        lazy: lazyLoad('pages/about'),
      },
    ],
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
