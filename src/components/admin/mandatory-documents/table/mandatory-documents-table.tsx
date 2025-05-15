import { Table, TableBody, TableRow, TableCell } from "@/components/ui/table";
import { flexRender, Table as TableType } from "@tanstack/react-table";
import { MandatoryDocumentsBodySkeleton } from "./mandatory-documents-body-skeleton";
import { mandatoryDocumentsTableColumns } from "./mandatory-documents-columns";
import { MandatoryDocumentsTableHeader } from "./mandatory-documents-header";
import { MandatoryDocuments } from "@/@types/mandatory-documents";

interface MandatoryDocumentsTableProps {
	table: TableType<MandatoryDocuments>;
	isLoadingGetDocuments: boolean;
	data: MandatoryDocuments[];
}

export function MandatoryDocumentsTable({
	table,
	isLoadingGetDocuments,
	data,
}: MandatoryDocumentsTableProps) {
	return (
		<Table>
			<MandatoryDocumentsTableHeader table={table} />

			<TableBody>
				{isLoadingGetDocuments && <MandatoryDocumentsBodySkeleton />}

				{!isLoadingGetDocuments &&
					data &&
					data.length > 0 &&
					table.getRowModel().rows?.length > 0 &&
					table.getRowModel().rows.map((row) => (
						<TableRow
							key={row.id}
							data-state={row.getIsSelected() && "selected"}
						>
							{row.getVisibleCells().map((cell) => (
								<TableCell key={cell.id}>
									{flexRender(cell.column.columnDef.cell, cell.getContext())}
								</TableCell>
							))}
						</TableRow>
					))}

				{!isLoadingGetDocuments &&
					(!data ||
						data.length === 0 ||
						table.getRowModel().rows?.length === 0) && (
						<TableRow>
							<TableCell
								colSpan={mandatoryDocumentsTableColumns.length}
								className="h-24 text-center"
							>
								Sem resultados
							</TableCell>
						</TableRow>
					)}
			</TableBody>
		</Table>
	);
}
