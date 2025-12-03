import {StyleSheet} from 'react-native';
import {IStatusBarStyle} from './interface';
const statusBarStyle = (params: IStatusBarStyle) =>
  StyleSheet.create({
    container: {
      backgroundColor: params.bgColor,
      paddingBottom: params.height + params.extraHeight,
    },
  });

export default statusBarStyle;
