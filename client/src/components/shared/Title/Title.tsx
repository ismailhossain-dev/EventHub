import React from "react";

interface TitleProps {
  children?: React.ReactNode;
  className?: string;
}

function Title({ children, className }: TitleProps) {
  return (
    <h1 className={`text-2xl md:text-3xl   ${className || ""}`}>
      {children}
    </h1>
  );
}

export default Title;