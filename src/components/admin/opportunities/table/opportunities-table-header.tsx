import { flexRender, type Table } from "@tanstack/react-table";
import { TableHead, TableHeader, TableRow } from "@/components/ui/table";
import type { Opportunity } from "@/hooks/opportunities/use-get-opportunities";

interface OpportunitiesTableHeaderProps {
	table: Table<Opportunity>;
	widths?: string[];
}

export function OpportunitiesTableHeader({
	table,
	widths = [
		"w-[50px]",
		"w-[400px]",
		"w-[100px]",
		"w-[100px]",
		"w-[100px]",
		"w-[100px]",
		"w-[100px]",
	],
}: OpportunitiesTableHeaderProps) {
	return (
		<TableHeader className="bg-slate-50">
			{table.getHeaderGroups().map((headerGroup) => (
				<TableRow key={headerGroup.id} className="border-none">
					{headerGroup.headers.map((header) => {
						return (
							<TableHead
								key={header.id}
								className={`h-5 ${widths[header.index] || "w-full"}`}
							>
								{header.isPlaceholder
									? null
									: flexRender(
											header.column.columnDef.header,
											header.getContext()
										)}
							</TableHead>
						);
					})}
				</TableRow>
			))}
		</TableHeader>
	);
}
