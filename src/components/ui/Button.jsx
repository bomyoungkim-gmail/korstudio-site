import React from 'react';

export const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = "inline-flex items-center text-xs font-sans uppercase tracking-[0.2em] transition-all duration-300 border-b pb-2";
  
  const variants = {
    primary: "border-brand-black text-brand-black hover:opacity-50",
    secondary: "border-transparent text-brand-gray hover:text-brand-black hover:border-brand-black",
  };
  
  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
