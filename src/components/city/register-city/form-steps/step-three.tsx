import { FormField } from "../form-field";

export function StepThree() {
	return (
		<div className="flex flex-col gap-6">
			<FormField
				type="text"
				id="term"
				placeholder="Digite o Termo"
				label="Termo"
			/>

			<FormField
				type="text"
				id="agency"
				placeholder="Digite a Agência"
				label="Agência"
			/>

			<FormField
				type="text"
				id="objective"
				placeholder="Digite o Objetivo"
				label="Objetivo"
			/>

			<FormField
				type="text"
				id="status"
				placeholder="Digite o Status atual"
				label="Status"
			/>
		</div>
	);
}
