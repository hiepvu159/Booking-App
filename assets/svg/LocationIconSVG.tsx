import React from 'react';
import { Path, Svg } from 'react-native-svg';
import { SVGProps } from './NotificationIcon';

export default function LocationIconSVG({ width, height, color }: SVGProps) {
  return (
    <Svg
      width={width ?? 24}
      height={height ?? 24}
      viewBox="0 0 30 30"
      fill="none">
      <Path
        d="M12 13.43C13.7231 13.43 15.12 12.0331 15.12 10.31C15.12 8.58687 13.7231 7.19 12 7.19C10.2769 7.19 8.88 8.58687 8.88 10.31C8.88 12.0331 10.2769 13.43 12 13.43Z"
        stroke={color ?? '#292D32'}
        stroke-width="1.5"
      />
      <Path
        d="M3.62 8.49C5.59 -0.169998 18.42 -0.159997 20.38 8.5C21.53 13.58 18.37 17.88 15.6 20.54C13.59 22.48 10.41 22.48 8.39 20.54C5.63 17.88 2.47 13.57 3.62 8.49Z"
        stroke={color ?? '#292D32'}
        stroke-width="1.5"
      />
    </Svg>
  );
}
