import { FormField } from "../form-field";

export function StepThree() {
	return (
		<div className="flex flex-col gap-6">

			<FormField
				type="text"
				id="endereco_prefeitura"
				placeholder="Digite o endereço da prefeitura"
				label="Endereço da Prefeitura"
			/>

			<FormField
				type="number"
				id="telefone"
				placeholder="Digite o telefone da prefeitura"
				label="Telefone da Prefeitura"
			/>

			
			<FormField
				type="text"
				id="email_prefeitura"
				placeholder="Digite o email da prefeitura"
				label="Email da Prefeitura"
			/>

			<FormField
				type="text"
				id="site_oficial"
				placeholder="Digite o site oficial do município"
				label="Site Oficial do Município"
			/>

			<FormField
				type="text"
				id="redes_sociais"
				placeholder="Digite o link para as Redes Sociais"
				label="Redes Sociais"
			/>

		</div>
	);
}
