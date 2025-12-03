import { colors } from '@assets/styles/colors.style.asset';
import { IIconProps } from '@type/element.interface';
import React from 'react';
import Svg, { G, Path, Defs } from "react-native-svg"

const HeartIcon: React.FC<IIconProps> = ({
  width = 15,
  height = 15,
  fill = colors.heartRed,
}) => (
  <Svg width={width} height={height} viewBox="0 0 15 15" fill="none">
    <G filter="url(#filter0_d_22_972)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.75 3A2.24 2.24 0 004 3.838 2.24 2.24 0 002.25 3C1.01 3 0 4.01 0 5.25c0 2.662 3.739 5.592 3.898 5.715a.166.166 0 00.204 0C4.262 10.842 8 7.912 8 5.25 8 4.01 6.99 3 5.75 3z"
        fill={fill}
      />
    </G>
    <Defs />
  </Svg>
);
export default HeartIcon;
