import { useMemo } from 'react';
import { useWindowSize } from './use-window-size';
export const useWindowSizeValue = query => {
  const windowSize = useWindowSize();
  return useMemo(() => windowSize(query), [windowSize, query]);
};
//# sourceMappingURL=use-window-size-value.js.map