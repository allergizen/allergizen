import { useMemo } from 'react';
import { useSpacingFunc } from 'react-native-flex-layout';
import { useTheme } from '../base/ThemeContext';
import { useWindowSizeClass } from '../base/WindowSizeClassContext';
import { useWindowSize } from './use-window-size';
import { useSurfaceScale } from './use-surface-scale';
import { useSurfaceColor } from './use-surface-color';
export const useStyles = (factory, deps) => {
  const theme = useTheme();
  const surfaceScale = useSurfaceScale();
  const surfaceColor = useSurfaceColor();
  const windowSizeClass = useWindowSizeClass();
  const windowSize = useWindowSize();
  const spacing = useSpacingFunc();
  return useMemo(() => factory({ ...theme,
    surfaceScale,
    surfaceColor,
    windowSizeClass,
    windowSize,
    spacing
  }), [factory, theme, surfaceScale, surfaceColor, windowSizeClass, windowSize, spacing, deps]);
};
//# sourceMappingURL=use-styles.js.map