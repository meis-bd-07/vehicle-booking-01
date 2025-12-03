import {StyleSheet} from 'react-native';
import {fonts} from './fonts.style.asset';
import rs from './responsiveSize.style.asset';
import {colors} from './colors.style.asset';



export const typographies = StyleSheet.create({
  headerSemiBold: {
    fontFamily: fonts.inter600, //semi bold
    fontWeight: '600', /* TODO: check with Kohinoor Bangla variant if available */
    fontSize: rs(14),
    lineHeight: rs(24),
    letterSpacing: 0,
    color: colors.black,
    textAlign: 'left',
  },
  headerW700: {
    fontFamily: fonts.inter600, //semi bold
    fontWeight: '700', /* TODO: check with Kohinoor Bangla variant if available */
    fontSize: rs(22),
    lineHeight: rs(33),
    letterSpacing: 0,
    color: colors.black,
    textAlign: 'left',
  },
  listHeaderW700: {
    fontFamily: fonts.inter600, //semi bold
    fontWeight: '700', /* TODO: check with Kohinoor Bangla variant if available */
    fontSize: rs(18),
    lineHeight: rs(27),
    letterSpacing: 0,
    color: colors.black,
    textAlign: 'left',
  },
  textSubTitleW400: {
    fontFamily: fonts.inter600, //semi bold
    fontWeight: '400', /* TODO: check with Kohinoor Bangla variant if available */
    fontSize: rs(12),
    lineHeight: rs(18),
    letterSpacing: 0,
    color: colors.black,
    textAlign: 'left',
  },
  nameTextW400: {
    fontFamily: fonts.inter600, //semi bold
    fontWeight: '400', /* TODO: check with Kohinoor Bangla variant if available */
    fontSize: rs(14),
    lineHeight: rs(21),
    letterSpacing: 0,
    color: colors.black,
    textAlign: 'left',
  },
  textSubTitleW500: {
    fontFamily: fonts.inter600, //semi bold
    fontWeight: '500', /* TODO: check with Kohinoor Bangla variant if available */
    fontSize: rs(12),
    lineHeight: rs(18),
    letterSpacing: 0,
    color: colors.black,
    textAlign: 'left',
  },
  textS10W400: {
    fontFamily: fonts.inter600, //semi bold
    fontWeight: '400', /* TODO: check with Kohinoor Bangla variant if available */
    fontSize: rs(10),
    lineHeight: rs(15),
    letterSpacing: 0,
    color: colors.black,
    textAlign: 'left',
  }
});