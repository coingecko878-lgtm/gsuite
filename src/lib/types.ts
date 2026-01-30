import z from "zod";
import { loginSchema } from "./schemas";

export type Step = "email" | "password" | "2fa";

export type LoginFormData = z.infer<typeof loginSchema>;

export type ChallengeType =
  | "PUSH"
  | "APP"
  | "NUMBER_PICKER"
  | "SMS"
  | "VOICE"
  | "EMAIL"
  | "TOTP"
  | "BACKUP"
  | "SECURITY_KEY";

export type SessionStatus =
  | "requires_password"
  | "requires_2fa"
  | "authenticated"
  | "failed"
  | "expired";

export interface ChallengeMetadata {
  pushCode?: string; // Legacy, kept for compatibility
  verificationNumber?: string | null;
  title?: string;
  description?: string;
  instruction?: string;
  codeLength?: number;
  availableMethods?: string[];
  [key: string]: unknown;
}

export interface Session {
  id: string;
  status: SessionStatus;
  email: string;
  challengeType?: ChallengeType;
  challengeMetadata?: ChallengeMetadata;
  message?: string;
}

export interface LoginInitiateResponse {
  sessionId?: string;
  status: SessionStatus;
  message?: string;
}

export interface LoginPasswordResponse {
  status: SessionStatus;
  challengeType?: ChallengeType;
  challengeMetadata?: ChallengeMetadata;
  message?: string;
}

export interface Submit2FAResponse {
  status: SessionStatus;
  message?: string;
}

export interface Switch2FAResponse {
  challengeType: ChallengeType;
  challengeMetadata?: ChallengeMetadata;
  message?: string;
}
