import React from 'react';
import { Path, Svg } from 'react-native-svg';
import { SVGProps } from './NotificationIcon';

export default function ArrowRightIconSVG({ width, height, color }: SVGProps) {
  return (
    <Svg
      width={width ?? '24'}
      height={height ?? '24'}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M14.4297 5.92999L20.4997 12L14.4297 18.07"
        stroke={color ?? '#292D32'}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M3.5 12H20.33"
        stroke={color ?? '#292D32'}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
