import { z } from "zod";

export const requestedItemsSchema = z.object({
	quantity: z.number(),
	baseProductId: z.string(),
	allocationDepartmentId: z.string(),
	maintenanceContractId: z.string(),
	createdAt: z.coerce.date(),
	updatedAt: z.coerce.date().nullable().optional(),
});

export const fieldsSchema = z.object({
	id: z.string().uuid(),
	name: z.string(),
	value: z.string(),
	parentId: z.string().uuid(),
});

export const documentsSchema = z.object({
	name: z.string(),
	fields: z.array(fieldsSchema),

});


export const projectSchema = z.object({
	id: z.string().uuid(),
	name: z.string(),
	opportunityId: z.string().uuid(),
	projectTypeId: z.string().uuid(),
	responsibleCpf: z.string(),
	responsibleName: z.string(),
	responsibleEmail: z.string().email(),
	responsiblePhone: z.string(),
	counterpartCapitalItem: z.string(),
	counterpartCapitalValue: z.number(),
	counterpartOperatingCostCode: z.string(),
	counterpartOperatingCostValue: z.number(),
	totalValue: z.number(),
	requestedValue: z.number(),
	baseValue: z.number(),
	createdAt: z.coerce.date(),
	updatedAt: z.coerce.date().nullable().optional(),
	requestedItems: z.array(requestedItemsSchema),
	documents: z.array(documentsSchema),
});



export const createProjectSchema = z.object({
	name: z.string().min(1, 'Nome é obrigatório'),

	totalValue: z.number().min(1, 'Valor total é obrigatório'),
	requestedValue: z.number().min(1, 'Valor solicitado é obrigatório'),
	baseValue: z.number().min(1, 'Valor base é obrigatório'),

	responsibleDocument: z.string().min(1, 'Documento é obrigatório'),
	responsibleName: z.string().min(1, 'Nome é obrigatório'),
	responsibleEmail: z.string().email('Email inválido'),
	responsiblePhone: z.string().min(1, 'Telefone é obrigatório'),
	responsibleTelephone: z.string().min(1, 'Telefone é obrigatório'),

	counterpartCapitalInitials: z.string().min(1, 'Iniciais do capital é obrigatório'),
	counterpartCapitalAmount: z.number().min(1, 'Valor do capital é obrigatório'),
	counterpartCostInitials: z.string().min(1, 'Iniciais do custo é obrigatório'),
	counterpartCostAmount: z.number().min(1, 'Valor do custo é obrigatório'),
	counterpartDescription: z.string().min(1, 'Descrição é obrigatória'),
	counterpartAttachedFile: z.string().min(1, 'Arquivo é obrigatório'),
});
