import { colors } from '@assets/styles/colors.style.asset';
import { animationProperties } from '@assets/styles/properties.asset';
import React, {useEffect, useRef} from 'react';
import {Animated, ViewStyle} from 'react-native';

interface baseSkeletonProps {
  width?: number | 'auto' | `${number}%`;
  height?: number | 'auto' | `${number}%`;
  borderRadius?: number;
  bgColor?: string;
  style?: ViewStyle;
}

const BaseSkeleton: React.FC<baseSkeletonProps> = ({ width = 50, height = 30, borderRadius = 0, bgColor, style }) => {
  const opacity = useRef(new Animated.Value(0.3));
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacity.current, {
          toValue: 1,
          useNativeDriver: animationProperties.opacity,
          duration: 500,
        }),
        Animated.timing(opacity.current, {
          toValue: 0.3,
          useNativeDriver: animationProperties.opacity,
          duration: 800,
        }),
      ]),
    ).start();
  }, [opacity]);

  return (
    <Animated.View
      style={[
        {
          opacity: opacity.current,
          height: height,
          width: width,
          backgroundColor: bgColor ? bgColor : colors.grey5,
          borderRadius: borderRadius,
        },
        style as ViewStyle,
      ]}
    />
  );
};

export default BaseSkeleton;
