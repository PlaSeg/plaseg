import { FormField } from "../form-field";

export function StepTwo() {
	return (
		<div className="flex flex-col gap-6">
			<FormField
				type="text"
				id="prefeito_atual"
				placeholder="Digite o nome do Prefeito Atual"
				label="Prefeito(a) Atual (Nome completo)"
			/>

			<FormField
				type="text"
				id="mandato_atual"
				placeholder="Digite o mandato atual"
				label="Mandato Atual (Início e fim do período da gestão)"
			/>

		</div>
	);
}
