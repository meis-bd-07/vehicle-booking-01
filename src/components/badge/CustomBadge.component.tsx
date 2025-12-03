import { colors } from '@assets/styles/colors.style.asset';
import { typographies } from '@assets/styles/typographies.style.asset';
import React from 'react';
import {View, Text, StyleSheet, StyleProp, ViewStyle, TextStyle} from 'react-native';

type ICustomBadge = {value: number | string; style?: StyleProp<ViewStyle>; textStyle?: StyleProp<TextStyle>}

const CustomBadge = ({value = 0, style, textStyle}: ICustomBadge) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.text, textStyle]}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.badgeColor,
    borderRadius: 10,
    height: 18,
    width: 18,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    ...typographies.bodySmallBold,
    color: colors.white,
  },
});

export default CustomBadge;
