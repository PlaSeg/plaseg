import { z } from "zod";
import { v4 as uuidv4 } from "uuid";

const createDocumentFieldSchema = z.object({
	id: z.string().default(() => uuidv4()),
	name: z.string().min(1, "Nome do campo é obrigatório"),
	value: z.string().nullable().optional(),
	parentId: z.string().nullable().optional(),
});

const createDocumentSchema = z.object({
	id: z.string().default(() => uuidv4()),
	name: z.string().min(1, "Nome do documento é obrigatório"),
	fields: z.array(createDocumentFieldSchema).default([]),
});

const createRequiredDocumentSchema = z.object({
	id: z.string().default(() => uuidv4()),
	name: z.string().min(1, "Nome é obrigatório"),
	description: z.string().min(1, "Descrição é obrigatória"),
	model: z.string().min(1, "Modelo é obrigatório"),
});

export const createOpportunityRequestSchema = z.object({
	title: z.string().min(1, "Título é obrigatório"),
	description: z.string().min(1, "Descrição é obrigatória"),
	initialDeadline: z.string().min(1, "Data de início é obrigatória"),
	finalDeadline: z.string().min(1, "Data de término é obrigatória"),
	minValue: z.number().min(0, "Valor mínimo deve ser maior que 0"),
	maxValue: z.number().min(0, "Valor máximo deve ser maior que 0"),
	responsibleAgency: z.string().min(1, "Órgão responsável é obrigatório"),
	typeId: z.string().min(1, "Tipo é obrigatório"),
	requiresCounterpart: z.boolean(),
	counterpartPercentage: z.number().min(0).max(100),
	requiredDocuments: z.array(createRequiredDocumentSchema).default([]),
	documents: z.array(createDocumentSchema).default([]),
});

export type CreateOpportunityRequest = z.infer<
	typeof createOpportunityRequestSchema
>;

export const opportunitySchema = z.object({
	id: z.string().uuid(),
	title: z.string(),
	description: z.string(),
	availableValue: z.number(),
	minValue: z.number(),
	maxValue: z.number(),
	initialDeadline: z.coerce.date(),
	finalDeadline: z.coerce.date(),
	requiresCounterpart: z.boolean(),
	counterpartPercentage: z.number(),
	type: z.string(),
	isActive: z.boolean(),
	createdAt: z.coerce.date(),
	updatedAt: z.coerce.date().nullable().optional(),
	requiredDocuments: z.array(
		z.object({
			id: z.string().uuid(),
			name: z.string(),
			description: z.string(),
			model: z.string(),
			createdAt: z.coerce.date(),
			updatedAt: z.coerce.date().nullable().optional(),
		})
	),
	documents: z.array(
		z.object({
			id: z.string().uuid(),
			name: z.string(),
			fields: z.array(
				z.object({
					id: z.string().uuid(),
					name: z.string(),
					value: z.string().nullable().optional(),
				})
			),
			createdAt: z.coerce.date(),
			updatedAt: z.coerce.date().nullable().optional(),
		})
	),
});

export const getOpportunitiesResponseSchema = z
	.array(opportunitySchema)
	.nullable();

export type OpportunitySchema = z.infer<typeof opportunitySchema>;
