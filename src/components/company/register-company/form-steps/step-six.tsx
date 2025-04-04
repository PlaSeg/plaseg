import { FormField } from "../form-field";
import { NoDocumentationCheckbox } from "../no-documentation-checkbox";

export function StepSix() {
	return (
		<div className="flex flex-col gap-6">
			<div className="space-y-4">
				<FormField
					type="file"
					id="mandatory-documentation"
					placeholder="Selecione o arquivo"
					label="Certidão Negativa de Débitos com a Receita Federal"
				/>

				<NoDocumentationCheckbox />
			</div>
		</div>
	);
}
