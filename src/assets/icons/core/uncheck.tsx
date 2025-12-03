import { colors } from '@assets/styles/colors.style.asset';
import { IIconProps } from '@type/element.interface';
import React from 'react';
import Svg, {Path} from 'react-native-svg';

const UncheckIcon: React.FC<IIconProps> = ({
  width = 20,
  height = 20,
  fill = colors.gray6,
}) => (
  <Svg width={width} height={height} viewBox="0 0 20 20" fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.75 20h12.5A3.754 3.754 0 0020 16.25V3.75A3.755 3.755 0 0016.25 0H3.75A3.755 3.755 0 000 3.75v12.5A3.754 3.754 0 003.75 20zM.833 3.75A2.92 2.92 0 013.75.833h12.5a2.92 2.92 0 012.917 2.917v12.5a2.92 2.92 0 01-2.917 2.917H3.75A2.92 2.92 0 01.833 16.25V3.75z"
      fill={fill}
    />
  </Svg>
);
export default UncheckIcon;
