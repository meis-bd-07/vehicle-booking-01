import { appColors as appColor } from "@config";

const appColors = {
  ...appColor,
};
const baseColors = {
  transparent: 'transparent',
  whiteOpacity: '#FF573300',
  gray2Opacity2: '#32343633',
  yellow: '#f9db4a',
  black: '#2C2B2A',
  grey1: '#777473',
  grey2: '#a9a7a6',
  grey3: '#d1d0cf',
  grey4: '#eae9e9',
  grey5: '#f2f1f1',
  white: '#ffffff',
  info: '#EFCC41',
  error: '#E51A25',
  success: '#008951',
  disableBg: '#CFD1D2',
  disableText: '#A1A5C1',
  pureBlack: '#000000',
  green: '#1F8B4D',
  gold: '#FFB400',
  goldOpacity: '#fff4d9',
  location: '#E67E22',
  locationOpacity: '#fae5d3',
  gray6: '#868181',
  gray7: '#D8D8D8',
  heartRed: '#B00000',
  heartRedOpacity: '#f6e5e5',
  red001: '#EBE1E1',
  gray200: '#EEEEEE',
  border: '#EBEBEB',
  white10: '#F5F5F5'
};
const propertiesColor = {
  button: {
    primary: appColors.primary,
    primaryText: baseColors.white,
    secondary: appColors.secondary,
    secondaryText: appColors.secondaryLight,
    disable: baseColors.disableBg,
    disableText: baseColors.disableText,
    warn: baseColors.error,
    warnText: baseColors.white,
  },
  bottomTab: {
    activeColor: appColors.primary,
    inactive: baseColors.black,
  },
  tab: {
    activeTab: appColors.primary,
    activeText: baseColors.black,
    inactiveTab: baseColors.transparent,
    inactiveText: baseColors.grey1,
  },
  icon: {
    color: appColors.primary,
    altColor: baseColors.white,
  },
  splash: {
    bg: appColors.splashBg,
    text: appColors.splashText,
  },
  drawer: {
    text: baseColors.white,
    selectedText: baseColors.white,
    icon: baseColors.white,
    selectedIcon: baseColors.white,
    bg: appColors.primary,
    select: baseColors.grey1,
    divider: baseColors.grey1,
  },
};
export const colors = {
  ...appColors,
  ...baseColors,
  ...propertiesColor,
};
