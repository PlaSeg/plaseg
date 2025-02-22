import { MultiSelect } from "@/components/ui/multi-select";
import { useState } from "react";

const brands = [
	{ value: "glock", label: "Glock" },
	{ value: "smithWesson", label: "Smith & Wesson" },
	{ value: "colt", label: "Colt" },
	{ value: "beretta", label: "Beretta" },
	{ value: "ruger", label: "Ruger" },
	{ value: "sigSauer", label: "SIG Sauer" },
	{ value: "remington", label: "Remington" },
	{ value: "taurus", label: "Taurus" },
	{ value: "hecklerKoch", label: "Heckler & Koch" },
	{ value: "winchester", label: "Winchester" },
];

export function BrandSelect() {
	const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

	return (
		<MultiSelect
			options={brands}
			onValueChange={setSelectedBrands}
			defaultValue={selectedBrands}
			placeholder="Selecione as marcas e modelos disponíveis"
			maxCount={2}
		/>
	);
}
