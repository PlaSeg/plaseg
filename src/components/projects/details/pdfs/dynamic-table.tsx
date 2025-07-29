interface TableProps {
	value: string | Array<Record<string, unknown>> | null;
}

export function DynamicTable({ value }: TableProps) {
	if (!value || typeof value === "string" || !Array.isArray(value)) {
		return null;
	}

	if (value.length === 0) {
		return <p>Nenhum dado disponível</p>;
	}

	// Pega todas as chaves únicas de todos os objetos
	const allKeys = [...new Set(value.flatMap((item) => Object.keys(item)))];

	return (
		<div className="overflow-x-auto">
			<table className="min-w-full border-collapse border border-gray-300">
				<thead>
					<tr className="bg-gray-100">
						{allKeys.map((key) => (
							<th
								key={key}
								className="border border-gray-300 px-4 py-2 text-left"
							>
								{key}
							</th>
						))}
					</tr>
				</thead>
				
				<tbody>
					{value.map((item) => (
						<tr key={String(item.id)} className="hover:bg-gray-50">
							{allKeys.map((key) => (
								<td key={key} className="border border-gray-300 px-4 py-2">
									{typeof item[key] === "object" && item[key] !== null
										? JSON.stringify(item[key])
										: item[key]?.toString() || "-"}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
