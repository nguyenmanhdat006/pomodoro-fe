import { create } from "zustand";

type AuthState = {
  loggedIn: boolean; // lưu trạng thái đăng nhập
  setLoggedIn: (value: boolean) => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  loggedIn: false,
  setLoggedIn: (value) => set({ loggedIn: value }),
})); 