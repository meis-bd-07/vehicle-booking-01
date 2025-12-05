import {StyleSheet} from 'react-native';
import rs from './responsiveSize.style.asset';

export const globalStyles = StyleSheet.create({
  relativeContainer: {flex: 1, position: 'relative'},
  flex1: {flex: 1},
  centerView: {alignItems: 'center', flex: 1, justifyContent: 'center'},
  activityCenter: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexShrink1: {flexShrink: 1},
  flexGrow1: {flexGrow: 1},
  emptyFlexBox: {flexGrow: 1},
  rowBetween: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  rowBetweenWithoutFlex: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'space-between',
    // alignItems: 'center',
  },
  gap2: {gap: 2},
  rotate90: {transform: [{rotate: '90deg'}]},
  dot14: {height: 14, width: 14, borderRadius: 7},
  dot4: {height: 4, width: 4, borderRadius: 2},
  flexRow: {flexDirection: 'row', alignItems: 'center', gap: rs(10)},
  gap8: {gap: 8},
  gap6: {gap: 6},
  gap4: {gap: 4},
  gap10: {gap: 10},
  gap12: {gap: 12},
  textAlignJustify: {textAlign: 'justify'},
  textAlignCenter: {textAlign: 'center'},
  width100: {width: '100%'},
  height100: {height: '100%'},
  width50: {width: '50%'},
  gap18: {gap: 18},
  gap20: {gap: 20},
  gap22: {gap: 22},
  borderBottom0: {borderBottomWidth: 0},
  borderRadius50: {borderRadius: 50},
  overlay: {backgroundColor: 'rgba(0,0,0,0.4)', padding: 20, borderRadius: 10},
  absoluteFillObject:{position: 'absolute', left: 0, right: 0, top: 0, bottom: 0},
  pt4: {paddingTop: 4},
  pt12: {paddingTop: 12},
  pb10: {paddingBottom: 10},
  pb16: {paddingBottom: 16},
  fontBold: {fontWeight: 'bold'}
});

export const customPadding = (top = 0, right = 0, bottom = 0, left = 0) => {
  return {
    paddingTop: rs(top),
    paddingRight: rs(right),
    paddingBottom: rs(bottom),
    paddingLeft: rs(left),
  };
};
export const customMargin = (top = 0, right = 0, bottom = 0, left = 0) => {
  return {
    marginTop: rs(top),
    marginRight: rs(right),
    marginBottom: rs(bottom),
    marginLeft: rs(left),
  };
};
export const customBorderRadius = (
  topLeft = 0,
  topRight = 0,
  bottomRight = 0,
  bottomLeft = 0,
) => {
  return {
    borderTopLeftRadius: topLeft,
    borderTopRightRadius: topRight,
    borderBottomRightRadius: bottomRight,
    borderBottomLeftRadius: bottomLeft,
  };
};
