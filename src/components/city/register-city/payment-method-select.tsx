import { MultiSelect } from "@/components/ui/multi-select";
import { useState } from "react";

const paymentMethods = [
	{
		value: "credit_card",
		label: "Cartão de Crédito",
	},
	{
		value: "debit_card",
		label: "Cartão de Débito",
	},
	{
		value: "bank_transfer",
		label: "Transferência Bancária",
	},
	{
		value: "boleto",
		label: "Boleto",
	},
];

export function PaymentMethodsSelect() {
	const [selectedMethods, setSelectedMethods] = useState<string[]>([
		"boleto",
		"credit_card",
	]);

	return (
		<MultiSelect
			options={paymentMethods}
			onValueChange={setSelectedMethods}
			defaultValue={selectedMethods}
			placeholder="Selecione as formas de pagamento aceitas"
			variant="inverted"
			animation={2}
			maxCount={4}
		/>
	);
}
