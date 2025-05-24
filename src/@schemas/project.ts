import { z } from "zod";

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
