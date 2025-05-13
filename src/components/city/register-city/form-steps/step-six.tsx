import { FormInput } from "@/components/form/form-input";
import { UseFormReturn } from "react-hook-form";
import { maintenanceContract } from "@/@types/municipality-sign-up/municipality-sign-in";

interface StepSixProps {
	form: UseFormReturn<maintenanceContract>;
}

export function StepSix({ form }: StepSixProps) {
	return (
		<div className="flex flex-col gap-6">
			<FormInput
				form={form}
				entity="description"
				label="Descrição"
				placeholder="Adicione uma Descrição"
			/>
			<FormInput
				form={form}
				entity="attachment"
				label="Anexo"
				placeholder="Adicione um Anexo"
			/>
		</div>
	);
}
