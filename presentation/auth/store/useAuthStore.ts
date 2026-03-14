import { SecureStorageAdapter } from "@/helpers/adapters/secure-storage";
import { UserInterface } from "@/presentation/interfaces/user.interface";
import { create } from "zustand";
import { checkStatusService } from "../services/check-status.service";
import { postLoginService } from "../services/post-login-service";

export type AuthStatus = "pending" | "not-authenticated" | "authenticated";

interface AuthState {
  authStatus: AuthStatus;
  user?: UserInterface;
  token?: string;

  login: (email: string, password: string) => Promise<UserInterface | null>;
  logOut: () => void;
  checkStatus: () => Promise<boolean>;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  user: undefined,
  token: undefined,
  authStatus: "pending",

  login: async (email, password) => {
    const response = await postLoginService(email, password);

    if (!response) {
      get().logOut();
      return null;
    }

    await SecureStorageAdapter.setItem("token", response.token);

    set({ authStatus: "authenticated", token: response.token, user: response });

    return response;
  },
  checkStatus: async () => {
    const response = await checkStatusService();

    if (!response) {
      get().logOut();
      return false;
    }

    set({
      authStatus: "authenticated",
      token: response.token,
      user: response,
    });
    return true;
  },
  logOut: () => {
    SecureStorageAdapter.deleteItem("token");
    set({
      authStatus: "not-authenticated",
      token: undefined,
      user: undefined,
    });
  },
}));
