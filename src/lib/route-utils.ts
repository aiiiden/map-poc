import { LazyRouteFunction, RouteObject } from 'react-router-dom';

export function lazyLoad(path: string): LazyRouteFunction<RouteObject> {
  return async () => {
    const module = await import(`../${path}`);
    return {
      Component: module.default,
    };
  };
}
