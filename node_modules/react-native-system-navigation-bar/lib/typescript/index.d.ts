export type GetBarColorType = string | {
    status: string;
    navigation: string;
};
declare var SystemNavigationBar: {
    navigationHide: () => Promise<any>;
    navigationShow: () => Promise<any>;
    leanBack: (enabled?: boolean) => Promise<any>;
    immersive: () => Promise<any>;
    stickyImmersive: (enabled?: boolean) => Promise<any>;
    lowProfile: (enabled?: boolean) => Promise<any>;
    setBarMode: (style?: 'light' | 'dark', bar?: 'navigation' | 'status' | 'both') => Promise<any>;
    setNavigationColor: (color: string | number, style?: 'light' | 'dark', bar?: 'navigation' | 'status' | 'both') => Promise<any>;
    setNavigationBarDividerColor: (color: string | number) => Promise<any>;
    setNavigationBarContrastEnforced: (enabled?: boolean) => Promise<any>;
    fullScreen: (enabled?: boolean) => Promise<any>;
    getBarColor: (bar?: 'navigation' | 'status' | 'both') => Promise<GetBarColorType>;
    setFitsSystemWindows: (enabled?: boolean) => Promise<any>;
};
export default SystemNavigationBar;
