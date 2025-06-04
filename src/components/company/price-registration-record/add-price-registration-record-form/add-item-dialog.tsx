import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { FormInput } from "@/components/form/form-input";
import { FormDatePicker } from "@/components/form/form-date-picker";
import { FormMultiSelect } from "@/components/form/form-multi-select-input";
import { currencies } from "@/mocks/company/currencies";
import { useForm } from "react-hook-form";
import { useRecordProductsStore } from "@/hooks/companies/price-registration-records/record";
import { z } from "zod";

export const addItemFormSchema = z.object({
	conversion_rate: z.number(),
	conversion_rate_date: z.string(),
	currency: z.string(),
	maximum_qty_for_membership: z.number(),
	minimum_qty_for_membership: z.number(),
	product_id: z.string(),
	quantity_available: z.number(),
	total_quantity: z.number(),
	total_value_brl: z.number(),
	total_value_currency: z.number(),
	unit: z.string(),
	unit_price_brl: z.number(),
	unit_price_source_currency: z.number(),
});

export type AddItemFormData = z.infer<typeof addItemFormSchema>;

interface AddItemDialogProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
}

export const AddItemDialog = ({ open, onOpenChange }: AddItemDialogProps) => {
	const recordProducts = useRecordProductsStore(
		(state) => state.recordProducts
	);
	const setRecordProducts = useRecordProductsStore(
		(state) => state.setRecordProducts
	);

	const form = useForm<z.infer<typeof addItemFormSchema>>({
		defaultValues: {
			conversion_rate: 0,
			conversion_rate_date: "",
			currency: "",
			maximum_qty_for_membership: 0,
			minimum_qty_for_membership: 0,
			product_id: "",
			quantity_available: 0,
			total_quantity: 0,
			total_value_brl: 0,
			total_value_currency: 0,
			unit: "",
			unit_price_brl: 0,
			unit_price_source_currency: 0,
		},
	});

	const onSubmit = (data: AddItemFormData) => {
		const newRecordProducts = [...recordProducts, data];
		setRecordProducts(newRecordProducts);
		console.log("New Record Products:", newRecordProducts);

		// form.reset();
		// onOpenChange(false);
	};

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
				<DialogHeader>
					<DialogTitle>Adicionar item</DialogTitle>
					<DialogDescription>
						Preencha os dados do item a ser adicionado.
					</DialogDescription>
				</DialogHeader>

				<Form {...form}>
					<form
						id="add-item-form"
						onSubmit={form.handleSubmit(onSubmit)}
						className="space-y-6"
					>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<FormInput
								form={form}
								entity="product_id"
								label="Código do produto"
								placeholder="Digite o código do produto"
								type="text"
							/>

							<FormInput
								form={form}
								entity="unit"
								label="Unidade"
								placeholder="Digite a unidade"
								type="text"
							/>

							<FormInput
								form={form}
								entity="quantity_available"
								label="Quantidade disponível"
								placeholder="Digite a quantidade disponível"
								type="text"
							/>

							<FormMultiSelect
								form={form}
								entity="currency"
								label="Moeda"
								placeholder="Selecione a moeda"
								options={currencies}
								maxCount={2}
							/>

							<FormInput
								form={form}
								entity="unit_price_source_currency"
								label="Valor unitário na moeda"
								placeholder="Ex: 500.00"
								type="number"
							/>

							<FormInput
								form={form}
								entity="total_value_currency"
								label="Valor total na moeda"
								placeholder="Ex: 5000.00"
								type="number"
							/>

							<FormInput
								form={form}
								entity="unit_price_brl"
								label="Valor unitário em real"
								placeholder="Ex: 1000.00"
								type="number"
							/>

							<FormInput
								form={form}
								entity="total_value_brl"
								label="Valor total em real"
								placeholder="Ex: 10000.00"
								type="number"
							/>

							<FormInput
								form={form}
								entity="conversion_rate"
								label="Taxa de conversão"
								placeholder="Digite a taxa de conversão"
								type="number"
							/>

							<FormDatePicker
								form={form}
								entity="conversion_rate_date"
								label="Data da taxa de conversão"
								placeholder=""
							/>

							<FormInput
								form={form}
								entity="minimum_qty_for_membership"
								label="Quantidade mínima para adesão"
								placeholder="0"
								type="number"
							/>

							<FormInput
								form={form}
								entity="maximum_qty_for_membership"
								label="Quantidade máxima para adesão"
								placeholder="0"
								type="number"
							/>

							<FormInput
								form={form}
								entity="total_quantity"
								label="Quantidade total"
								placeholder="Digite a quantidade total"
								type="number"
							/>
						</div>

						<DialogFooter>
							<Button
								type="button"
								variant="outline"
								onClick={() => onOpenChange(false)}
							>
								Cancelar
							</Button>

							<Button form="add-item-form" type="submit">
								Adicionar Item
							</Button>
						</DialogFooter>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	);
};
