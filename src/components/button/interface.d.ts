import {TextStyle, ViewStyle} from 'react-native';

interface coreButtonProps {
  bgColor?: string;
  textColor?: string;
  style?: ViewStyle;
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
  onPress?: () => void;
  text?: string;
  icon?: any; /* TODO: update this with text element or view element */
  loading?: boolean;
  rightIcon?: any; /* TODO: update this with text element or view element */
  className?:string;
}
export type {coreButtonProps};
