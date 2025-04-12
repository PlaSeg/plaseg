import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { FormInput } from "@/components/form/form-input";
import { FormSelect } from "@/components/form/form-select";
import { FormDatePicker } from "@/components/form/form-date-picker";
import { FormMoneyInput } from "@/components/form/form-money-input";
import { Link } from "react-router";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useAddOpportunity } from "@/hooks/admin/use-add-opportunity";
import { useState } from "react";
import { Dot, LoaderCircle, X } from "lucide-react";
import { useFieldArray } from "react-hook-form";
import { opportunitiesCategories } from "@/mocks/opportunity/opportunities-categories";

export function AddOpportunityForm() {
	const { form, isAddingOpportunity } = useAddOpportunity();
	const [docTitle, setDocTitle] = useState("");
	const [docDescription, setDocDescription] = useState("");

	const { fields, append, remove } = useFieldArray({
		control: form.control,
		name: "documentation",
	});

	const handleAddDocument = () => {
		if (docTitle && docDescription) {
			append({ title: docTitle, description: docDescription });
			setDocTitle("");
			setDocDescription("");
		}
	};

	return (
		<Form {...form}>
			<div className="shadow-none border-muted my-6 bg-white p-6 rounded-lg flex flex-col gap-6">
				<form onSubmit={form.handleSubmitForm} className="space-y-6">
					<div className="flex items-center">
						<h2 className="text-xl font-semibold">Nova Oportunidade</h2>

						<div className="flex ml-auto gap-2">
							<Button className="w-[100px]" variant="outline" asChild>
								<Link to="/admin/oportunidades">Cancelar</Link>
							</Button>

							<Button className="w-[100px]" type="submit">
								{isAddingOpportunity && (
									<LoaderCircle className="mr-2 animate-spin" />
								)}
								{!isAddingOpportunity && "Salvar"}
							</Button>
						</div>
					</div>

					<div className="grid grid-cols-3 gap-6">
						<FormInput
							form={form}
							entity="title"
							label="Título"
							placeholder="Digite o título da oportunidade"
						/>
						<FormSelect
							form={form}
							entity="category"
							label="Categoria"
							placeholder="Selecione a categoria"
							options={opportunitiesCategories}
						/>
						<FormInput
							form={form}
							entity="responsibleAgency"
							label="Agência Responsável"
							placeholder="Digite a agência responsável"
						/>

						<FormDatePicker
							form={form}
							entity="startDate"
							label="Data de Início"
						/>
						<FormDatePicker
							form={form}
							entity="endDate"
							label="Data de Término"
						/>
						<FormInput
							form={form}
							entity="executionPeriod"
							label="Período de Execução (em meses)"
							placeholder="Digite o período de execução"
							type="number"
						/>

						<FormMoneyInput
							form={form}
							entity="minFundingAmount"
							label="Valor Mínimo de Financiamento"
							placeholder="Digite o valor mínimo"
						/>
						<FormMoneyInput
							form={form}
							entity="maxFundingAmount"
							label="Valor Máximo de Financiamento"
							placeholder="Digite o valor máximo"
						/>
						<FormInput
							form={form}
							entity="description"
							label="Descrição"
							placeholder="Digite a descrição da oportunidade"
						/>

						<div className="col-span-3 flex flex-col gap-2">
							<Label>Documentação Obrigatória</Label>

							{/* Lista de documentos já adicionados */}
							{fields.length > 0 && (
								<div className="mt-2 space-y-2">
									{fields.map((field, index) => (
										<div
											key={field.id}
											className="flex items-center gap-2 p-2 border rounded-md"
										>
											<div className="flex-1 text-sm">
												<div className="flex items-center">
													<Dot />
													<p className="font-medium">{field.title}</p>
												</div>

												<p className="text-gray-500 block ml-6">
													{field.description}
												</p>
											</div>

											<Button
												type="button"
												variant="ghost"
												size="sm"
												onClick={() => remove(index)}
												className="h-8 w-8 p-0"
											>
												<X className="h-4 w-4" />
											</Button>
										</div>
									))}
								</div>
							)}

							{/* Formulário para adicionar novo documento */}
							<div className="gap-6 grid grid-cols-3">
								<Input
									placeholder="Nome do documento"
									value={docTitle}
									onChange={(e) => setDocTitle(e.target.value)}
								/>

								<Input
									placeholder="Descrição do documento"
									className="col-span-2"
									value={docDescription}
									onChange={(e) => setDocDescription(e.target.value)}
								/>
							</div>

							<Button
								className="w-fit mt-4 self-end"
								variant="secondary"
								type="button"
								onClick={handleAddDocument}
							>
								Adicionar Documento
							</Button>
						</div>
					</div>
				</form>
			</div>
		</Form>
	);
}
