import React from 'react';
import { Path, Svg } from 'react-native-svg';
import { SVGProps } from './NotificationIcon';

export default function ArrowRightForItemIconSVG({
  width,
  height,
  color,
}: SVGProps) {
  return (
    <Svg
      width={width ?? '24'}
      height={height ?? '24'}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M9.42578 18.6L14.8591 13.1666C15.5008 12.525 15.5008 11.475 14.8591 10.8333L9.42578 5.39996"
        stroke={color ?? '#292D32'}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
