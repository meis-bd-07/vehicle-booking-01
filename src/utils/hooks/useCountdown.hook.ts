/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from 'react';

type endValue = number | '__infinite__';
interface IProps {
  startValue?: number;
  endValue?: endValue;
  increment?: number;
  callback?: () => void;
  callbackOnEveryUpdate?: (value: number) => void;
}

const useCountdown = ({
  startValue = 0,
  endValue = 60,
  increment = 1,
  callback = () => {},
  callbackOnEveryUpdate = (value) => console.log(value),
}: IProps) => {
  let endValueData: endValue = 60;
  if (endValue === '__infinite__') {
    endValueData = '__infinite__';
  } else {
    endValueData = endValue;
  }
  const [countDown, setCountDown] = useState<number>(startValue);
  useEffect(() => {
    let interval: number = 0;
    if (endValueData === '__infinite__') {
      interval = setInterval(() => {
        setCountDown(countDown + increment);
        callbackOnEveryUpdate(countDown + increment);
      }, 1000);
    } else {
      if (increment > 0 && startValue < endValueData) {
        interval = setInterval(() => {
          setCountDown(countDown + increment);
          callbackOnEveryUpdate(countDown + increment);
        }, 1000);
        if (countDown >= endValueData) {
          clearInterval(interval);
          setCountDown(endValueData);
          callback();
        }
      } else if (increment < 0 && startValue > endValueData) {
        interval = setInterval(() => {
          setCountDown(countDown + increment);
          callbackOnEveryUpdate(countDown + increment);
        }, 1000);
        if (countDown <= endValueData) {
          clearInterval(interval);
          setCountDown(endValueData);
          callback();
        }
      }
    }
    return () => clearInterval(interval);
  }, [countDown]);
  return countDown;
};
export {useCountdown};
