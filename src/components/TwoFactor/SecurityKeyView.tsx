import { ChallengeMetadata } from "@/lib/types";
import React from "react";

const SecurityKeyView: React.FC<{
  challengeMetadata: ChallengeMetadata | null;
}> = ({ challengeMetadata }) => {
  return (
    <div className="flex flex-col items-start w-full">
      {/* Security Key Illustration */}
      <div className="flex justify-center w-full mb-8">
        <SecurityKeyIllustration />
      </div>

      <h2 className="text-[16px] leading-[24px] font-medium text-[#202124] mb-3">
        {challengeMetadata?.title || "Use your security key"}
      </h2>

      <p className="text-[14px] text-[#5f6368] leading-[20px] font-normal mb-6">
        {challengeMetadata?.instruction ||
          "Insert your security key into your computer's USB port and tap it when prompted."}
      </p>

      <div className="bg-[#f8f9fa] border border-[#dadce0] rounded-lg p-4 w-full">
        <p className="text-[13px] text-[#5f6368] leading-[18px]">
          Make sure to use a security key that's registered with your Google
          Account.
        </p>
      </div>
    </div>
  );
};

// Security Key illustration
const SecurityKeyIllustration = () => (
  <div className="flex items-center justify-center">
    <div className="relative">
      {/* USB Key shape */}
      <div className="w-[80px] h-[36px] bg-[#f1f3f4] rounded-[4px] border-2 border-[#5f6368] flex items-center justify-end pr-2">
        {/* USB connector */}
        <div className="absolute left-0 w-4 h-6 bg-[#5f6368] rounded-r-sm" />
        {/* LED indicator */}
        <div className="w-3 h-3 rounded-full bg-[#34a853] animate-pulse" />
      </div>
      {/* Touch indicator */}
      <div className="absolute -right-3 -top-3">
        <div className="w-8 h-8 bg-[#1a73e8] rounded-full flex items-center justify-center shadow-md">
          <svg
            className="w-4 h-4 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
);

export default SecurityKeyView;
