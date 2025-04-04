import axios from "axios";

export const api = axios.create({
	baseURL: "https://plaseg-back-end-production.up.railway.app",
});
