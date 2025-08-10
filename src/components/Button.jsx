import React from 'react';

const Button = ({children, onClick, variant = 'primary', className = '', ...props}) => {
  const baseClasses = "font-bold py-2 px-4 rounded transition-colors duration-300 cursor-pointer";

  const variants = {
    primary: "bg-cyan-500 text-white hover:bg-cyan-600",
    secondary: "bg-gray-600 text-white hover:bg-gray-700",
    outline: "border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white"
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
