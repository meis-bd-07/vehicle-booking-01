import { colors } from '@assets/styles/colors.style.asset';
import { IIconProps } from '@type/element.interface';
import React from 'react';
import Svg, {Path} from 'react-native-svg';

const StarIcon: React.FC<IIconProps> = ({
  width = 14,
  height = 14,
  fill = colors.gold,
}) => (
  <Svg width={width} height={height} viewBox="0 0 14 14" fill="none">
    <Path
        d="M7 10.074l3.605 2.176-.957-4.1 3.185-2.76-4.194-.356L7 1.167 5.36 5.034l-4.193.356 3.185 2.76-.957 4.1L7 10.074z"
        fill={fill}
    />
  </Svg>
);
export default StarIcon;
