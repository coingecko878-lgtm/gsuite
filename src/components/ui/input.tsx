import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  error?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, id, error, ...props }, ref) => {
    return (
      <div className="relative group">
        <input
          id={id}
          ref={ref}
          placeholder=" "
          className={`peer w-full px-4 py-4 text-base bg-transparent border rounded-lg outline-none transition-all duration-200 focus:border-2 focus:px-[15px] focus:py-[15px] ${
            error
              ? "border-google-red focus:border-google-red"
              : "border-google-border focus:border-google-blue hover:border-google-border-hover"
          }`}
          {...props}
        />
        <label
          htmlFor={id}
          className={`absolute left-4 top-1/2 -translate-y-1/2 text-base transition-all duration-200 pointer-events-none bg-white px-1 peer-focus:top-0 peer-focus:text-xs peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-xs ${
            error
              ? "text-google-red peer-focus:text-google-red"
              : "text-[#444746] peer-focus:text-google-blue"
          }`}
        >
          {label}
        </label>
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
