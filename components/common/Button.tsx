import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({ children, className = '', onClick, href }) => {
  const commonClasses = `inline-block px-8 py-4 text-lg font-bold text-white bg-emerald-500 rounded-lg shadow-lg hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-opacity-75 transition-transform transform hover:scale-105 text-center ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={commonClasses}
      >
        {children}
      </a>
    );
  }
  
  return (
    <button
      onClick={onClick}
      className={commonClasses}
    >
      {children}
    </button>
  );
};

export default Button;