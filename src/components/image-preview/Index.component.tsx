import React, {useState} from 'react';
import {Image, StyleSheet, View, ImageResizeMode, ImageStyle, StyleProp, ViewStyle} from 'react-native';
import { IFunctionalElementReturn } from '@type/element.interface';
import isEmpty from '@utils/helpers/isEmpty.utility';
import { imageLink } from '@assets/images/link.image.asset';
import BaseSkeleton from '@components/skeletons/BaseSkeleton.component';
import { colors } from '@assets/styles/colors.style.asset';
import { SvgProps, SvgUri } from 'react-native-svg';

export interface IImagePreview {
  styles?: StyleProp<ImageStyle>;
  source: {uri?: String; require?: number};
  borderRadius?: number;
  resizeMode?: ImageResizeMode;
  containerStyle?: StyleProp<ImageStyle>;
  containerClassName?: string;
  imageClassName?: string;
  isSvg?: boolean;
  svgProps?: Partial<SvgProps>
  skeletonStyles?: StyleProp<ViewStyle>
}

const ImagePreview = ({
  styles = {},
  source,
  resizeMode = 'cover',
  borderRadius = 0,
  containerStyle = {},
  isSvg = false,
  svgProps = {},
  skeletonStyles = {}
}: IImagePreview): IFunctionalElementReturn => {
  const [isLoading, setIsLoading] = useState(true);
  let image: any = typeof source === 'object' ? {...source} : source;
  try {
    if (!isEmpty(image) && !isEmpty(image?.uri)) image.uri = JSON.parse(image.uri ?? '');
  } catch {}
  return (
    <View style={[style.relative, containerStyle]}>
      {isSvg && (
        <SvgUri
          uri="https://trucklagbe.com/assets/icon/common-item/logo-truck-lagbe/truck-lagbe-dark.svg"
          style={styles}
          onLoad={() => setIsLoading(false)}
          {...svgProps}
        />
      )}
      {!isSvg && (<Image
        source={ image?.uri ? image : Number(image) ? image : imageLink.placeholder }
        style={[style.image, {borderRadius}, styles]}
        resizeMode={resizeMode as any}
        onLoadEnd={() => setIsLoading(false)}
        onLoadStart={() => setIsLoading(true)}
      />)}
      {isLoading && (
        <View style={[style.loaderView, skeletonStyles]}>
          <BaseSkeleton
            height={'100%'}
            width={'100%'}
            borderRadius={borderRadius}
          />
        </View>
      )}
    </View>
  );
};

export default ImagePreview;

const style = StyleSheet.create({
  relative: {
    position: 'relative',
    overflow: 'hidden',
    color: 'green',
    backgroundColor: colors.disableBg,
  },
  loaderView: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignContent: 'center',
    overflow: 'hidden',
  },
  image: {width: '100%', height: '100%'},
});
