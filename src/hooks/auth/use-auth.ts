import { create } from "zustand";
import Cookies from "js-cookie";

interface AuthState {
	isAuthenticated: boolean;
	userRole: string | null;
	authenticate: (accessToken: string, userRole: string) => void;
	logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
	userRole: null,
	isAuthenticated: !!Cookies.get("accessToken"),

	authenticate: (accessToken, userRole) => {
		Cookies.set("accessToken", accessToken, {
			expires: 1 / 24, // 1 hour
			secure: true,
		});
		set({ isAuthenticated: true, userRole });
	},

	logout: () => {
		Cookies.remove("accessToken");
		set({ isAuthenticated: false });
		window.location.href = "/entrar";
	},
}));
