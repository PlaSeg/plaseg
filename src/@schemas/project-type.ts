import { z } from "zod";
import { v4 as uuidv4 } from "uuid";

export const fieldSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1, "O nome do campo é obrigatório"),
  value: z.string().nullable(),
  createdAt: z.date(),
  updatedAt: z.date().nullable(),
});

export type Field = z.infer<typeof fieldSchema>;

export const documentSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1, "O nome do documento é obrigatório"),
  fields: z.array(fieldSchema),
  createdAt: z.date(),
  updatedAt: z.date().nullable(),
});

export type Document = z.infer<typeof documentSchema>;

export const projectTypeSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1, "O nome do tipo de projeto é obrigatório"),
  documents: z.array(documentSchema),
  createdAt: z.date(),
  updatedAt: z.date().nullable(),
});

export type ProjectType = z.infer<typeof projectTypeSchema>;


const createDocumentFieldSchema = z.object({
	id: z.string().default(() => uuidv4()),
	name: z.string().min(1, "Nome do campo é obrigatório"),
	value: z.string().nullable().optional(),
});

const createDocumentSchema = z.object({
	id: z.string().default(() => uuidv4()),
	name: z.string().min(1, "Nome do documento é obrigatório"),
	fields: z.array(createDocumentFieldSchema).default([]),
});

export const createProjectTypeRequestSchema = z.object({
	name: z.string().min(1, "Nome é obrigatório"),
	documents: z.array(createDocumentSchema).default([]),

});

export type CreateProjectTypeRequest = z.infer<
	typeof createProjectTypeRequestSchema
>;
