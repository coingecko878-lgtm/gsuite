import { LoginFormData, Step } from "@/lib/types";
import { ChevronDown } from "lucide-react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import Button from "../ui/button";
import Input from "../ui/input";

const PasswordView: React.FC<{
  email: string;
  isLoading: boolean;
  showPassword: boolean;
  setShowPassword: (show: boolean) => void;
  step: Step;
  handleNext: () => void;
  handlePrevious: () => void;
  register: UseFormRegister<LoginFormData>;
  errors: FieldErrors<LoginFormData>;
}> = ({
  email,
  isLoading,
  showPassword,
  setShowPassword,
  step,
  handleNext,
  handlePrevious,
  register,
  errors,
}) => {
    return (
      <div className="w-1/3 flex flex-col md:flex-row px-6 md:p-[36px]">
        {/* Left Column */}
        <div className="flex flex-col items-start md:w-1/2 md:pr-[48px] md:mt-[72px]">
          <h1 className="text-[32px] md:text-[36px] leading-[40px] md:leading-[44px] font-normal text-google-border-hover mt-6 md:mt-0 mb-2 md:mb-3">
            Welcome
          </h1>
          <div
            className="text-base text-google-border-hover font-normal md:text-left"
            onClick={handlePrevious}
          >
            <div className="flex items-center gap-2 border border-google-border/30 rounded-full px-1.5 py-1 pr-3 w-fit cursor-pointer hover:bg-black/4 transition-colors">
              <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                <svg
                  className="w-4 h-4 text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              <span className="text-sm font-medium">{email}</span>
              <ChevronDown className="w-4 h-4 text-[#444746]" />
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col md:w-1/2 mt-8 md:mt-[72px]">
          <div className="flex flex-col h-full">
            <div className="space-y-2">
              <Input
                type={showPassword ? "text" : "password"}
                id="password"
                label="Enter your password"
                autoFocus={step === "password"}
                autoComplete="current-password"
                error={!!errors.password}
                {...register("password")}
              />
              {errors.password && (
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
                  {errors.password.message}
                </div>
              )}
              <div className="flex items-center gap-3 mt-4 ml-1">
                <div className="relative flex items-center">
                  <input
                    type="checkbox"
                    id="show-password"
                    className="peer appearance-none w-[18px] h-[18px] border-2 border-[#444746] rounded-[2px] cursor-pointer checked:bg-google-blue checked:border-google-blue transition-colors"
                    checked={showPassword}
                    onChange={(e) => setShowPassword(e.target.checked)}
                  />
                  <svg
                    className="absolute w-3.5 h-3.5 text-white pointer-events-none hidden peer-checked:block left-[2px]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <label
                  htmlFor="show-password"
                  className="text-sm text-google-border-hover cursor-pointer font-normal select-none"
                >
                  Show password
                </label>
              </div>
            </div>

            <div className="flex justify-between md:justify-end items-center md:gap-8 mt-4 pt-10">
              <div className="text-google-blue font-medium cursor-pointer hover:bg-blue-50/50 px-2 py-2 -ml-2 rounded transition-colors text-sm">
                Try another way
              </div>
              <Button disabled={isLoading} onClick={handleNext}>
                {isLoading ? "Next" : "Next"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default PasswordView;
