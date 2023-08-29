import React from 'react';
import { SpacingFuncProviderProps } from 'react-native-flex-layout';
import { ThemeProviderProps } from './ThemeContext';
import { WindowSizeClassProviderProps } from './WindowSizeClassContext';
import { IconComponentProviderProps } from './IconComponentContext';
export declare type ProviderProps = ThemeProviderProps & WindowSizeClassProviderProps & SpacingFuncProviderProps & IconComponentProviderProps;
export declare const Provider: React.FC<ProviderProps>;
