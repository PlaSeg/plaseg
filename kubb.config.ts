import { defineConfig } from "@kubb/core";
import { pluginClient } from "@kubb/plugin-client";
import { pluginOas } from "@kubb/plugin-oas";
import { pluginReactQuery } from "@kubb/plugin-react-query";
import { pluginTs } from "@kubb/plugin-ts";
import { pluginZod } from "@kubb/plugin-zod";

export default defineConfig(() => {
	return {
		root: ".",
		input: {
			path: "https://plaseg-api.up.railway.app/json",
		},
		output: {
			clean: true,
			path: "./src/http/generated",
			extension: {
				".ts": "",
			},
		},
		logLevel: "silent",
		plugins: [
			pluginOas(),
			pluginTs(),
			pluginZod(),
			pluginClient({
				output: {
					path: "./axios",
				},
				importPath: "@/lib/axios",
			}),
			pluginReactQuery(),
		],
	};
});
