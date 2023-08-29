import React from 'react';
import { ImageStyle, TextStyle, ViewStyle } from 'react-native';
export declare type ColorScheme = 'light' | 'dark';
export declare type Elevation = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24;
export declare type Elevations = Record<Elevation, ViewStyle | TextStyle | ImageStyle>;
export declare type PaletteColorName = 'primary' | 'secondary' | 'background' | 'surface' | 'error' | string;
export declare type PaletteColor = {
    main: string;
    on: string;
};
export declare type Palette = Record<PaletteColorName, PaletteColor>;
export declare type ShapeCategory = 'small' | 'medium' | 'large';
export interface ShapeBorderRadius {
    borderTopStartRadius: number;
    borderTopEndRadius: number;
    borderBottomStartRadius: number;
    borderBottomEndRadius: number;
}
export declare type Shapes = Record<ShapeCategory, ShapeBorderRadius>;
export declare type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'button' | 'caption' | 'overline';
export declare type Typography = Record<TypographyVariant, TextStyle>;
export interface Theme {
    colorScheme: ColorScheme;
    elevations: Elevations;
    palette: Palette;
    shapes: Shapes;
    typography: Typography;
}
export interface ThemeProviderProps {
    theme?: Theme;
}
export declare const ThemeContext: React.Context<Theme>;
export declare const useTheme: () => Theme;
export declare const ThemeProvider: React.FC<ThemeProviderProps>;
