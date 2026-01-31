import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Input from "../ui/input";

const TOTPView: React.FC<{
  twoFactorCode: string;
  setTwoFactorCode: (code: string) => void;
  handle2FASubmit: () => void;
  error: string | null;
}> = ({ twoFactorCode, setTwoFactorCode, handle2FASubmit, error }) => {
  return (
    <div className="w-full animate-in fade-in slide-in-from-right-4 duration-500">
      <div className="mb-6">
        <Input
          type="text"
          id="2fa-code"
          label="Enter code"
          value={twoFactorCode}
          onChange={(e) => setTwoFactorCode(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              (e.target as HTMLInputElement).blur();
              handle2FASubmit();
            }
          }}
          autoComplete="one-time-code"
          error={!!error}
          className="h-[56px]"
        />
        {error && (
          <div className="text-google-red text-[12px] flex items-center gap-1.5 mt-2 ml-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            <span>{error}</span>
          </div>
        )}
      </div>

      <div className="flex items-center gap-3 group cursor-pointer">
        <div className="relative flex items-center">
          <input
            type="checkbox"
            id="totp-dont-ask-again"
            className="peer appearance-none w-[18px] h-[18px] border-2 border-[#444746] rounded-[2px] cursor-pointer checked:bg-[#0b57d0] checked:border-[#0b57d0] transition-all duration-200"
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
          htmlFor="totp-dont-ask-again"
          className="text-[14px] text-[#1f1f1f] cursor-pointer select-none font-normal"
        >
          Don&apos;t ask again on this device
        </label>
      </div>
    </div>
  );
};

export default TOTPView;
