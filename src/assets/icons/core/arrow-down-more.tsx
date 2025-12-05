import { IIconProps } from '@type/element.interface';
import React from 'react';
import Svg, {Path} from 'react-native-svg';

const ArrowDownMoreIcon: React.FC<IIconProps> = ({
  width = 16,
  height = 16,
}) => (
  <Svg width={width} height={height} viewBox="0 0 16 16" fill="none">
    <Path
        opacity={0.5}
        d="M5.268 5.795L8 8.521l2.732-2.726.839.84L8 10.204l-3.57-3.57.838-.84z"
        fill="#fff"
    />
    <Path
        opacity={0.3}
        d="M5.268 1.795L8 4.521l2.732-2.726.839.84L8 6.204l-3.57-3.57.838-.84z"
        fill="#fff"
    />
    <Path
        d="M5.268 9.795L8 12.521l2.732-2.726.839.84L8 14.204l-3.57-3.57.838-.84z"
        fill="#fff"
    />
  </Svg>
);
export default ArrowDownMoreIcon;
