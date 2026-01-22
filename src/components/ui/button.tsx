import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      className={`relative z-10 bg-google-blue text-white px-6 py-2 rounded-full font-medium hover:shadow-md hover:bg-google-blue-hover transition-shadow text-sm disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed select-none ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
