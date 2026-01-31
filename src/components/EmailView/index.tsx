import { LoginFormData } from "@/lib/types";
import React from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import Button from "../ui/button";
import Input from "../ui/input";

const EmailView: React.FC<{
  isLoading: boolean;
  handleNext: () => void;
  register: UseFormRegister<LoginFormData>;
  errors: FieldErrors<LoginFormData>;
}> = ({ isLoading, handleNext, register, errors }) => {
  return (
    <div className="w-1/3 flex flex-col md:flex-row px-6 md:p-[36px]">
      {/* Left Column */}
      <div className="flex flex-col items-start md:w-1/2 md:pr-[48px] md:mt-[72px]">
        <h1 className="text-[32px] md:text-[36px] leading-[40px] md:leading-[44px] font-normal text-google-border-hover mt-6 md:mt-0 mb-2 md:mb-3">
          Sign in
        </h1>
        <div className="text-base text-google-border-hover font-normal md:text-left">
          <span>
            with your Google Account. This account will be available to other
            Google apps in the browser.
          </span>
        </div>
      </div>

      {/* Right Column */}
      <div className="flex flex-col md:w-1/2 mt-8 md:mt-[72px]">
        <div className="flex flex-col h-full">
          <div className="space-y-2">
            <Input
              type="text"
              id="email"
              label="Email or phone"
              autoComplete="username"
              error={!!errors.email}
              onKeyDown={(e) => e.key === "Enter" && handleNext()}
              {...register("email")}
            />
            {errors.email && (
              <div className="text-google-red text-xs mt-1 ml-1 flex items-center gap-1">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                {errors.email.message}
              </div>
            )}
            <div className="mt-2 text-sm text-google-blue font-medium cursor-pointer hover:bg-blue-50/50 w-fit px-1 py-1 -ml-1 rounded transition-colors">
              Forgot email?
            </div>
            <div className="mt-10 text-sm text-[#444746] leading-relaxed">
              Not your computer? Use Guest mode to sign in privately.{" "}
              <span className="text-google-blue font-medium cursor-pointer hover:underline">
                Learn more about using Guest mode
              </span>
            </div>
          </div>

          <div className="flex justify-between md:justify-end items-center md:gap-8 mt-4 pt-10">
            <div className="text-google-blue font-medium cursor-pointer hover:bg-blue-50/50 px-2 py-2 -ml-2 rounded transition-colors text-sm">
              Create account
            </div>
            <Button onClick={handleNext} disabled={isLoading}>
              {isLoading ? "Next" : "Next"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailView;
