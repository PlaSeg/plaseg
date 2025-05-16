import { FormInput } from "@/components/form/form-input";
import { UseFormReturn } from "react-hook-form";
import { allocationDepartment } from "@/@types/municipality/municipality";

interface StepFourProps {
	form: UseFormReturn<allocationDepartment>;
}

export function StepFour({ form }: StepFourProps) {
	return (
		<div className="flex flex-col gap-6">
			<FormInput
				form={form}
				entity="description"
				label="Descrição"
				placeholder="Adicione a Descrição"
			/>

			<FormInput
				form={form}
				entity="address"
				label="Endereço"
				placeholder="Digite um endereço"
			/>
		</div>
	);
}
