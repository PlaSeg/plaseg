import { z } from "zod";
import { useFormMutation } from "./use-form-mutation";

const productSchema = z.object({
	productName: z.string().min(1, "Nome do produto é obrigatório"),
	productCode: z.string().min(1, "Código do produto é obrigatório"),
	itemType: z.string().min(1, "Tipo do item é obrigatório"),
	technicalDescription: z.string(),
	biddingSpecs: z.string(),
	unitPrice: z.number().min(1, "Preço unitário deve ser maior que 0"),
	minQuantity: z.number().min(1, "Quantidade mínima deve ser maior que 0"),
	brandsModels: z.string(),
	guarantee: z.boolean(),
	support: z.boolean(),
	attachments: z.array(z.any()),

	companyBudget: z.number(),
	companyBudgetValidity: z.date(),

	competitor1Budget: z.number(),
	competitor1BudgetValidity: z.date(),

	competitor2Budget: z.number(),
	competitor2BudgetValidity: z.date(),
});

export function useAddProduct() {
	const form = useFormMutation({
		schema: productSchema,
		defaultValues: {
			productName: "",
			productCode: "",
			itemType: "",
			technicalDescription: "",
			biddingSpecs: "",
			unitPrice: 0,
			minQuantity: 0,
			brandsModels: "",
			guarantee: false,
			support: false,
			attachments: [],
			companyBudget: undefined,
			companyBudgetValidity: undefined,
			competitor1Budget: undefined,
			competitor1BudgetValidity: undefined,
			competitor2Budget: undefined,
			competitor2BudgetValidity: undefined,
		},
		onSubmit: (data) => {
			console.log(data);
		},
	});

	return {
		form,
	};
}
