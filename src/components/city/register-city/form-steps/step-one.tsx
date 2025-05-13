import { FormField } from "../form-field";
import { FormDatePicker } from "@/components/form/form-date-picker";
import { UseFormReturn } from "react-hook-form";
import { generalData } from "@/@types/municipality-sign-up/sign-up";
import { FormSelect } from "@/components/form/form-select";

interface StepOneProps {
	form: UseFormReturn<generalData>;
}

const unityOptions = [
	{ label: "UF", value: "uf" },
	{ label: "Cidade", value: "cidade" },
];

export function StepOne({ form }: StepOneProps) {
	return (
		<div className="flex flex-col gap-6">
			<FormField
				type="text"
				id="nome_municipio"
				placeholder="Digite o Nome do Município"
				label="Nome do Município"
			/>

			<FormDatePicker
				form={form}
				entity="guardInitialDate"
				label="Data Inicial da Guarda"
			/>

			<FormField
				type="number"
				id="guardCount"
				placeholder="Digite a Quantidade de Guardas"
				label="Quantidade de Guardas"
			/>

			<FormDatePicker
				form={form}
				entity="trafficInitialDate"
				label="Data Inicial do Trânsito"
			/>

			<FormField
				type="number"
				id="trafficCount"
				placeholder="Digite a quantidade de registros de trânsito"
				label="Quantidade de Registros de Trânsito"
			/>

			<FormField
				type="text"
				id="federativeUnit"
				placeholder="Digite a Unidade Federativa"
				label="Unidade Federativa"
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
