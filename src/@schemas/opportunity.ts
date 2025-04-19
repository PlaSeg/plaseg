import { z } from "zod";

export const addOpportunitySchema = z.object({
	title: z.string().min(1, "O Título é obrigatório"),
	category: z.string().min(1, "A Categoria é obrigatória"),
	responsibleAgency: z.string().min(1, "A Agência responsável é obrigatória"),
	description: z.string().min(1, "A Descrição é obrigatória"),
	startDate: z.string().min(1, "A Data de início é obrigatória"),
	endDate: z.string().min(1, "A Data de término é obrigatória"),
	executionPeriod: z.coerce
		.number()
		.min(1, "Período de execução é obrigatório"),
	minFundingAmount: z.number().min(1, "Valor mínimo não pode ser negativo"),
	maxFundingAmount: z.number().min(1, "Valor máximo não pode ser negativo"),
	documentation: z
		.array(
			z.object({
				title: z.string().min(1, "O título do documento é obrigatório"),
				description: z
					.string()
					.min(
						10,
						"A descrição do documento deve conter pelo menos 10 caracteres"
					),
				code: z.coerce.number().default(Math.floor(Math.random() * 1000)),
			})
		)
		.min(1, "A documentação obrigatória deve conter pelo menos um item")
		.default([]),
});

export type AddOpportunityRequestBody = z.infer<typeof addOpportunitySchema>;
