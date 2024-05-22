import React from 'react';
import { Path, Svg } from 'react-native-svg';
import { SVGProps } from './NotificationIcon';

export default function ElevatorIconSVG({ width, height, color }: SVGProps) {
  return (
    <Svg width={width ?? 24} height={height ?? 24} viewBox="0 0 512 512">
      <Path
        fill={color ?? '#000'}
        d="M468.143 0H43.857c-5.632 0-10.199 4.566-10.199 10.199v491.602c0 5.633 4.567 10.199 10.199 10.199h424.287c5.632 0 10.199-4.566 10.199-10.199V10.199c0-5.633-4.568-10.199-10.2-10.199zm-91.028 491.602H265.461V141.769c0-5.633-4.567-10.199-10.199-10.199s-10.199 4.566-10.199 10.199v349.833H134.885V83.04h242.229v408.562zm80.829 0h-60.431V72.841c0-5.633-4.567-10.199-10.199-10.199H124.686c-5.632 0-10.199 4.566-10.199 10.199v418.761H54.056V20.398h403.888v471.204z"
      />
      <Path
        fill={color ?? '#000'}
        d="M255.262 95.963c-5.632 0-10.199 4.566-10.199 10.199v3.989c0 5.633 4.567 10.199 10.199 10.199s10.199-4.566 10.199-10.199v-3.99c0-5.632-4.566-10.198-10.199-10.198zM83.633 213.163c-5.632 0-10.199 4.566-10.199 10.199v13.259c0 5.633 4.567 10.199 10.199 10.199s10.199-4.566 10.199-10.199v-13.259c.001-5.632-4.567-10.199-10.199-10.199zM83.633 268.239c-5.632 0-10.199 4.566-10.199 10.199v13.259c0 5.633 4.567 10.199 10.199 10.199s10.199-4.566 10.199-10.199v-13.259c.001-5.633-4.567-10.199-10.199-10.199zM165.737 31.618h-5.1c-5.632 0-10.199 4.566-10.199 10.199s4.567 10.199 10.199 10.199h5.1c5.632 0 10.199-4.566 10.199-10.199s-4.567-10.199-10.199-10.199zM349.323 31.618h-5.1c-5.632 0-10.199 4.566-10.199 10.199s4.567 10.199 10.199 10.199h5.1c5.632 0 10.199-4.566 10.199-10.199s-4.567-10.199-10.199-10.199zM211.633 31.618h-5.1c-5.632 0-10.199 4.566-10.199 10.199s4.567 10.199 10.199 10.199h5.1c5.632 0 10.199-4.566 10.199-10.199.001-5.633-4.567-10.199-10.199-10.199zM303.426 31.618h-5.1c-5.632 0-10.199 4.566-10.199 10.199s4.567 10.199 10.199 10.199h5.1c5.632 0 10.199-4.566 10.199-10.199s-4.567-10.199-10.199-10.199zM257.53 31.618h-5.1c-5.632 0-10.199 4.566-10.199 10.199s4.567 10.199 10.199 10.199h5.1c5.632 0 10.199-4.566 10.199-10.199s-4.567-10.199-10.199-10.199z"
      />
    </Svg>
  );
}