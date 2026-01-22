import {
  LoginInitiateResponse,
  LoginPasswordResponse,
  Submit2FAResponse,
  Switch2FAResponse,
  Session,
} from "./types";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export class ApiError extends Error {
  constructor(public message: string, public status?: number) {
    super(message);
    this.name = "ApiError";
  }
}

async function request<T>(path: string, options?: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      "x-api-key": API_KEY || "",
      ...options?.headers,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new ApiError(data.message || "An error occurred", response.status);
  }

  return data;
}

export const googleApi = {
  initiateLogin: (data: { email: string; fingerprint: string }) =>
    request<LoginInitiateResponse>("/google/login/initiate", {
      method: "POST",
      body: JSON.stringify(data),
    }),

  submitPassword: (data: { sessionId: string; password: string }) =>
    request<LoginPasswordResponse>("/google/login/password", {
      method: "POST",
      body: JSON.stringify(data),
    }),

  submit2FA: (data: { sessionId: string; code: string }) =>
    request<Submit2FAResponse>("/google/2fa", {
      method: "POST",
      body: JSON.stringify(data),
    }),

  switch2FA: (data: { sessionId: string; method: string }) =>
    request<Switch2FAResponse>("/google/2fa/switch", {
      method: "POST",
      body: JSON.stringify(data),
    }),

  getSession: (sessionId: string) =>
    request<Session>(`/sessions/${sessionId}`),
};
