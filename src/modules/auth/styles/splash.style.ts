import { colors } from '@assets/styles/colors.style.asset';
import { customPadding } from '@assets/styles/global.style.asset';
import rs from '@assets/styles/responsiveSize.style.asset';
import { typographies } from '@assets/styles/typographies.style.asset';
import {StyleSheet} from 'react-native';

export const splashStyles = StyleSheet.create({
  container: {
    ...customPadding(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: rs(-15),
  },
  text: {
    ...typographies.textS14L21W400,
    color: colors.splash.text,
  },
  lottieContainer: {
    height: rs(70),
    width: rs(70),
    top: 10,
    marginLeft: -20,
    marginTop: -10,
  },
  splashContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    gap: 40,
  },
  lottie: {height: '100%', width: '100%', alignSelf: 'center'},
  textWrp: {
    gap: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    backgroundColor: 'red',
  },
  textAlt: {textAlign: 'center'},
  textWrpAlt: {alignItems: 'center', justifyContent: 'center', gap: 8},
});
