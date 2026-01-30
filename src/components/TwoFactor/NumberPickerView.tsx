import { ChallengeMetadata } from "@/lib/types";
import React from "react";

const NumberPickerView: React.FC<{
  challengeMetadata: ChallengeMetadata | null;
}> = ({ challengeMetadata }) => {
  return (
    <div className="flex flex-col items-start w-full animate-in fade-in slide-in-from-right-4 duration-500">
      {/* Verification Number Circle at Top Right */}
      <div className="flex w-full mb-6">
        <div className="w-[84px] h-[84px] rounded-full flex items-center justify-center">
          <span className="text-[44px] leading-none font-medium text-[#1f1f1f] tracking-tight">
            {challengeMetadata?.verificationNumber ||
              challengeMetadata?.pushCode}
          </span>
        </div>
      </div>

      <h2 className="text-[22px] font-normal text-[#1f1f1f] mb-3 leading-[28px]">
        Check your phone
      </h2>

      <p className="text-[14px] text-[#444746] leading-[20px] font-normal mb-8">
        Select the number shown above on your phone to verify it&apos;s you.
      </p>
    </div>
  );
};

export default NumberPickerView;
