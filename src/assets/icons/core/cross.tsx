import { colors } from '@assets/styles/colors.style.asset';
import { IIconProps } from '@type/element.interface';
import React from 'react';
import Svg, {Path} from 'react-native-svg';

const CrossIcon: React.FC<IIconProps> = ({
  width = 14,
  height = 14,
  fill = colors.black,
}) => (
  <Svg width={width} height={height} viewBox="0 0 14 14" fill="none">
    <Path
      d="M14 1.41L12.59 0 7 5.59 1.41 0 0 1.41 5.59 7 0 12.59 1.41 14 7 8.41 12.59 14 14 12.59 8.41 7 14 1.41z"
      fill={fill}
      fillOpacity={0.64}
    />
  </Svg>
);
export default CrossIcon;
