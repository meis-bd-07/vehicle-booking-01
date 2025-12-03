import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {colors} from '../../assets/styles/colors.style.asset';
import React from 'react';
import {customPadding} from '../../assets/styles/global.style.asset';
import rs from '../../assets/styles/responsiveSize.style.asset';
import {coreButtonProps} from './interface';
import {typographies} from '../../assets/styles/typographies.style.asset';
const Button: React.FC<coreButtonProps> = ({ bgColor = colors.primary, textColor = colors.white, style, textStyle, onPress = () => {}, text, icon, rightIcon, loading, containerStyle }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={style}
      disabled={loading}>
      <View
        style={[styles.container, {backgroundColor: bgColor}, containerStyle]}>
        {loading ? (
          <ActivityIndicator color={colors.white} />
        ) : (
          <>
            {icon}
            {text && (
              <Text
                style={[styles.text, textStyle, {color: textColor}]}
                numberOfLines={1}>
                {text}
              </Text>
            )}
            {rightIcon && rightIcon}
          </>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    ...customPadding(12, 18, 12, 18),
    borderRadius: rs(10),
    zIndex: 1,
    gap: rs(8),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {...typographies.buttonMedium, textAlign: 'center'},
});
