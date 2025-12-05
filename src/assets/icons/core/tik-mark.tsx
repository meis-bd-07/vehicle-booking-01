import { colors } from '@assets/styles/colors.style.asset';
import { IIconProps } from '@type/element.interface';
import React from 'react';
import Svg, {Path} from 'react-native-svg';

const TikMarkIcon: React.FC<IIconProps> = ({
  width = 16,
  height = 16,
  fill = colors.check,
}) => (
  <Svg width={width} height={height} viewBox="0 0 16 16" fill="none">
    <Path
      d="M6 10.8L3.2 8l-.933.933L6 12.667l8-8-.933-.934L6 10.8z"
      fill={fill}
    />
  </Svg>
);
export default TikMarkIcon;
