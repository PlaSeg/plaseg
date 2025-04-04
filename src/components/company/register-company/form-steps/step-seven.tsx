import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { FormCheckbox } from "@/components/form/form-checkbox";
import { FormField } from "../form-field";

export function StepSeven() {
	return (
		<div className="flex flex-col gap-6">
			<div className="text-left space-y-4">
				<Label>Registro em Órgãos Reguladores</Label>

				<Input type="text" name="anvisa" placeholder="Registro ANVISA" />
				<Input type="text" name="inmetro" placeholder="Registro INMETRO" />
				<Input type="text" name="crea" placeholder="Registro CREA" />
				<Input type="text" name="crf" placeholder="Registro CRF" />

				<FormCheckbox label="Sem registro em orgão reguladores" />
			</div>

			<div className="text-left space-y-4">
				<Label>Certificações de Qualidade</Label>

				<Input type="text" name="9001" placeholder="ISO 9001" />
				<Input type="text" name="14001" placeholder="ISO 14001" />

				<FormCheckbox label="Sem certificações de qualidade" />
			</div>

			<FormField
				type="file"
				label="Atestados de Capacidade Técnica"
				id=""
				placeholder=""
			/>
		</div>
	);
}
