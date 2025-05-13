import { FormInput } from "@/components/form/form-input";
import { UseFormReturn } from "react-hook-form";
import { qualifiedStaff } from "@/@types/municipality-sign-up/municipality-sign-in";
import { FormSelect } from "@/components/form/form-select";
import { FormCheckbox } from "@/components/form/form-checkbox";

interface StepTwoProps {
	form: UseFormReturn<qualifiedStaff>;
}

const employmentType = [
	{ label: "CLT", value: "clt" },
	{ label: "PJ", value: "pj" },
];

export function StepTwo({ form }: StepTwoProps) {
	return (
		<div className="flex flex-col gap-6">
			<FormInput
				form={form}
				entity="name"
				label="Nome do Profissional (Nome Completo)"
				placeholder="Digite o Nome do Profissional "
			/>

			<FormInput
				form={form}
				entity="sector"
				label="Setor Atuante"
				placeholder="Digite o Setor Atuante"
			/>

			<FormInput
				form={form}
				entity="education"
				label="Formação"
				placeholder="Digite a Formação"
			/>
			<FormInput
				form={form}
				entity="experience"
				label="Experiência na Área"
				placeholder="Digite a Experiência na Área"
			/>
			<FormSelect
				form={form}
				entity="employmentType"
				label="Tipo de contrato"
				options={employmentType}
				placeholder="CLT"
			/>

			<FormCheckbox
				form={form}
				entity="isResponsible"
				label="Responsável pelo setor"
			/>

			<FormInput
				form={form}
				entity="document"
				label="Documentos"
				placeholder="Insira o link para os documentos"
			/>
		</div>
	);
}
