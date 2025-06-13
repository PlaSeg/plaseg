import { FormInput } from "@/components/form/form-input";
import { FormPhoneInput } from "@/components/form/form-phone-input";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useEditProject } from "@/hooks/municipalities/projects/use-edit-project";

export function ProjectInformationForm() {
	const { form } = useEditProject();

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
							entity="responsibleCpf"
							label="CPF do responsável"
							placeholder="Digite o CPF do responsável"
						/>

						<FormInput
							form={form}
							entity="responsibleName"
							label="Nome do responsável"
							placeholder="Digite o nome do responsável"
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

						<FormInput
							form={form}
							type="number"
							entity="baseValue"
							label="Valor base"
							placeholder="Digite o valor base do projeto"
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
