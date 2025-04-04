import { FormField } from "../form-field";

export function StepFour() {
	return (
		<div className="flex flex-col gap-6">
			<FormField
				type="text"
				id="nome"
				placeholder="Digite o nome completo"
				label="Nome Completo"
			/>

			<FormField
				type="number"
				id="cpf"
				placeholder="Digite o CPF"
				label="CPF"
			/>

			<FormField
				type="text"
				id="cargo"
				placeholder="Digite o cargo"
				label="Cargo na Empresa"
			/>

			<FormField
				type="tel"
				id="telefone"
				placeholder="Digite o telefone"
				label="Telefone"
			/>

			<FormField
				type="email"
				id="email"
				placeholder="Digite o e-mail"
				label="E-mail"
			/>
		</div>
	);
}
