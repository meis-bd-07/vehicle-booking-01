import { colors } from '@assets/styles/colors.style.asset';
import { IIconProps } from '@type/element.interface';
import React from 'react';
import Svg, {Path} from 'react-native-svg';

const LocationIcon: React.FC<IIconProps> = ({
  width = 8,
  height = 12,
  fill = colors.location,
}) => (
  <Svg width={width} height={height} viewBox="0 0 8 12" fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.816 4.625a1.618 1.618 0 01-1.148.475 1.625 1.625 0 010-3.245 1.625 1.625 0 011.148 2.77zm-.454-1.841a.978.978 0 00-.694-.287.982.982 0 10.694.287z"
      fill={fill}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.947 10.83l-.242.297-.237-.3C3.326 10.648 0 6.417 0 3.867 0 1.736 1.664 0 3.71 0c2.044 0 3.708 1.735 3.708 3.868 0 2.68-3.329 6.79-3.47 6.963zm2.845-6.962C6.792 2.095 5.41.653 3.71.653 2.01.653.626 2.095.626 3.868c0 .942.569 2.366 1.645 4.116A28.913 28.913 0 003.713 10.1a26.39 26.39 0 001.432-2.062c1.078-1.732 1.647-3.174 1.647-4.17z"
      fill={fill}
    />
  </Svg>
);
export default LocationIcon;
