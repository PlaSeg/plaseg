import { useState } from "react";
import { MultiSelect } from "../ui/multi-select";

const cities = [
	{
		value: "SP",
		label: "São Paulo",
	},
	{
		value: "RJ",
		label: "Rio de Janeiro",
	},
	{
		value: "BH",
		label: "Belo Horizonte",
	},
	{
		value: "POA",
		label: "Porto Alegre",
	},
	{
		value: "SSA",
		label: "Salvador",
	},
];

export function CitiesServedSelect() {
	const [selectedCities, setSelectedCities] = useState<string[]>(["SP", "RJ"]);

	return (
		<MultiSelect
			options={cities}
			onValueChange={setSelectedCities}
			defaultValue={selectedCities}
			placeholder="Selecione as cidades que atende"
			variant="inverted"
			animation={2}
			maxCount={3}
		/>
	);
}
