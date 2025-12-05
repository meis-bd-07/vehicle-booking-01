import { colors } from '@assets/styles/colors.style.asset';
import { IIconProps } from '@type/element.interface';
import React from 'react';
import Svg, {Path} from 'react-native-svg';

const FilterIcon: React.FC<IIconProps> = ({
  width = 16,
  height = 16,
  fill = colors.pureBlack,
}) => (
  <Svg width={width} height={height} viewBox="0 0 16 16" fill="none">
    <Path
        d="M2 12h4v-1.333H2V12zm0-8v1.333h12V4H2zm0 4.667h8V7.333H2v1.334z"
        fill={fill}
        fillOpacity={0.88}
      />
  </Svg>
);
export default FilterIcon;
