import { FormField } from "../form-field";

export function StepSix() {
	return (
		<div className="flex flex-col gap-6">
			<FormField
				type="string"
				id="description"
				placeholder="Adicione uma Descrição"
				label="Descrição"
			/>
			<FormField
				type="string"
				id="attachment"
				placeholder="Adicione um Anexo"
				label="Anexo"
			/>
		</div>
	);
}
