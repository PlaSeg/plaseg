import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { LoaderCircle, Plus, Trash2 } from "lucide-react";
import { useCreateOpportunity } from "@/hooks/opportunities/use-create-opportunity";
import { FormInput } from "@/components/form/form-input";
import { FormDatePicker } from "@/components/form/form-date-picker";
import { FormMoneyInput } from "@/components/form/form-money-input";
import { FormTextarea } from "@/components/form/form-textarea";
import { FormCheckbox } from "@/components/form/form-checkbox";
import { FormCombobox } from "@/components/form/form-combobox";
import { useGetProjectTypes } from "@/hooks/admin/project-types/use-get-project-types";
import { FormMultiSelect } from "@/components/form/form-multi-select-input";
import { useGetTypes } from "@/hooks/admin/types/use-get-types";
import { TypeGroup } from "@/@types/admin/type";
import { useGetBaseProducts } from "@/hooks/admin/base-products/use-get-base-products";

interface OpportunityFormProps {
	setIsFormOpen: (open: boolean) => void;
}

export function OpportunityForm({ setIsFormOpen }: OpportunityFormProps) {
	const {
		form,
		requiredDocumentsFields,
		documentsFields,
		addRequiredDocument,
		removeRequiredDocument,
		addDocument,
		removeDocument,
		addFieldToDocument,
		removeFieldFromDocument,
		getAllFieldsForParentSelection,
		isLoadingCreateOpportunity,
	} = useCreateOpportunity(setIsFormOpen);

	const { projectTypes } = useGetProjectTypes();
	const { baseProducts } = useGetBaseProducts();
	const { types, isLoadingGetTypes } = useGetTypes({
		group: TypeGroup.OPPORTUNITY,
	});

	const tableTypes = [
		{ label: "Cronograma de execução", value: "CRONOGRAMA_DE_EXECUCAO" },
		{ label: "Termo de referência", value: "TERMO_DE_REFERENCIA" },
	];
	const typesField = [
		{ label: "String", value: "STRING" },
		{ label: "Table", value: "TABLE" },
	];

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmitForm} className="space-y-6">
				<div className="space-y-4">
					<h3 className="text-lg font-semibold">Informações Básicas</h3>

					<div className="grid grid-cols-2 gap-4">
						<FormInput
							form={form}
							entity="title"
							label="Título"
							placeholder="Digite o título da oportunidade"
						/>

						<FormInput
							form={form}
							entity="responsibleAgency"
							label="Órgão Responsável"
							placeholder="Digite o nome do órgão responsável"
						/>

						<FormDatePicker
							form={form}
							entity="initialDeadline"
							label="Data de Início"
							placeholder="Selecione a data de início"
						/>

						<FormDatePicker
							form={form}
							entity="finalDeadline"
							label="Data de Término"
							placeholder="Selecione a data de término"
						/>

						<FormCombobox
							form={form}
							entity="typeId"
							translatedEntity="Tipo"
							placeholder="Selecione o tipo"
							isLoading={isLoadingGetTypes}
							options={types.map((type) => ({
								label: type.description,
								value: type.id,
							}))}
						/>

						<FormMultiSelect
							form={form}
							entity="projectTypeIds"
							label="Tipos de Projeto"
							placeholder="Selecione os tipos de projeto"
							maxCount={undefined}
							options={projectTypes.map((type) => ({
								label: type.name,
								value: type.id,
							}))}
						/>

						<FormMultiSelect
							form={form}
							entity="baseProductsIds"
							label="Produtos base"
							placeholder="Selecione os produtos base"
							maxCount={undefined}
							options={baseProducts.map((product) => ({
								label: product.name,
								value: product.id,
							}))}
						/>

						<FormTextarea
							form={form}
							entity="description"
							label="Descrição"
							placeholder="Digite a descrição da oportunidade"
							className="col-span-2"
						/>

						<FormCheckbox
							form={form}
							entity="requiresCounterpart"
							label="Requer Contrapartida"
						/>

						{form.watch("requiresCounterpart") && (
							<FormInput
								type="number"
								form={form}
								entity="counterpartPercentage"
								label="Percentual de Contrapartida (%)"
								placeholder="Digite o percentual de contrapartida"
							/>
						)}
					</div>
				</div>

				<Separator />

				<div className="space-y-4">
					<div className="flex items-center justify-between">
						<h3 className="text-lg font-semibold">Valores</h3>
					</div>

					<div className="grid w-full grid-cols-3 gap-4">
						<FormMoneyInput
							form={form}
							entity="availableValue"
							label="Valor Disponível (R$)"
							placeholder="Digite o valor disponível"
						/>

						<FormMoneyInput
							form={form}
							entity="minValue"
							label="Valor Mínimo de Financiamento (R$)"
							placeholder="Digite o valor mínimo"
						/>

						<FormMoneyInput
							form={form}
							entity="maxValue"
							label="Valor Máximo de Financiamento (R$)"
							placeholder="Digite o valor máximo"
						/>
					</div>
				</div>

				<Separator />

				<div className="space-y-4">
					<div className="flex items-center justify-between">
						<h3 className="text-lg font-semibold">Anexos</h3>
						<Button
							type="button"
							variant="secondary"
							onClick={addRequiredDocument}
							size="sm"
							className="flex items-center gap-2"
						>
							<Plus className="h-4 w-4" />
							Adicionar
						</Button>
					</div>

					{requiredDocumentsFields.map((field, index) => (
						<Card key={field.id} className="shadow-none">
							<CardHeader className="pb-3">
								<div className="flex items-center justify-between">
									<CardTitle className="text-sm">Anexo {index + 1}</CardTitle>

									<Button
										type="button"
										variant="ghost"
										size="sm"
										onClick={() => removeRequiredDocument(index)}
										className="text-red-500 hover:text-red-700"
									>
										<Trash2 className="h-4 w-4" />
									</Button>
								</div>
							</CardHeader>

							<CardContent className="space-y-3">
								<FormInput
									form={form}
									entity={`requiredDocuments.${index}.name`}
									label="Nome"
									placeholder="Digite o nome do anexo"
								/>

								<FormTextarea
									form={form}
									entity={`requiredDocuments.${index}.description`}
									label="Descrição"
									placeholder="Digite a descrição do anexo"
								/>

								<FormInput
									form={form}
									entity={`requiredDocuments.${index}.model`}
									label="Modelo"
									placeholder="Digite o modelo do anexo"
								/>
							</CardContent>
						</Card>
					))}
				</div>

				<Separator />

				<div className="space-y-4">
					<div className="flex items-center justify-between">
						<h3 className="text-lg font-semibold">Documentos</h3>
						<Button
							type="button"
							variant="secondary"
							onClick={addDocument}
							size="sm"
							className="flex items-center gap-2"
						>
							<Plus className="h-4 w-4" />
							Adicionar
						</Button>
					</div>

					{documentsFields.map((docField, docIndex) => (
						<Card key={docField.id} className="shadow-none">
							<CardHeader className="pb-3">
								<div className="flex items-center justify-between">
									<CardTitle className="text-sm">
										Documento {docIndex + 1}
									</CardTitle>

									<Button
										type="button"
										variant="ghost"
										size="sm"
										onClick={() => removeDocument(docIndex)}
										className="text-red-500 hover:text-red-700"
									>
										<Trash2 className="h-4 w-4" />
									</Button>
								</div>
							</CardHeader>

							<CardContent className="space-y-4">
								<FormInput
									form={form}
									entity={`documents.${docIndex}.name`}
									label="Nome do Documento"
									placeholder="Digite o nome do documento"
								/>

								<FormTextarea
									form={form}
									entity={`documents.${docIndex}.value`}
									label="Valor do Documento"
									placeholder="Digite o valor do documento"
								/>

								<FormTextarea
									form={form}
									entity={`documents.${docIndex}.description`}
									label="Descrição do Documento"
									placeholder="Digite a descrição do documento"
								/>

								<div className="space-y-3">
									<div className="flex items-center justify-between">
										<h4 className="text-sm font-medium">Campos</h4>
										<Button
											type="button"
											onClick={() => addFieldToDocument(docIndex)}
											size="sm"
											variant="outline"
											className="flex items-center gap-2"
										>
											<Plus className="h-3 w-3" />
											Adicionar Campo
										</Button>
									</div>

									{form
										.watch(`documents.${docIndex}.fields`)
										?.map((_, fieldIndex) => (
											<div
												key={fieldIndex}
												className="border rounded-lg p-4 space-y-3 bg-muted/50"
											>
												<div className="flex items-center justify-between">
													<span className="text-xs font-medium text-muted-foreground">
														Campo {fieldIndex + 1}
													</span>

													<Button
														type="button"
														variant="ghost"
														size="sm"
														onClick={() =>
															removeFieldFromDocument(docIndex, fieldIndex)
														}
														className="text-red-500 hover:text-red-700 h-6 w-6 p-0"
													>
														<Trash2 className="h-3 w-3" />
													</Button>
												</div>

												<FormInput
													form={form}
													entity={`documents.${docIndex}.fields.${fieldIndex}.name`}
													label="Nome do Campo"
													placeholder="Digite o nome do campo"
													inputClassName="bg-white"
												/>
												<div className=" grid w-full grid-cols-2 gap-4">
													<FormInput
														form={form}
														entity={`documents.${docIndex}.fields.${fieldIndex}.section`}
														label="Seção do Campo"
														placeholder="Digite a seção do campo"
														inputClassName="bg-white"
													/>

													<FormMultiSelect
														form={form}
														entity={`documents.${docIndex}.fields.${fieldIndex}.type`}
														label="Tipo"
														placeholder="Selecione o tipo do campo"
														maxCount={undefined}
														options={typesField.map((type) => ({
															label: type.label,
															value: type.value,
														}))}
													/>
												</div>
												<FormTextarea
													form={form}
													entity={`documents.${docIndex}.fields.${fieldIndex}.value`}
													label="Valor (Opcional)"
													placeholder="Digite o valor do campo"
													textAreaClassName="bg-white"
												/>
												<div className=" grid w-full grid-cols-2 gap-4">
													<FormCombobox
														form={form}
														entity={`documents.${docIndex}.fields.${fieldIndex}.tableType`}
														translatedEntity="Tipo da tabela"
														placeholder="Selecione o tipo de tabela"
														emptyMessage="Nenhum tipo encontrado"
														options={tableTypes.map((table) => ({
															label: table.label,
															value: table.value,
														}))}
													/>

													<FormInput
														form={form}
														entity={`documents.${docIndex}.fields.${fieldIndex}.parentSection`}
														label="Seção Pai"
														placeholder="Digite a seção pai do campo"
														inputClassName="bg-white"
													/>
												</div>
												<FormTextarea
													form={form}
													entity={`documents.${docIndex}.fields.${fieldIndex}.description`}
													label="Descrição (Opcional)"
													placeholder="Digite a descrição do campo"
													textAreaClassName="bg-white"
												/>

												<FormCheckbox
													form={form}
													entity={`documents.${docIndex}.fields.${fieldIndex}.isTitle`}
													label="É título"
												/>
											</div>
										))}
								</div>
							</CardContent>
						</Card>
					))}
				</div>

				<div className="flex justify-end gap-3 pt-4">
					<Button
						type="button"
						variant="outline"
						className="w-[150px]"
						onClick={() => setIsFormOpen(false)}
						disabled={isLoadingCreateOpportunity}
					>
						Cancelar
					</Button>

					<Button
						type="button"
						className="w-[150px]"
						onClick={() => form.handleSubmitForm()}
						disabled={isLoadingCreateOpportunity}
					>
						{isLoadingCreateOpportunity && (
							<LoaderCircle className="animate-spin" />
						)}
						Confirmar
					</Button>
				</div>
			</form>
		</Form>
	);
}
