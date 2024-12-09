import React from 'react';

interface ButtonProps {
  text: string;
  onClick: () => void;
  className?: string; // Optional, for custom styling
}

const Button: React.FC<ButtonProps> = ({ text, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`transition duration-300 ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;