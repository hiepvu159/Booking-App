import React from 'react';
import { Path, Svg } from 'react-native-svg';
import { SVGProps } from './NotificationIcon';

export default function WifiIconSVG({ width, height, color }: SVGProps) {
  return (
    <Svg
      width={width ?? '24'}
      height={height ?? '24'}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M4.90991 11.8401C9.20991 8.5201 14.7999 8.5201 19.0999 11.8401"
        stroke={color ?? '#292D32'}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M2 8.3601C8.06 3.6801 15.94 3.6801 22 8.3601"
        stroke={color ?? '#292D32'}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M6.79004 15.4902C9.94004 13.0502 14.05 13.0502 17.2 15.4902"
        stroke={color ?? '#292D32'}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M9.3999 19.1504C10.9799 17.9304 13.0299 17.9304 14.6099 19.1504"
        stroke={color ?? '#292D32'}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
