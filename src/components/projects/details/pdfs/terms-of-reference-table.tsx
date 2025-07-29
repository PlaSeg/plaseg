interface TableItem {
	unit: string;
	order: number;
	quantity: number;
	description: string;
	estimatedUnitValue: number;
	estimatedTotalValue: number;
}

export interface TableValue {
	items: TableItem[];
	totalValue: number;
}

interface TermsOfReferenceTableProps {
	value: TableValue;
}

export function TermsOfReferenceTable({ value }: TermsOfReferenceTableProps) {
	const formatCurrency = (amount: number) => {
		return amount.toLocaleString("pt-BR", {
			style: "currency",
			currency: "BRL",
		});
	};

	return (
		<div className="w-full overflow-x-auto">
			<table className="w-full border-collapse border border-black text-sm">
				<thead>
					<tr className="bg-gray-100">
						<th className="border border-black px-2 py-1 text-center font-bold">
							Ord.
						</th>
						<th className="border border-black px-2 py-1 text-center font-bold">
							Descrição do objeto (itens)
						</th>
						<th className="border border-black px-2 py-1 text-center font-bold">
							Qtd
						</th>
						<th className="border border-black px-2 py-1 text-center font-bold">
							Un. Medida
						</th>
						<th className="border border-black px-2 py-1 text-center font-bold">
							Valor estimado Unit. (R$)*
						</th>
						<th className="border border-black px-2 py-1 text-center font-bold">
							Valor estimado Total (R$)*
						</th>
					</tr>
				</thead>
				<tbody>
					{value.items.map((item) => (
						<tr key={item.order}>
							<td className="border border-black px-2 py-1 text-center">
								{item.order}
							</td>
							<td className="border border-black px-2 py-1">
								{item.description}
							</td>
							<td className="border border-black px-2 py-1 text-center">
								{item.quantity}
							</td>
							<td className="border border-black px-2 py-1 text-center">
								{item.unit.toUpperCase()}
							</td>
							<td className="border border-black px-2 py-1 text-right">
								{formatCurrency(item.estimatedUnitValue)}
							</td>
							<td className="border border-black px-2 py-1 text-right">
								{formatCurrency(item.estimatedTotalValue)}
							</td>
						</tr>
					))}
					<tr className="bg-gray-100 font-bold">
						<td
							colSpan={5}
							className="border border-black px-2 py-1 text-center"
						>
							VALOR TOTAL
						</td>
						<td className="border border-black px-2 py-1 text-right">
							{formatCurrency(value.totalValue)}
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}
