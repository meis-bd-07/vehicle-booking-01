import { colors } from '@assets/styles/colors.style.asset';
import { IIconProps } from '@type/element.interface';
import React from 'react';
import Svg, {Path} from 'react-native-svg';

const RightAngleIcon: React.FC<IIconProps> = ({
  width = 6,
  height = 9,
  fill = colors.black,
  fillOpacity = 0.64
}) => (
  <Svg width={width} height={height} viewBox="0 0 6 9" fill="none">
    <Path
        d="M0 .883l3.283 3.284L0 7.45l.883.883L5.05 4.167.883 0 0 .883z"
        fill={fill}
        fillOpacity={fillOpacity}
    />
  </Svg>
);
export default RightAngleIcon;



