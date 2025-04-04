import { z } from "zod";
import { useFormMutation } from "./use-form-mutation";

const priceAgreementSchema = z.object({
	number: z.number({message: "Campo obrigatório"}),

	year: z.number({
		message: "Campo obrigatório", 
	}),

	responsibleBody: z.string().min(1, "Campo obrigatório"),
	date: z.string({
		message: "Campo obrigatório", 	
	}),
	validityInMonths: z.number({message: "Campo obrigatório"}),

	priceAgreementAttachments: z.any().refine((file) => file instanceof File, {
		message: "É necessário anexar um documento válido",
	}),
	products: z
		.array(
			z.object({
				productID: z.string().min(1, "Código do produto é obrigatório"),
				conversionRate: z.number().min(0, "Taxa de conversão deve ser positiva"),
				conversionRateDate: z.date({
					required_error: "Data da taxa de conversão é obrigatória",
				}),
				currency: z.string().min(1, "Tipo de moeda é obrigatório"),
				maximumQtyForMembership: z
					.number()
					.min(1, "Quantidade máxima deve ser maior que 0"),
				minimumQtyForMembership: z
					.number()
					.min(1, "Quantidade máxima deve ser maior que 0"),
				
				quantityAvailable: z
					.number()
					.min(1, "Quantidade disponível deve ser maior que 0"),
				totalQuantity:  z
				.number()
				.min(1, "Quantidade disponível deve ser maior que 0"),
				totalValueBrl: z
				.number()
				.min(1, "Quantidade disponível deve ser maior que 0"),
				totalValueCurrency: z
				.number()
				.min(1, "Quantidade disponível deve ser maior que 0"),
				unit: z.string().min(1, "Unidade é obrigatória"),
				unitPriceBrl:z
				.number()
				.min(0.01, "Valor total deve ser maior que 0"),
				unitPriceSourceCurrency: z
				.number()
				.min(0.01, "Valor total deve ser maior que 0")
				
			})
		)
		.min(1, "Deve haver pelo menos um item na Ata"),
});

export function usePriceAgreement() {
	const form = useFormMutation({
		schema: priceAgreementSchema,
		defaultValues: {
			number: undefined,
			year: undefined,
			responsibleBody: "",
			date:undefined,
			validityInMonths:undefined,
			products: [
				{
					conversionRate:0,
					conversionRateDate:undefined,
					currency:"",
					maximumQtyForMembership:0,
					minimumQtyForMembership:0,
					productID:"",
					quantityAvailable:0,
					totalQuantity:0,
					totalValueBrl:0,
					totalValueCurrency:0,
					unit:"",
					unitPriceBrl:0,
					unitPriceSourceCurrency:0,

				},
			],
		},
		onSubmit: (data) => {
			console.log(data);
		},
	});

	return {
		form,
	};
}
