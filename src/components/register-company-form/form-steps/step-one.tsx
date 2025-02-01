import { FormField } from "../form-field";

export function StepOne() {
	return (
		<div className="flex flex-col gap-6">
			<FormField
				type="text"
				id="razao_social"
				placeholder="Digite a razão social"
				label="Razão Social"
			/>

			<FormField
				type="text"
				id="nome_fantasia"
				placeholder="Digite o nome fantasia"
				label="Nome Fantasia"
			/>

			<FormField
				type="text"
				id="cnpj"
				placeholder="Digite o CNPJ"
				label="CNPJ"
			/>

			<FormField
				type="text"
				id="inscricao_estadual"
				label="Inscrição Estadual"
				placeholder="Digite a inscrição estadual"
			/>

			<FormField
				type="text"
				id="inscricao_municipal"
				label="Inscrição Municipal"
				placeholder="Digite a inscrição municipal"
			/>

			<FormField
				type="text"
				id="telefone"
				placeholder="Digite o telefone de contato"
				label="Telefone para Contato"
			/>

			<FormField
				type="email"
				id="email_corporativo"
				placeholder="Digite o e-mail corporativo"
				label="E-mail Corporativo"
			/>
		</div>
	);
}
