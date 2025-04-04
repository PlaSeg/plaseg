import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useAddProduct } from "@/hooks/products/use-add-product";
import { Link } from "react-router";
import { AttachmentsUploader } from "./add-product-form/attachments-uploader";
import { FormDatePicker } from "@/components/form/form-date-picker";
import { FormInput } from "@/components/form/form-input";
import { FormSelect } from "@/components/form/form-select";
import { itemTypes } from "@/mocks/company/item-types";
import { FormMultiSelect } from "@/components/form/form-multi-select-input";
import { brands } from "@/mocks/company/brands";
import { FormSwitch } from "@/components/form/form-switch";
import { LoaderCircle } from "lucide-react";
import { FormMoneyInput } from "@/components/form/form-money-input";

export function AddProductForm() {
	const { form, isLoadingCreateProduct } = useAddProduct();

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmitForm}
				className="flex flex-col gap-6 rounded-lg"
			>
				<div className="flex items-center">
					<h2 className="text-xl font-semibold">Novo Produto</h2>

					<div className="flex ml-auto gap-2">
						<Button className="w-[100px]" variant="outline" asChild>
							<Link to="/empresa/produtos">Cancelar</Link>
						</Button>

						<Button
							className="w-[100px]"
							type="submit"
							disabled={isLoadingCreateProduct}
						>
							{isLoadingCreateProduct && (
								<LoaderCircle className="mr-2 animate-spin" />
							)}

							{!isLoadingCreateProduct && "Salvar"}
						</Button>
					</div>
				</div>

				<div className="flex gap-6">
					<div className="w-[1000px] grid grid-cols-2 space-y-6 gap-x-6 p-6 rounded-lg border">
						<div className="col-span-2">
							<h3 className="text-lg font-medium">Detalhes do Produto</h3>
						</div>

						<FormInput
							form={form}
							entity="name"
							label="Nome do Produto"
							placeholder="Digite o nome do produto"
							type="text"
						/>

						<FormInput
							form={form}
							entity="code"
							label="Código do Produto"
							placeholder="Digite o código do produto"
							type="number"
						/>

						<FormSelect
							form={form}
							entity="itemType"
							label="Tipo de Item"
							placeholder="Selecione o tipo de item"
							options={itemTypes}
						/>

						<FormMultiSelect
							form={form}
							entity="brandsModels"
							label="Marcas e Modelos Disponíveis"
							placeholder="Selecione as marcas e modelos disponíveis"
							options={brands}
							maxCount={2}
						/>

						<FormMoneyInput
							form={form}
							entity="unitPrice"
							label="Preço Unitário"
							placeholder="Selecione o preço unitário"
						/>

						<FormInput
							form={form}
							entity="minQuantity"
							label="Quantidade Mínima"
							placeholder="Selecione a quantidade mínima"
							type="number"
						/>

						<FormSwitch
							form={form}
							entity="hasGuarantee"
							label="Garantia"
							description="Este produto possui garantia"
						/>

						<FormSwitch
							form={form}
							entity="hasSupport"
							label="Suporte Técnico"
							description="Este produto possui suporte técnico"
						/>

						<div className="col-span-2 space-y-4">
							<FormInput
								form={form}
								entity="technicalDescription"
								label="Descrição Técnica"
								placeholder="Digite a descrição técnica"
								type="textarea"
							/>

							<FormInput
								form={form}
								entity="biddingSpecs"
								label="Especificações para Licitação"
								placeholder="Digite as especificações para licitação"
								type="textarea"
							/>
						</div>

						<FormMoneyInput
							form={form}
							entity="companyBudget"
							label="Orçamento da Empresa"
							placeholder="Ex: R$ 10.000,00"
						/>

						<FormDatePicker
							form={form}
							label="Validade do Orçamento"
							placeholder="Validade do Orçamento"
							entity="companyBudgetValidity"
						/>

						<FormMoneyInput
							form={form}
							entity="competitor1Budget"
							label="Orçamento do 1º Concorrente"
							placeholder="Ex: R$ 10.000,00"
						/>

						<FormDatePicker
							form={form}
							label="Validade do Orçamento do 1º Concorrente"
							placeholder="Validade do Orçamento do 1º Concorrente"
							entity="competitor1BudgetValidity"
						/>

						<FormMoneyInput
							form={form}
							entity="competitor2Budget"
							label="Orçamento do 2º Concorrente"
							placeholder="Ex: R$ 10.000,00"
						/>

						<FormDatePicker
							form={form}
							label="Validade do Orçamento do 2º Concorrente"
							placeholder="Validade do Orçamento do 2º Concorrente"
							entity="competitor2BudgetValidity"
						/>
					</div>

					<AttachmentsUploader />
				</div>
			</form>
		</Form>
	);
}
