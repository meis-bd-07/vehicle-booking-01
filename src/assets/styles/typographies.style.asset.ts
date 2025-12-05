import {StyleSheet} from 'react-native';
import {fonts} from './fonts.style.asset';
import rs from './responsiveSize.style.asset';
import {colors} from './colors.style.asset';



export const typographies = StyleSheet.create({
  headerSemiBold: {
    fontFamily: fonts.kLatinBold, //semi bold
    fontWeight: '600', /* TODO: check with Kohinoor Bangla variant if available */
    fontSize: rs(14),
    lineHeight: rs(24),
    letterSpacing: 0,
    color: colors.black,
    textAlign: 'left',
  },
  headerW700: {
    fontFamily: fonts.kLatinBold, //semi bold
    fontWeight: '700', /* TODO: check with Kohinoor Bangla variant if available */
    fontSize: rs(22),
    lineHeight: rs(33),
    letterSpacing: 0,
    color: colors.black,
    textAlign: 'left',
  },
  listHeaderW700: {
    fontFamily: fonts.kLatinBold,
    fontWeight: '700',
    fontSize: rs(18),
    lineHeight: rs(27),
    letterSpacing: 0,
    color: colors.black,
    textAlign: 'left',
  },
  textSubTitleW400: {
    fontFamily: fonts.kLatinBook,
    fontWeight: '400',
    fontSize: rs(12),
    lineHeight: rs(18),
    letterSpacing: 0,
    color: colors.black,
    textAlign: 'left',
  },
  nameTextW400: {
    fontFamily: fonts.kLatinBold,
    fontWeight: '400',
    fontSize: rs(14),
    lineHeight: rs(21),
    letterSpacing: 0,
    color: colors.black,
    textAlign: 'left',
  },
  textSubTitleW500: {
    fontFamily: fonts.kLatinBold,
    fontWeight: '500',
    fontSize: rs(12),
    lineHeight: rs(18),
    letterSpacing: 0,
    color: colors.black,
    textAlign: 'left',
  },
  textS10W400: {
    fontFamily: fonts.kLatinBold,
    fontWeight: '400',
    fontSize: rs(10),
    lineHeight: rs(15),
    letterSpacing: 0,
    color: colors.black,
    textAlign: 'left',
  },
  headerS16W600: {
    fontFamily: fonts.kLatinBold,
    fontWeight: '600',
    fontSize: rs(16),
    lineHeight: rs(24),
    letterSpacing: 0,
    color: colors.black,
    textAlign: 'left',
  },
  textS24W700: {
    fontFamily: fonts.kLatinBold,
    fontWeight: '700',
    fontSize: rs(24),
    lineHeight: rs(32),
    letterSpacing: 0,
    color: colors.black,
    textAlign: 'left',
  },
  textS14L21W500: {
    fontFamily: fonts.kLatinLightMedium,
    fontWeight: '500',
    fontSize: rs(14),
    lineHeight: rs(21),
    letterSpacing: 0,
    color: colors.black,
    textAlign: 'left',
  },
  textS14L21W400: {
    fontFamily: fonts.kLatinBook,
    fontWeight: '400',
    fontSize: rs(14),
    lineHeight: rs(21),
    letterSpacing: 0,
    color: colors.black,
    textAlign: 'left',
  },
  textS12L21W400: {
    fontFamily: fonts.kLatinBook,
    fontWeight: '500',
    fontSize: rs(12),
    lineHeight: rs(21),
    letterSpacing: 0,
    color: colors.black,
    textAlign: 'left',
  },
  textS12L18W600: {
    fontFamily: fonts.kLatinBold,
    fontWeight: '600',
    fontSize: rs(12),
    lineHeight: rs(18),
    letterSpacing: 0,
    color: colors.black,
    textAlign: 'left',
  },
  textS10L21W400: {
    fontFamily: fonts.kLatinBook,
    fontWeight: '400',
    fontSize: rs(10),
    lineHeight: rs(21),
    letterSpacing: 0,
    color: colors.black,
    textAlign: 'left',
  },
  textS14L24W500: {
    fontFamily: fonts.kLatinBook,
    fontWeight: '500',
    fontSize: rs(14),
    lineHeight: rs(24),
    letterSpacing: 0,
    color: colors.black,
    textAlign: 'left',
  },
  textS12L18W400: {
    fontFamily: fonts.kLatinBook,
    fontWeight: '400',
    fontSize: rs(12),
    lineHeight: rs(18),
    letterSpacing: 0,
    color: colors.black,
    textAlign: 'left',
  }
});
