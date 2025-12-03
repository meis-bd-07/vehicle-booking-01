import { colors } from '@assets/styles/colors.style.asset';
import { IIconProps } from '@type/element.interface';
import React from 'react';
import Svg, {Path} from 'react-native-svg';

const ArrowLeft: React.FC<IIconProps> = ({
  width = 16,
  height = 16,
  fill = colors.black,
}) => (
  <Svg width={width} height={height} viewBox="0 0 16 16" fill="none">
    
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 7H3.827l5.586-5.587L8 0 0 8l8 8 1.413-1.413L3.827 9H16V7z"
      fill={fill}
    />
  </Svg>
);
export default ArrowLeft;
