import { useState } from "react";
import { MultiSelect } from "../ui/multi-select";

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
