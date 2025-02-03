import { CheckboxDemo } from "../checkbox";
import { FormField } from "../form-field";

export function StepFour() {
	return (
		<div className="flex flex-col gap-6">
			
			<div className="space-y-4">
				<FormField
					type="text"
					id="tem_guarda"
					placeholder="Quando foi criado a guarda"
					label="Quando foi criado a guarda?"
				/>

				<CheckboxDemo text="Ainda não foi criado."/>
			</div>

			<div className="space-y-4">
				<FormField
					type="text"
					id="tem_guarda"
					placeholder="Quando foi criado a defesa civil"
					label="Quando foi criado a defesa civil?"
				/>

				<CheckboxDemo text="Ainda não foi criado."/>
			</div>

			<div className="space-y-4">
				<FormField
					type="text"
					id="tem_guarda"
					placeholder="Quando foi criado o trânsito municipalizado"
					label="Quando foi criado o trânsito municipalizado?"
				/>

				<CheckboxDemo text="Ainda não foi criado."/>
			</div>

		</div>
	);
}
