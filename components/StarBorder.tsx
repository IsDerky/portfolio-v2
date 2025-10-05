import React, { createElement } from 'react';
import './StarBorder.css';

export type StarBorderProps = {
  as?: React.ElementType;
  className?: string;
  children?: React.ReactNode;
  color?: string;
  speed?: React.CSSProperties['animationDuration'];
  thickness?: number;
  [key: string]: unknown;
};

const StarBorder = ({
  as = 'button',
  className = '',
  color = 'white',
  speed = '6s',
  thickness = 1,
  children,
  ...rest
}: StarBorderProps) => {
  return createElement(
    as,
    {
      className: `star-border-container ${className}`,
      ...rest,
      style: {
        padding: `${thickness}px 0`,
        ...(rest.style as React.CSSProperties)
      }
    },
    <>
      <div
        className="border-gradient-bottom"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed
        }}
      ></div>
      <div
        className="border-gradient-top"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed
        }}
      ></div>
      <div className="inner-content">{children}</div>
    </>
  );
};

export default StarBorder;
