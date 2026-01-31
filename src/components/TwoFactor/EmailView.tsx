import { ChallengeMetadata } from "@/lib/types";
import React from "react";
import Input from "../ui/input";

const EmailView: React.FC<{
  twoFactorCode: string;
  setTwoFactorCode: (code: string) => void;
  handle2FASubmit: () => void;
  error: string | null;
  challengeMetadata: ChallengeMetadata | null;
}> = ({
  twoFactorCode,
  setTwoFactorCode,
  handle2FASubmit,
  error,
  challengeMetadata,
}) => {
  return (
    <div className="w-full animate-in fade-in slide-in-from-right-4 duration-500">
      {/* Section Title */}
      <h2 className="text-[16px] font-normal text-[#202124] mb-2">
        2-Step Verification
      </h2>

      {/* Description from backend */}
      <p className="text-[14px] text-[#5f6368] mb-6 leading-[20px]">
        {challengeMetadata?.description ||
          "An email with a verification code was just sent to your recovery email"}
      </p>

      {/* Code Input */}
      <div className="mb-4">
        <Input
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          id="2fa-code"
          label="Enter code"
          autoComplete="one-time-code"
          value={twoFactorCode}
          onChange={(e) => setTwoFactorCode(e.target.value.replace(/\D/g, ""))}
          error={!!error}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              (e.target as HTMLInputElement).blur();
              handle2FASubmit();
            }
          }}
        />
        {error && (
          <div className="text-google-red text-xs mt-2 ml-1 flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            {error}
          </div>
        )}
      </div>

      {/* Don't ask again checkbox */}
      <div className="flex items-center gap-3 group cursor-pointer">
        <div className="relative flex items-center">
          <input
            type="checkbox"
            id="email-dont-ask-again"
            className="peer appearance-none w-[18px] h-[18px] border-2 border-[#5f6368] rounded-[2px] cursor-pointer checked:bg-[#1a73e8] checked:border-[#1a73e8] transition-all duration-200"
            defaultChecked
          />
          <svg
            className="absolute w-3.5 h-3.5 text-white pointer-events-none hidden peer-checked:block left-[2px] top-[2px]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <label
          htmlFor="email-dont-ask-again"
          className="text-[14px] text-[#202124] cursor-pointer select-none font-normal"
        >
          Don&apos;t ask again on this device
        </label>
      </div>
    </div>
  );
};

export default EmailView;
