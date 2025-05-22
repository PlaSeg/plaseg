import { FormInput } from "@/components/form/form-input";
import { UseFormReturn } from "react-hook-form";
import { projectPartnership } from "@/@types/municipality/municipality";

interface StepThreeProps {
	form: UseFormReturn<projectPartnership>;
}

export function StepThree({ form }: StepThreeProps) {
	return (
		<div className="flex flex-col gap-6">
			<FormInput
				form={form}
				entity="term"
				label="Termo"
				placeholder="Digite o Termo"
			/>

			<FormInput
				form={form}
				entity="agency"
				label="Agência"
				placeholder="Digite a Agência"
			/>

			<FormInput
				form={form}
				entity="objective"
				label="Objetivo"
				placeholder="Digite o Objetivo"
			/>

			<FormInput
				form={form}
				entity="status"
				label="Status"
				placeholder="Digite o Status atual"
			/>
		</div>
	);
}
