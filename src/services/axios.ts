import axios from "axios";
import Cookies from "js-cookie";
import { env } from "@/env";

export const api = axios.create({
	baseURL: env.VITE_DATABASE_URL,
});

api.interceptors.request.use(async (config) => {
	const accessToken = Cookies.get("plaseg-access-token");

	if (accessToken) {
		config.headers.Authorization = `Bearer ${accessToken}`;
	}

	if (env.VITE_AXIOS_DELAY) {
		await new Promise((resolve) => setTimeout(resolve, 2000));
	}

	return config;
});

api.interceptors.response.use(
	(response) => response,
	(error) => {
		if (error.response?.status === 401) {
			Cookies.remove("plaseg-access-token");
			window.location.href = "/entrar";
		}

		return Promise.reject(error);
	}
);
