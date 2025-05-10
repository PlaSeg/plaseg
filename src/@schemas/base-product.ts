import { z } from "zod";

export const createBaseProductRequestSchema = z.object({
	code: z.string().min(3, "Código deve ter pelo menos 3 caracteres"),
	name: z.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
	type: z.string().min(1, "Tipo é obrigatório"),
	technicalDescription: z
		.string()
		.min(10, "Descrição técnica deve ter pelo menos 10 caracteres"),
	budget1: z.coerce.number().min(0, "Orçamento 1 deve ser maior ou igual a 0"),
	budget1Validity: z.coerce.date(),
	budget2: z.coerce.number().min(0, "Orçamento 2 deve ser maior ou igual a 0"),
	budget2Validity: z.coerce.date(),
	budget3: z.coerce.number().min(0, "Orçamento 3 deve ser maior ou igual a 0"),
	budget3Validity: z.coerce.date(),
	unitValue: z.coerce
		.number()
		.min(0, "Valor unitário deve ser maior ou igual a 0"),
});

export type CreateBaseProductRequest = z.infer<
	typeof createBaseProductRequestSchema
>;

export const baseProductSchema = z.object({
	id: z.string().uuid(),
	code: z.string(),
	name: z.string(),
	type: z.string(),
	technicalDescription: z.string(),
	budget1: z.coerce.number(),
	budget1Validity: z.coerce.date(),
	budget2: z.coerce.number(),
	budget2Validity: z.coerce.date(),
	budget3: z.coerce.number(),
	budget3Validity: z.coerce.date(),
	unitValue: z.coerce.number(),
	createdAt: z.coerce.date(),
	updatedAt: z.coerce.date().nullable().optional(),
});

export const getBaseProductsResponseSchema = z
	.array(baseProductSchema)
	.nullable();

export type BaseProductSchema = z.infer<typeof baseProductSchema>;

export const updateBaseProductRequestSchema = z.object({
	code: z.string().min(3, "Código deve ter pelo menos 3 caracteres").optional(),
	name: z.string().min(3, "Nome deve ter pelo menos 3 caracteres").optional(),
	type: z.string().min(1, "Tipo é obrigatório").optional(),
	technicalDescription: z
		.string()
		.min(10, "Descrição técnica deve ter pelo menos 10 caracteres")
		.optional(),
	budget1: z.coerce
		.number()
		.min(0, "Orçamento 1 deve ser maior ou igual a 0")
		.optional(),
	budget1Validity: z.coerce.date().optional(),
	budget2: z.coerce
		.number()
		.min(0, "Orçamento 2 deve ser maior ou igual a 0")
		.optional(),
	budget2Validity: z.coerce.date().optional(),
	budget3: z.coerce
		.number()
		.min(0, "Orçamento 3 deve ser maior ou igual a 0")
		.optional(),
	budget3Validity: z.coerce.date().optional(),
	unitValue: z.coerce
		.number()
		.min(0, "Valor unitário deve ser maior ou igual a 0")
		.optional(),
});

export type UpdateBaseProductRequestSchema = z.infer<
	typeof updateBaseProductRequestSchema
>;
