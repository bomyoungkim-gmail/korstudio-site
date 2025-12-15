export const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = 'inline-block px-8 py-3.5 text-sm font-semibold rounded transition-all duration-200';
  
  const variants = {
    primary: 'bg-brand-brown text-white hover:bg-brand-brown-dark hover:-translate-y-0.5 hover:shadow-lg',
    secondary: 'bg-transparent text-brand-dark border-2 border-brand-dark hover:bg-brand-dark hover:text-white hover:-translate-y-0.5'
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
