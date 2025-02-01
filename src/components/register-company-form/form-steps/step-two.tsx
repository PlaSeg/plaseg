import { FormField } from "../form-field";

export function StepTwo() {
	return (
		<div className="flex flex-col gap-6">
			<FormField
				type="number"
				id="cep"
				placeholder="Digite o CEP"
				label="CEP"
			/>

			<FormField type="text" id="rua" placeholder="Digite a rua" label="Rua" />

			<FormField
				type="text"
				id="bairro"
				placeholder="Digite o bairro"
				label="Bairro"
			/>

			<FormField
				type="text"
				id="cidade"
				placeholder="Digite a cidade"
				label="Cidade"
			/>

			<FormField
				type="text"
				id="estado"
				placeholder="Digite o estado"
				label="Estado"
			/>

			<FormField
				type="number"
				id="numero"
				placeholder="Digite o número"
				label="Número"
			/>
		</div>
	);
}
