import { Platform } from 'react-native';

const Globals = {
   css: { HorizontalPaddingView: 15, VerticalPaddingView: Platform.OS === 'android' ? 50 : 0 },
   theme: 'light',
};
export default Globals;
