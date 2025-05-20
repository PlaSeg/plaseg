import { Table, TableBody, TableRow, TableCell } from "@/components/ui/table";
import { flexRender, Table as TableType } from "@tanstack/react-table";
import { RequiredDocumentsBodySkeleton } from "./required-documents-body-skeleton";
import { RequiredDocumentsTableHeader } from "./required-documents-header";
import { RequiredDocument } from "@/@types/admin/required-document";
import { requiredDocumentsTableColumns } from "./required-documents-columns";

interface RequiredDocumentsTableProps {
	table: TableType<RequiredDocument>;
	isLoadingGetDocuments: boolean;
	data: RequiredDocument[];
}

export function RequiredDocumentsTable({
	table,
	isLoadingGetDocuments,
	data,
}: RequiredDocumentsTableProps) {
	return (
		<Table>
			<RequiredDocumentsTableHeader table={table} />

			<TableBody>
				{isLoadingGetDocuments && <RequiredDocumentsBodySkeleton />}

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
								colSpan={requiredDocumentsTableColumns.length}
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
