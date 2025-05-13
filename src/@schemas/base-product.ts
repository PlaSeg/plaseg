import { z } from "zod";

export const createBaseProductRequestSchema = z.object({
	code: z.string().min(3, "Código deve ter pelo menos 3 caracteres"),
	name: z.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
	typeId: z.string().uuid("O tipo é obrigatório"),
	technicalDescription: z
		.string()
		.min(10, "Descrição técnica deve ter pelo menos 10 caracteres"),
	budget1: z.coerce.number().min(0, "Orçamento 1 deve ser maior ou igual a 0"),
	budget1Validity: z
		.string()
		.min(1, "Data de validade do orçamento 1 é obrigatória"),
	budget2: z.coerce.number().min(0, "Orçamento 2 deve ser maior ou igual a 0"),
	budget2Validity: z
		.string()
		.min(1, "Data de validade do orçamento 2 é obrigatória"),
	budget3: z.coerce.number().min(0, "Orçamento 3 deve ser maior ou igual a 0"),
	budget3Validity: z
		.string()
		.min(1, "Data de validade do orçamento 3 é obrigatória"),
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
	typeId: z.string(),
	category: z.string(),
	subCategory: z.string(),
	subSubCategory: z.string(),
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

export type UpdateBaseProductRequestSchema = z.infer<
	typeof createBaseProductRequestSchema
>;
