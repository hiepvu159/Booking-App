import React from 'react';
import { Path, Svg } from 'react-native-svg';
import { SVGProps } from './NotificationIcon';

export default function BagIconSVG({ width, height, color }: SVGProps) {
  return (
    <Svg
      width={width ?? 24}
      height={height ?? 24}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M8.40002 6.5H15.6C19 6.5 19.34 8.09 19.57 10.03L20.47 17.53C20.76 19.99 20 22 16.5 22H7.51003C4.00003 22 3.24002 19.99 3.54002 17.53L4.44003 10.03C4.66003 8.09 5.00002 6.5 8.40002 6.5Z"
        stroke={color ?? '#292D32'}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M8 8V4.5C8 3 9 2 10.5 2H13.5C15 2 16 3 16 4.5V8"
        stroke={color ?? '#292D32'}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M20.41 17.03H8"
        stroke={color ?? '#292D32'}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
