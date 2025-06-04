import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Plus, Trash2 } from "lucide-react";
import { useCreateOpportunity } from "@/hooks/admin/opportunities/use-create-opportunity";
import { FormInput } from "@/components/form/form-input";
import { FormDatePicker } from "@/components/form/form-date-picker";
import { FormMoneyInput } from "@/components/form/form-money-input";
import { FormTextarea } from "@/components/form/form-textarea";
import { FormCheckbox } from "@/components/form/form-checkbox";
import { FormCombobox } from "@/components/form/form-combobox";

interface CreateOpportunityFormProps {
	setIsCreateOpportunitySheetOpen: (open: boolean) => void;
}

export function CreateOpportunityForm({
	setIsCreateOpportunitySheetOpen,
}: CreateOpportunityFormProps) {
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
	} = useCreateOpportunity();

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
						<h3 className="text-lg font-semibold">Documentos Obrigatórios</h3>
						<Button
							type="button"
							onClick={addRequiredDocument}
							size="sm"
							className="flex items-center gap-2"
						>
							<Plus className="h-4 w-4" />
							Adicionar Documento Obrigatório
						</Button>
					</div>

					{requiredDocumentsFields.map((field, index) => (
						<Card key={field.id} className="shadow-none">
							<CardHeader className="pb-3">
								<div className="flex items-center justify-between">
									<CardTitle className="text-sm">
										Documento Obrigatório {index + 1}
									</CardTitle>

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
									placeholder="Digite o nome do documento"
								/>

								<FormTextarea
									form={form}
									entity={`requiredDocuments.${index}.description`}
									label="Descrição"
									placeholder="Digite a descrição do documento"
								/>

								<FormInput
									form={form}
									entity={`requiredDocuments.${index}.model`}
									label="Modelo"
									placeholder="Digite o modelo do documento"
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
							onClick={addDocument}
							size="sm"
							className="flex items-center gap-2"
						>
							<Plus className="h-4 w-4" />
							Adicionar Documento
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

												<FormTextarea
													form={form}
													entity={`documents.${docIndex}.fields.${fieldIndex}.value`}
													label="Valor (Opcional)"
													placeholder="Digite o valor do campo"
													textAreaClassName="bg-white"
												/>

												<FormCombobox
													form={form}
													entity={`documents.${docIndex}.fields.${fieldIndex}.parentId`}
													translatedEntity="Campo pai"
													placeholder="Busque por um campo pai"
													emptyMessage="Nenhum campo pai encontrado"
													options={getAllFieldsForParentSelection(
														docIndex,
														fieldIndex
													).map((field) => ({
														label: field.name,
														value: field.id,
													}))}
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
						onClick={() => setIsCreateOpportunitySheetOpen(false)}
						className="w-[150px]"
					>
						Cancelar
					</Button>

					<Button
						type="button"
						className="w-[150px]"
						onClick={() => form.handleSubmitForm()}
					>
						Salvar
					</Button>
				</div>
			</form>
		</Form>
	);
}
