import { MultiSelect } from "@/components/ui/multi-select";
import { useState } from "react";

const states = [
	{
		value: "PI",
		label: "Piauí",
	},
	{
		value: "CE",
		label: "Ceará",
	},
	{
		value: "MA",
		label: "Maranhão",
	},
	{
		value: "RN",
		label: "Rio Grande do Norte",
	},
];

export function StateServedSelect() {
	const [selectedStates, setSelectedStates] = useState<string[]>(["PI", "CE"]);

	return (
		<MultiSelect
			options={states}
			onValueChange={setSelectedStates}
			defaultValue={selectedStates}
			placeholder="Selecione os estados e municípios que atende"
			variant="inverted"
			animation={2}
			maxCount={3}
		/>
	);
}
