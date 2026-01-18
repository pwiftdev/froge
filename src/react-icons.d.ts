declare module 'react-icons/fa' {
  import { ComponentType, SVGProps } from 'react';
  
  interface IconBaseProps extends SVGProps<SVGSVGElement> {
    size?: string | number;
  }
  
  export const FaTwitter: ComponentType<IconBaseProps>;
  export const FaTelegram: ComponentType<IconBaseProps>;
  export const FaDiscord: ComponentType<IconBaseProps>;
  export const FaGithub: ComponentType<IconBaseProps>;
  export const FaBars: ComponentType<IconBaseProps>;
  export const FaTimes: ComponentType<IconBaseProps>;
  export const FaCopy: ComponentType<IconBaseProps>;
  export const FaCheck: ComponentType<IconBaseProps>;
  export const FaRocket: ComponentType<IconBaseProps>;
  export const FaGem: ComponentType<IconBaseProps>;
  export const FaTint: ComponentType<IconBaseProps>;
  export const FaLock: ComponentType<IconBaseProps>;
  export const FaShieldAlt: ComponentType<IconBaseProps>;
}
