/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Platform } from 'react-native';

const tintColorLight = '#007a78';
const tintColorDark = '#00bfa5';

export const Colors = {
  light: {
    text: '#002a2a',
    secondaryText: '#e2ecec',
    title: '#005958',
    background: '#f4fbfb',
    secondaryBackground: '#7fd1c6',
    tint: tintColorLight,
    icon: '#008b88',
    tabIconDefault: '#7fa9a8', //unselected tabs
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#e8fbf6',
    secondaryText: '#022d2d',
    title: '#7fd1c6',
    background: '#001e1e',
    secondaryBackground: '#0b4a44',
    tint: tintColorDark,
    icon: '#197a73',
    tabIconDefault: '#5a8281', // unselected tabs
    tabIconSelected: tintColorDark,
  },
};

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
