import { WindowSizeClass } from '../base/WindowSizeClassContext';
export declare type WindowSizeQuery<T> = Partial<Record<WindowSizeClass, T>> & {
    base: T;
};
export declare type WindowSize = <T>(query: WindowSizeQuery<T>) => T;
export declare const useWindowSize: () => WindowSize;
