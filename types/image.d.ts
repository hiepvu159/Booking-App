declare module '*.component.svg' {
  import { ComponentType } from 'react';

  const content: ComponentType<React.HTMLAttributes<React.ReactSVGElement>>;
  export default content;
}
declare module '*.svg' {
  import React from 'react';
  import { SvgProps } from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}
declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.webp' {
  const content: string;
  export default content;
}

declare module '*.gif' {
  const content: string;
  export default content;
}
