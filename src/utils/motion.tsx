import React, { ReactNode } from 'react';

interface MotionProps {
  children: ReactNode;
  initial?: Record<string, any>;
  animate?: Record<string, any>;
  exit?: Record<string, any>;
  transition?: Record<string, any>;
  whileHover?: Record<string, any>;
  whileTap?: Record<string, any>;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  href?: string;
}

export const motion = {
  div: ({ 
    children, 
    initial, 
    animate, 
    exit, 
    transition, 
    className, 
    ...props 
  }: MotionProps) => {
    const style = React.useMemo(() => {
      return {
        opacity: animate?.opacity ?? 1,
        transform: `translateY(${animate?.y ?? 0}px) scale(${animate?.scale ?? 1})`,
        transition: `all ${transition?.duration ?? 0.3}s ${transition?.ease ?? 'ease-out'}`
      };
    }, [animate, transition]);

    return (
      <div className={className} style={style} {...props}>
        {children}
      </div>
    );
  },
  button: ({ 
    children, 
    whileHover, 
    whileTap, 
    className, 
    onClick,
    type,
    disabled,
    href,
    ...props 
  }: MotionProps) => {
    const [isHovered, setIsHovered] = React.useState(false);
    const [isPressed, setIsPressed] = React.useState(false);
    
    const style = React.useMemo(() => {
      let scale = 1;
      if (isPressed && whileTap?.scale) scale = whileTap.scale;
      else if (isHovered && whileHover?.scale) scale = whileHover.scale;
      
      return {
        transform: `scale(${scale})`,
        transition: 'transform 0.2s ease-out'
      };
    }, [isHovered, isPressed, whileHover, whileTap]);

    const handleClick = () => {
      if (href) {
        window.open(href, '_blank', 'noopener,noreferrer');
      }
      if (onClick) {
        onClick();
      }
    };
    
    return (
      <button
        className={className}
        style={style}
        onClick={handleClick}
        type={type}
        disabled={disabled}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
        onTouchStart={() => setIsPressed(true)}
        onTouchEnd={() => setIsPressed(false)}
        {...props}
      >
        {children}
      </button>
    );
  }
};