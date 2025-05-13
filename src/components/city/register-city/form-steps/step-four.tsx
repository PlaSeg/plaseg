import { FormField } from "../form-field";

export function StepFour() {
	return (
		<div className="flex flex-col gap-6">
			<FormField
				type="text"
				id="description"
				placeholder="Adicione a Descrição"
				label="Descrição"
			/>

			<FormField
				type="text"
				id="adress"
				placeholder="Digite um endereço"
				label="Endereço"
			/>
		</div>
	);
}
