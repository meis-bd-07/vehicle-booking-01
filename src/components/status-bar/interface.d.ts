import {StatusBarStyle} from 'react-native';
import {colors} from '@assets/styles/colors.style.asset';

export interface IStatusBarStyle {
  height: number;
  bgColor: string;
  extraHeight: number;
}
interface IStatusBar {
  barStyle?: StatusBarStyle;
  showHeader?: boolean;
  bgColor?: colors;
  extraHeight?: number;
}
