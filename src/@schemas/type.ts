import { z } from "zod";

export const typeGroupSchema = z.enum([
	"SERVICE",
	"CATEGORY",
	"SUBCATEGORY",
	"SUBSUBCATEGORY",
	"OPPORTUNITY",
]);

export const createTypeSchema = z.object({
	description: z
		.string()
		.min(3, "O nome do tipo deve conter pelo menos 3 caracteres"),
	group: typeGroupSchema,
	parentId: z.string().uuid().optional(),
});

export type CreateTypeRequest = z.infer<typeof createTypeSchema>;

export const typeSchema = z.object({
	id: z.string().uuid(),
	description: z.string(),
	group: typeGroupSchema,
	parent: z.string().uuid().optional(),
	createdAt: z.string(),
	updatedAt: z.string().optional(),
});

export const getTypesResponseSchema = z.array(typeSchema).nullable();

export type GetTypesResponse = z.infer<typeof getTypesResponseSchema>;

export const getTypesRequestSchema = z.object({
	group: typeGroupSchema.optional(),
	parentId: z.string().uuid().optional(),
});

export type GetTypesRequest = z.infer<typeof getTypesRequestSchema>;
