import { RequiredDocument } from "@/@types/admin/required-document";
import { TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { flexRender, Table } from "@tanstack/react-table";

interface RequiredDocumentsTableHeaderProps {
	table: Table<RequiredDocument>;
	widths?: string[];
}

export function RequiredDocumentsTableHeader({
	table,
	widths = [
		"w-[50px]",
		"w-[300px]",
		"w-[450px]",
		"w-[200px]",
		"w-[200px]",
		"w-[200px]",
	],
}: RequiredDocumentsTableHeaderProps) {
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
