import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { FormInput } from "@/components/form/form-input";
import { FormMoneyInput } from "@/components/form/form-money-input";
import { FormDatePicker } from "@/components/form/form-date-picker";
import { LoaderCircle } from "lucide-react";
import { useCreateBaseProduct } from "@/hooks/admin/base-products/use-create-base-product";
import { FormTextarea } from "@/components/form/form-textarea";
import { FormSelect } from "@/components/form/form-select";
import { TypeGroup } from "@/@types/type";
import { useGetTypes } from "@/hooks/admin/types/use-get-types";

interface BaseProductFormProps {
	setIsBaseProductSheetOpen: (open: boolean) => void;
}

export function BaseProductForm({
	setIsBaseProductSheetOpen,
}: BaseProductFormProps) {
	const { form, isAddingBaseProduct } = useCreateBaseProduct();
	const { types } = useGetTypes(TypeGroup.CATEGORY);

	return (
		<Form {...form}>
			<div className="shadow-none border-muted rounded-lg flex flex-col gap-6">
				<form onSubmit={form.handleSubmitForm} className="space-y-8">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						<FormInput
							form={form}
							entity="code"
							label="Código"
							placeholder="Digite o código do produto"
						/>

						<FormInput
							form={form}
							entity="name"
							label="Nome"
							placeholder="Digite o nome do produto"
						/>

						<FormSelect
							form={form}
							entity="typeId"
							label="Tipo"
							placeholder="Selecione a categoria do produto"
							options={types.map((type) => ({
								label: type.description,
								value: type.id,
							}))}
						/>

						<div className="col-span-1 md:col-span-2 lg:col-span-3">
							<FormTextarea
								form={form}
								entity="technicalDescription"
								label="Descrição Técnica"
								placeholder="Digite a descrição técnica do produto"
							/>
						</div>

						<FormMoneyInput
							form={form}
							entity="budget1"
							label="Orçamento 1"
							placeholder="0,00"
						/>

						<FormDatePicker
							form={form}
							entity="budget1Validity"
							label="Validade do Orçamento 1"
						/>

						<FormMoneyInput
							form={form}
							entity="budget2"
							label="Orçamento 2"
							placeholder="0,00"
						/>

						<FormDatePicker
							form={form}
							entity="budget2Validity"
							label="Validade do Orçamento 2"
						/>

						<FormMoneyInput
							form={form}
							entity="budget3"
							label="Orçamento 3"
							placeholder="0,00"
						/>

						<FormDatePicker
							form={form}
							entity="budget3Validity"
							label="Validade do Orçamento 3"
						/>

						<FormMoneyInput
							form={form}
							entity="unitValue"
							label="Valor Unitário"
							placeholder="0,00"
						/>
					</div>

					<div className="flex justify-end gap-2">
						<Button
							className="w-full max-w-[170px]"
							variant="outline"
							onClick={() => setIsBaseProductSheetOpen(false)}
							type="button"
						>
							Cancelar
						</Button>

						<Button className="w-full max-w-[170px]" type="submit">
							{isAddingBaseProduct && (
								<LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
							)}
							{!isAddingBaseProduct && "Salvar"}
						</Button>
					</div>
				</form>
			</div>
		</Form>
	);
}
