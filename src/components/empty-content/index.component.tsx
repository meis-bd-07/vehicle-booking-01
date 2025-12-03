import { ActivityIndicator, StyleProp, Text, TextStyle, View, ViewStyle } from 'react-native';
import React from 'react';
import { colors } from '@assets/styles/colors.style.asset';
import { globalStyles } from '@assets/styles/global.style.asset';
import { typographies } from '@assets/styles/typographies.style.asset';

interface IEmptyContent {
  text?: string;
  style?: ViewStyle;
  forLoading?: boolean;
  loadingColor?: string;
  textStyle?: StyleProp<TextStyle>;
}

const EmptyContent: React.FC<IEmptyContent> = ({
  text = '',
  style = {},
  forLoading = false,
  loadingColor = colors.primary,
  textStyle,
}) => {
  return (
    <View style={[globalStyles.centerView, style]}>
      {forLoading ? (
        <ActivityIndicator size={'large'} color={loadingColor} />
      ) : (
        <Text style={[typographies.bodySmall, textStyle]}>{text}</Text>
      )}
    </View>
  );
};

export default EmptyContent;
