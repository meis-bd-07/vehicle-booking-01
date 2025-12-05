import { colors } from '@assets/styles/colors.style.asset';
import { globalStyles } from '@assets/styles/global.style.asset';
import CustomStatusBar from '@components/status-bar/index.component';
import React from 'react';
import {View, ViewStyle} from 'react-native';

const SplashContainer: React.FC<{children: React.ReactNode; containerStyle?: ViewStyle;}> = ({children, containerStyle}) => {
  return (
    <View style={[globalStyles.flex1, {backgroundColor: colors.splash.bg}]}>
      <CustomStatusBar showHeader={false} barStyle={'light-content'} bgColor={colors.transparent} />
      <View style={[globalStyles.relativeContainer, containerStyle]}>{children}</View>
    </View>
  );
};
export default SplashContainer;
