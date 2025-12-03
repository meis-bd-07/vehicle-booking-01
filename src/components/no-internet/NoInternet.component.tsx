import { colors } from '@assets/styles/colors.style.asset';
import { customPadding } from '@assets/styles/global.style.asset';
import rs from '@assets/styles/responsiveSize.style.asset';
import { typographies } from '@assets/styles/typographies.style.asset';
import { messages } from '@assets/text-and-message/messages.asset';
import { netInfoEventListener } from '@packages/net-info/netInfoHandler';
import React, {useEffect, useRef} from 'react';
import {Animated, Easing, StyleSheet, Text, View} from 'react-native';

const NoInternetNotifier = () => {
  const translateRef = useRef<any>(new Animated.Value(-160)).current;

  useEffect(() => {
    const updateConnectionStatus = (state: any) => {
      if (state && state.isConnected && state.type !== '' && state.type !== 'none') hideInfo();
      else showInfo();
    };
    const unsubscribe = netInfoEventListener(updateConnectionStatus);
    return () => unsubscribe();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const showInfo = () => {
    Animated.timing(translateRef, {
      toValue: 60,
      duration: 400,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  };
  const hideInfo = () => {
    if (translateRef === 0) {
      return;
    }
    Animated.timing(translateRef, {
      toValue: -160,
      duration: 400,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  };

  const scale = translateRef.interpolate({
    inputRange: [-160, 60],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });
  return (
    <Animated.View style={[style.container, { transform: [{translateY: translateRef}, {scale: scale}] } ]}>
      <View style={style.leftContainer}><Text style={style.text} numberOfLines={2}>{messages.noInternet}</Text></View>
    </Animated.View>
  );
};
export default NoInternetNotifier;

const style = StyleSheet.create({
  container: {
    ...customPadding(16, 16, 16, 16),
    borderRadius: 14,
    backgroundColor: colors.black,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: rs(20),
    position: 'absolute',
    zIndex: 999,
    right: 0,
    overflow: 'hidden',
  },
  leftContainer: {flexDirection: 'row', flex: 1, marginRight: rs(24)},
  text: {
    flexShrink: 1,
    ...typographies.bodyMedium,
    color: colors.white,
  },
});
