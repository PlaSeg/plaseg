"use client";
import * as React from "react";
import {
	ColumnFiltersState,
	SortingState,
	VisibilityState,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	useReactTable,
} from "@tanstack/react-table";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { mandatoryDocumentsTableColumns } from "./mandatory-documents-columns";
import { SearchInput } from "@/components/ui/search-input";
import { translateMandatoryDocumentsTableKeys } from "@/utils/translate-mandatory-documents-table-keys";
import { MandatoryDocumentsTable } from "./mandatory-documents-table";
import { TablePagination } from "@/components/table/table-footer";
import { TableHideColumnsDropDown } from "@/components/table/table-hide-columns-dropdown";
import { CreateMandatoryDocumentSheet } from "../modals/create-mandatory-document";
import { useGetMandatoryDocuments } from "@/hooks/admin/mandatory-documents/use-get-mandatory-documents";

export function MandatoryDocumentsTableContainer() {
	const [sorting, setSorting] = React.useState<SortingState>([
		{
			id: "name",
			desc: false,
		},
	]);
	const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
		[]
	);
	const [columnVisibility, setColumnVisibility] =
		React.useState<VisibilityState>({});
	const [rowSelection, setRowSelection] = React.useState({});
	const { documents, isLoadingGetMandatoryDocuments } =
		useGetMandatoryDocuments();

	const table = useReactTable({
		data: documents,
		columns: mandatoryDocumentsTableColumns,
		onSortingChange: setSorting,
		onColumnFiltersChange: setColumnFilters,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		onColumnVisibilityChange: setColumnVisibility,
		onRowSelectionChange: setRowSelection,
		state: {
			sorting,
			columnFilters,
			columnVisibility,
			rowSelection,
		},
	});

	return (
		<div className="w-full space-y-4 bg-white p-4 border border-muted rounded-lg">
			<div>
				<h1 className="text-2xl font-semibold">Documentos obrigatórios</h1>
				<span className="text-sm text-muted-foreground">
					Adicione, edite e exclua os documentos obrigatórios da aplicação.
				</span>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:flex items-center gap-4">
				<SearchInput
					className="w-full xl:w-[300px]"
					placeholder="Pesquisar documentos..."
					value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
					onChange={(event) =>
						table.getColumn("name")?.setFilterValue(event.target.value)
					}
				/>

				<Button
					variant="secondary"
					className="font-semibold"
					onClick={() => [table.resetSorting(), table.resetColumnFilters()]}
				>
					<X />
					Limpar Filtros
				</Button>

				<TableHideColumnsDropDown
					table={table}
					translateFunction={translateMandatoryDocumentsTableKeys}
				/>

				<CreateMandatoryDocumentSheet />
			</div>

			<MandatoryDocumentsTable
				table={table}
				isLoadingGetDocuments={isLoadingGetMandatoryDocuments}
				data={documents}
			/>

			<TablePagination table={table} />
		</div>
	);
}
