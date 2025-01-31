import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
		alias: {
			"@": "/src",
		},
	},
	plugins: [react()],
});
