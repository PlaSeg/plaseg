import { FormInput } from "@/components/form/form-input";
import { FormDatePicker } from "@/components/form/form-date-picker";
import { UseFormReturn } from "react-hook-form";
import { completeData } from "@/@types/municipality-sign-up/sign-up";
import { FormSelect } from "@/components/form/form-select";

interface StepOneProps {
	form: UseFormReturn<completeData>;
}

const unityOptions = [
	{ label: "UF", value: "uf" },
	{ label: "Cidade", value: "cidade" },
];

export function StepOne({ form }: StepOneProps) {
	return (
		<div className="flex flex-col gap-6">
			<FormInput
				form={form}
				entity="name"
				label="Nome do Município"
				placeholder="Digite o Nome do Município"
				type="text"
			/>

			<div className="text-left">
				<FormDatePicker
					form={form}
					entity="guardInitialDate"
					label="Data Inicial da Guarda"
				/>
			</div>

			<FormInput
				form={form}
				entity="guardCount"
				label="Quantidade de Guardas"
				placeholder="Digite a Quantidade de Guardas"
				type="number"
			/>

			<div className="text-left">
				<FormDatePicker
					form={form}
					entity="trafficInitialDate"
					label="Data Inicial do Trânsito"
				/>
			</div>

			<FormInput
				form={form}
				entity="trafficCount"
				label="Quantidade de Registros de Trânsito"
				placeholder="Digite a quantidade de registros de trânsito"
				type="number"
			/>

			<FormInput
				form={form}
				entity="federativeUnit"
				label="Unidade Federativa"
				placeholder="Digite a Unidade Federativa"
				type="text"
			/>

			<FormSelect
				form={form}
				entity="unitType"
				label="Tipo de Unidade"
				options={unityOptions}
				placeholder="UF"
			/>
		</div>
	);
}
