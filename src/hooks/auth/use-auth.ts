import Cookies from "js-cookie";
import { create } from "zustand";

interface AuthState {
	isAuthenticated: boolean;
	userRole: string | null;
	authenticate: (accessToken: string, userRole: string) => void;
	logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
	userRole: Cookies.get("userRole") || null,
	isAuthenticated: !!Cookies.get("plaseg-access-token"),

	authenticate: (accessToken, userRole) => {
		Cookies.set("plaseg-access-token", accessToken, {
			expires: 1 / 24, // 1 hour
			secure: true,
		});
		Cookies.set("userRole", userRole, {
			expires: 1 / 24, // 1 hour
			secure: true,
		});
		set({ isAuthenticated: true, userRole });
	},

	logout: () => {
		Cookies.remove("plaseg-access-token");
		Cookies.remove("userRole");
		set({ isAuthenticated: false, userRole: null });
		window.location.href = "/entrar";
	},
}));
