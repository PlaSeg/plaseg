import { z } from "zod";

const envSchema = z.object({
	VITE_AXIOS_DELAY: z
		.string()
		.transform((val) => val.toLowerCase() === "true")
		.default("false"),
	VITE_DATABASE_URL: z.string(),
});

export const env = envSchema.parse(import.meta.env);
