import React from 'react';
import { Path, Svg } from 'react-native-svg';
import { SVGProps } from './NotificationIcon';

export default function RulerMeterIconSVG(props: SVGProps) {
  const { width, height, color } = props;
  return (
    <Svg width={width ?? 24} height={height ?? 24} viewBox="0 0 490 490">
      <Path
        fill={color ?? '#000'}
        d="m488.185 474.254-330.001-470A10 10 0 0 0 140 10v470c0 5.523 4.477 10 10 10h330a10.002 10.002 0 0 0 8.185-15.746zM160 470v-30h30v-20h-30v-50h30v-20h-30v-50h30v-20h-30v-50h30v-20h-30v-50h30v-20h-30V41.645L460.76 470H160z"
      />
      <Path
        fill={color ?? '#000'}
        d="M225 400h105a10 10 0 0 0 8-16L233 244a10.001 10.001 0 0 0-18 6v140c0 5.523 4.477 10 10 10zm10-120 75 100h-75V280zM110 0H10C4.477 0 0 4.477 0 10v470c0 5.523 4.477 10 10 10h100c5.523 0 10-4.477 10-10V10c0-5.523-4.477-10-10-10zm-10 470H20v-45h40v-20H20v-60h40v-20H20v-70h40v-20H20v-70h40v-20H20V85h40V65H20V20h80v450z"
      />
    </Svg>
  );
}
