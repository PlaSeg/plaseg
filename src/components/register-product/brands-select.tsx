import { useState } from "react";
import { MultiSelect } from "../ui/multi-select";

const states = [
    {
        value: "Glock.40",
        label: "Pistola Glock .40",
    },
];

export function BrandsSelect() {
    const [selectedStates, setSelectedStates] = useState<string[]>(["Glock.40"]);

    return (
        <MultiSelect
            options={states}
            onValueChange={setSelectedStates}
            defaultValue={selectedStates}
            placeholder="Selecione as marcas ou modelos disponíveis"
            variant="inverted"
            animation={2}
            maxCount={3}
        />
    );
}
