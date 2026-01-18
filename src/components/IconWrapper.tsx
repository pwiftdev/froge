import React from 'react';

interface IconWrapperProps {
  icon: React.ComponentType<any>;
  size?: number;
  className?: string;
}

export const IconWrapper: React.FC<IconWrapperProps> = ({ icon: Icon, size = 20, className }) => {
  return <Icon size={size} className={className} />;
};
