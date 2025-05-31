import { FormInput } from "@/components/form/form-input";
import { FormDatePicker } from "@/components/form/form-date-picker";
import { FormSelect } from "@/components/form/form-select";
import type { UseFormReturn } from "react-hook-form";
import type { MunicipalityFormData } from "@/@schemas/municipality-schema";

interface GeneralDataStepProps {
	form: UseFormReturn<MunicipalityFormData>;
}

const unitTypeOptions = [
	{ value: "UF", label: "UF" },
	{ value: "MUNICIPIO", label: "Município" },
	{ value: "DISTRITO", label: "Distrito" },
];

export function GeneralDataStep({ form }: GeneralDataStepProps) {
	return (
		<div className="space-y-6">
			<div>
				<h2 className="text-2xl font-bold text-gray-900 mb-2">
					Dados Gerais do Município
				</h2>
				<p className="text-gray-600 mb-8">
					Preencha as informações abaixo para continuar.
				</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<FormInput
					form={form}
					entity="name"
					label="Nome do Município"
					placeholder="Digite o Nome do Município"
					className="md:col-span-2"
				/>

				<FormDatePicker
					form={form}
					entity="guardInitialDate"
					label="Data Inicial da Guarda"
					placeholder="Selecione uma data"
				/>

				<FormInput
					form={form}
					type="number"
					entity="guardCount"
					label="Quantidade de Guardas"
					placeholder="Digite a Quantidade de Guardas"
				/>

				<FormDatePicker
					form={form}
					entity="trafficInitialDate"
					label="Data Inicial do Trânsito"
					placeholder="Selecione uma data"
				/>

				<FormInput
					form={form}
					entity="trafficCount"
					label="Quantidade de Registros de Trânsito"
					placeholder="Digite a quantidade de registros de trânsito"
				/>

				<FormInput
					form={form}
					entity="federativeUnit"
					label="Unidade Federativa"
					placeholder="Digite a Unidade Federativa"
				/>

				<FormSelect
					form={form}
					entity="unitType"
					label="Tipo de Unidade"
					placeholder="Selecione o tipo"
					options={unitTypeOptions}
				/>
			</div>
		</div>
	);
}
