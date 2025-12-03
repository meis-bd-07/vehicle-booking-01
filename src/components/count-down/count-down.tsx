import { useCountdown } from '@utils/hooks/useCountdown.hook';
import React from 'react';
import {StyleProp, Text, TextStyle} from 'react-native';

const formatter = (value: number) => value;

interface IProps {
  startValue?: number | string;
  endValue?: number;
  increment?: number | string;
  callback?: () => void;
  styles?: StyleProp<TextStyle>;
  format?: (value: number) => number | string;
  callbackOnEveryUpdate?: (value: number) => void;
}

const CountDown = ({
  startValue = 0,
  endValue = 60,
  increment = 1,
  callback = () => {},
  styles = {},
  format = formatter,
  callbackOnEveryUpdate = () => {},
}: IProps) => {
  const newValue: number = useCountdown({
    startValue: typeof startValue === 'string' ? parseInt(startValue, 10) : startValue,
    endValue: endValue,
    increment: typeof increment === 'string' ? parseFloat(increment) : increment,
    callback: callback,
    callbackOnEveryUpdate: callbackOnEveryUpdate,
  });
  return <Text style={styles}>{format(newValue)}</Text>;
};
export default CountDown;
