import React from 'react';

interface ContainerProps {
  children?: React.ReactNode;
  className?: string;
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={`max-w-[1400px] mx-auto px-4 md:px-6 ${className || ''}`}>
      {children}
    </div>
  );
}