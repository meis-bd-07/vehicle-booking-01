export const fonts = {
  kLatin: 'KohinoorLatin-Black-BF63c76510c679a',
  kLatinItalic: 'KohinoorLatin-BlackItalic-BF63c76510c5583',
  kLatinBold: 'KohinoorLatin-Bold-BF63c76513f09da',
  kLatinBoldItalic: 'KohinoorLatin-BoldItalic-BF63c7651386cfd',
  kLatinBook: 'KohinoorLatin-Book-BF63c76513e60f1',
  kLatinBookItalic: 'KohinoorLatin-BookItalic-BF63c76513bc679',
  kLatinDemi: 'KohinoorLatin-Demi-BF63c765144638d',
  kLatinDemiItalic: 'KohinoorLatin-DemiItalic-BF63c7651389346',
  kLatinLight: 'KohinoorLatin-Light-BF63c76513209af',
  kLatinLightItalic: 'KohinoorLatin-LightItalic-BF63c7651347850',
  kLatinLightMedium: 'KohinoorLatin-Medium-BF63c76513dba4c',
  kLatinLightMediumItalic: 'KohinoorLatin-MediumItalic-BF63c76513cfcb2',
};
type FontWeightType =
  | 'normal'
  | 'bold'
  | 'bolder'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900';

interface fwsObject {
  font400: FontWeightType;
  font500: FontWeightType;
  font600: FontWeightType;
  font700: FontWeightType;
}
export const fws: fwsObject = {
  font400: '400',
  font500: '500',
  font600: '600',
  font700: '700',
};
