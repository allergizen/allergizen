import { useCallback } from 'react';
import { useWindowSizeClass } from '../base/WindowSizeClassContext';
const classes = ['base', 'sm', 'md', 'lg', 'xl'];
export const useWindowSize = () => {
  const windowSizeClass = useWindowSizeClass();
  return useCallback(query => {
    const keys = Object.keys(query);
    let nearest = windowSizeClass;

    while (!keys.includes(nearest)) {
      nearest = classes[classes.indexOf(nearest) - 1];
    }

    return query[nearest];
  }, [windowSizeClass]);
};
//# sourceMappingURL=use-window-size.js.map