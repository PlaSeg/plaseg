import { z } from "zod";
import { useFormMutation } from "../use-form-mutation";

const productSchema = z.object({
	name: z.string().min(1, "Campo obrigatório"),
	code: z.string().min(1, "Campo obrigatório"),
	itemType: z.string().min(1, "Campo obrigatório"),
	brandsModels: z.array(z.string()).min(1, "Campo obrigatórios"),
	unitPrice: z.number().min(1, "Campo obrigatório"),
	minQuantity: z.coerce.number().min(1, "Campo obrigatório"),
	hasGuarantee: z.boolean({
		message: "Campo obrigatório",
	}),
	hasSupport: z.boolean({
		message: "Campo obrigatório",
	}),
	technicalDescription: z.string().min(1, "Campo obrigatório"),
	biddingSpecs: z.string().min(1, "Campo obrigatório"),

	companyBudget: z.number({
		message: "Campo obrigatório",
	}),
	companyBudgetValidity: z.string().min(1, "Campo obrigatório"),

	competitor1Budget: z.number({
		message: "Campo obrigatório",
	}),
	competitor1BudgetValidity: z.string().min(1, "Campo obrigatório"),

	competitor2Budget: z.number({
		message: "Campo obrigatório",
	}),
	competitor2BudgetValidity: z.string().min(1, "Campo obrigatório"),
});

export function useAddProduct() {
	const form = useFormMutation({
		schema: productSchema,
		defaultValues: {
			name: "",
			code: "",
			itemType: "",
			brandsModels: [],
			unitPrice: undefined,
			minQuantity: undefined,
			hasGuarantee: false,
			hasSupport: false,
			technicalDescription: "",
			biddingSpecs: "",
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
