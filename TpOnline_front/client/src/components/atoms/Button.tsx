// atoms/Button.tsx
import React from 'react';
 
interface ButtonProps {
  label: string;
  onClick: () => void;
  className?: string;
}
 
const Button: React.FC<ButtonProps> = ({ label, onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors ${className}`}
    >
      {label}
    </button>
  );
};
 
export default Button;
