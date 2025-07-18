// In your ButtonCounter.tsx
import React from 'react';

type ButtonCounterProps = {
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  className?: string;
};

const ButtonCounter: React.FC<ButtonCounterProps> = ({
  handleClick,
  children,
  className
}) => {
  return (
    <button
      onClick={handleClick}
      className={className} 
    >
      {children}
    </button>
  );
};

export default ButtonCounter;