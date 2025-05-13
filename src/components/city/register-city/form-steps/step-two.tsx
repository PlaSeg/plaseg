import { FormField } from "../form-field";

export function StepTwo() {
	return (
		<div className="flex flex-col gap-6">
			<FormField
				type="text"
				id="name"
				placeholder="Digite o Nome do Profissional "
				label="Nome do Profissional (Nome Completo)"
			/>

			<FormField
				type="text"
				id="sector"
				placeholder="Digite o Setor Atuante"
				label="Setor Atuante"
			/>

			<FormField
				type="text"
				id="education"
				placeholder="Digite a Formação"
				label="Formação"
			/>
			<FormField
				type="text"
				id="experience"
				placeholder="Digite a Experiência na Área"
				label="Experiência na Área"
			/>
			<FormField
				type="text"
				id="employmentType"
				placeholder="Digite o Tipo de Contrato"
				label="Tipo de contrato"
			/>

			<FormField
				type="text"
				id="document"
				placeholder="Insira os documentos"
				label="Documentos"
			/>
			<FormField
				type="text"
				id="isResponsible"
				placeholder="É responsável pelo setor?"
				label="É responsável pelo setor?"
			/>
		</div>
	);
}
