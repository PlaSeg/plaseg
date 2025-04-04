import { z } from "zod";
import { useFormMutation } from "./use-form-mutation";

const priceAgreementSchema = z.object({
	priceAgreementNumber: z.string().min(1, "Número da Ata é obrigatório"),
	year: z.string().min(4, "Ano da Ata deve ter 4 dígitos"),
	validity: z.string().min(1, "Validade é obrigatória"),
	responsible: z.string().min(1, "Órgão responsável é obrigatório"),
	signatureDate: z.date(),
	priceAgreementAttachments: z.any().refine((file) => file instanceof File, {
		message: "É necessário anexar um documento válido",
	}),
	itens: z
		.array(
			z.object({
				productCode: z.string().min(1, "Código do produto é obrigatório"),
				unity: z.string().min(1, "Unidade é obrigatória"),
				quantity: z
					.number()
					.min(1, "Quantidade disponível deve ser maior que 0"),
				currency: z.string().min(1, "Tipo de moeda é obrigatório"),
				valueUnitCurrency: z
					.number()
					.min(0.01, "Valor unitário deve ser maior que 0"),
				valueTotalCurrency: z
					.number()
					.min(0.01, "Valor total deve ser maior que 0"),
				valueUnitReal: z
					.number()
					.min(0.01, "Valor unitário em reais deve ser maior que 0"),
				valueTotalReal: z
					.number()
					.min(0.01, "Valor total em reais deve ser maior que 0"),
				rateConversion: z
					.number()
					.min(0, "Taxa de conversão deve ser positiva"),
				rateConversionDate: z.date({
					required_error: "Data da taxa de conversão é obrigatória",
				}),
				minQuantityAccession: z
					.number()
					.min(1, "Quantidade mínima deve ser maior que 0"),
				maxQuantityAccession: z
					.number()
					.min(1, "Quantidade máxima deve ser maior que 0"),
			})
		)
		.min(1, "Deve haver pelo menos um item na Ata"),
});

export function usePriceAgreement() {
	const form = useFormMutation({
		schema: priceAgreementSchema,
		defaultValues: {
			priceAgreementNumber: "",
			year: "",
			validity: "",
			responsible: "",
			signatureDate: undefined,
			priceAgreementAttachments: undefined,
			itens: [
				{
					productCode: "",
					unity: "",
					quantity: undefined,
					currency: "",
					valueUnitCurrency: undefined,
					valueTotalCurrency: undefined,
					valueUnitReal: undefined,
					valueTotalReal: undefined,
					rateConversion: undefined,
					rateConversionDate: undefined,
					minQuantityAccession: 0,
					maxQuantityAccession: 0,
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
