import { FormDocumentInput } from "@/components/form/form-document";
import { FormInput } from "@/components/form/form-input";
import { FormPhoneInput } from "@/components/form/form-phone-input";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useCreateProject } from "@/hooks/projects/use-create-project";

export function ProjectInformationForm() {
	const { form } = useCreateProject();

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmitForm}
				className="p-6 rounded-lg border border-slate-200
			bg-white space-y-6"
			>
				<div className="space-y-4">
					<span className="font-semibold">Informações principais</span>

					<div className="grid grid-cols-2 gap-4">
						<FormInput
							form={form}
							entity="name"
							label="Nome"
							placeholder="Digite o nome do projeto"
						/>

						<FormInput
							form={form}
							entity="responsibleName"
							label="Nome do responsável"
							placeholder="Digite o nome do responsável"
						/>

						<FormDocumentInput
							form={form}
							entity="responsibleDocument"
							label="Documento do responsável"
							placeholder="Digite o documento do responsável"
						/>

						<FormInput
							form={form}
							type="email"
							entity="responsibleEmail"
							label="Email do responsável"
							placeholder="Digite o email do responsável"
						/>

						<FormPhoneInput
							form={form}
							entity="responsiblePhone"
							label="Telefone do responsável"
							placeholder="Digite o telefone do responsável"
						/>

						<FormPhoneInput
							form={form}
							entity="responsibleTelephone"
							label="Telefone fixo do responsável"
							placeholder="Digite o telefone fixo do responsável"
						/>

						<FormInput
							form={form}
							type="number"
							entity="totalValue"
							label="Valor total"
							placeholder="Digite o valor total do projeto"
						/>

						<FormInput
							form={form}
							type="number"
							entity="requestedValue"
							label="Valor solicitado"
							placeholder="Digite o valor solicitado do projeto"
						/>
					</div>
				</div>

				<div className="space-y-4">
					<span className="font-semibold">Informações sobre contraparte</span>

					<div className="grid grid-cols-2 gap-4">
						<FormInput
							form={form}
							entity="counterpartCapitalInitials"
							label="Rúbrica do capital da contraparte"
							placeholder="Digite a rúbrica do capital da contraparte"
						/>

						<FormInput
							form={form}
							type="number"
							entity="counterpartCapitalAmount"
							label="Valor do capital da contraparte"
							placeholder="Digite o valor do capital da contraparte"
						/>

						<FormInput
							form={form}
							entity="counterpartCostInitials"
							label="Rúbrica do custo da contraparte"
							placeholder="Digite a rúbrica do custo da contraparte"
						/>

						<FormInput
							form={form}
							type="number"
							entity="counterpartCostAmount"
							label="Valor do custo da contraparte"
							placeholder="Digite o valor do custo da contraparte"
						/>

						<FormInput
							form={form}
							entity="counterpartDescription"
							label="Descrição da contraparte"
							placeholder="Digite a descrição da contraparte"
						/>

						<FormDocumentInput
							form={form}
							entity="counterpartAttachedFile"
							label="Arquivo da contraparte"
							placeholder="Selecione o arquivo da contraparte"
						/>
					</div>
				</div>

				<div className="flex justify-end">
					<Button
						className="w-full max-w-[170px] bg-black hover:bg-black/90"
						type="submit"
					>
						Salvar
					</Button>
				</div>
			</form>
		</Form>
	);
}
