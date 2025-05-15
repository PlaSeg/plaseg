import { z } from "zod";

export const createMandatoryDocumentSchema = z.object({
	name: z.string().min(3, "O nome deve conter pelo menoos 3 caracteres"),
	description: z
		.string()
		.min(3, "A descrição deve conter pelo menos 3 caracteres"),
	model: z.string({ message: "Digite um modelo" }),
});

export type CreateMandatoryDocumentRequest = z.infer<
	typeof createMandatoryDocumentSchema
>;

export const mandatoryDocumentSchema = z.object({
	id: z.string().uuid(),
	name: z.string(),
	description: z.string(),
	model: z.string(),
	createdAt: z.string(),
	updatedAt: z.string().optional(),
});

export const getMandatoryDocumentsResponseSchema = z
	.array(mandatoryDocumentSchema)
	.nullable();

export type GetMandatoryDocumentsResponse = z.infer<
	typeof getMandatoryDocumentsResponseSchema
>;

export const getMandatoryDocumentsRequestSchema = z.object({
	name: z.string().optional(),
	id: z.string().uuid().optional(),
});

export type GetMandatoryDocumentsRequest = z.infer<
	typeof getMandatoryDocumentsRequestSchema
>;
