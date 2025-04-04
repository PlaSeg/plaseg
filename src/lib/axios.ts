import axios from "axios";
import Cookies from "js-cookie";

export const api = axios.create({
	baseURL: import.meta.env.VITE_DATABASE_URL,
});

api.interceptors.request.use((config) => {
	const access_token = Cookies.get("access_token");

	if (access_token) {
		config.headers.Authorization = `Bearer ${access_token}`;
	}

	return config;
});
