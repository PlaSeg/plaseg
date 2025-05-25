import { z } from "zod";

const envSchema = z.object({
	VITE_AXIOS_DELAY: z
		.string()
		.transform((val) => val.toLowerCase() === "true")
		.default("false"),
	VITE_DATABASE_URL: z.string(),
	VITE_GOOGLE_GENERATIVE_AI_API_KEY: z.string(),
});

export const env = envSchema.parse(import.meta.env);
