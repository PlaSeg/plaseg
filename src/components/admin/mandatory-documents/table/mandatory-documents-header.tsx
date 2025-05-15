import { MandatoryDocuments } from "@/@types/mandatory-documents";
import { TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { flexRender, Table } from "@tanstack/react-table";

interface MandatoryDocumentsTableHeaderProps {
	table: Table<MandatoryDocuments>;
	widths?: string[];
}

export function MandatoryDocumentsTableHeader({
	table,
	widths = [
		"w-[50px]",
		"w-[300px]",
		"w-[200px]",
		"w-[200px]",
		"w-[200px]",
		"w-[200px]",
	],
}: MandatoryDocumentsTableHeaderProps) {
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
