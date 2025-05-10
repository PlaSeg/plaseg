import { z } from "zod";

export const createTypeSchema = z.object({
	description: z
		.string()
		.min(3, "O nome do tipo deve conter pelo menos 3 caracteres"),
	group: z.enum([
		"SERVICE",
		"CATEGORY",
		"SUBCATEGORY",
		"SUBSUBCATEGORY",
		"OPPORTUNITY",
	]),
	parentId: z.string().uuid().optional(),
});

export type CreateTypeRequest = z.infer<typeof createTypeSchema>;
