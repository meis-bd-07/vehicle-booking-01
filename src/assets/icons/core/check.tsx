import { colors } from '@assets/styles/colors.style.asset';
import { IIconProps } from '@type/element.interface';
import React from 'react';
import Svg, {Path} from 'react-native-svg';

const CheckIcon: React.FC<IIconProps> = ({
  width = 20,
  height = 20,
  fill = colors.green,
}) => (
  <Svg 
    width={width} 
    height={height} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke={fill}
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round">
    <Path d="M21 10.656V19a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h12.344" />
    <Path d="M9 11l3 3L22 4" />
  </Svg>
);
export default CheckIcon;
