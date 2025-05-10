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
import { typesTableColumns } from "./types-table-columns";
import { SearchInput } from "@/components/ui/search-input";
import { translateTypesTableKeys } from "@/utils/translate-types-table-keys";
import { types } from "@/mocks/admin/types";
import { TableSelect } from "@/components/table/table-select";
import { TypesTable } from "./types-table";
import { TablePagination } from "@/components/table/table-footer";
import { TableHideColumnsDropDown } from "@/components/table/table-hide-columns-dropdown";
import { TypeGroup } from "@/@types/type";
import { CreateTypeSheet } from "../modals/create-type-sheet";

export function TypesTableContainer() {
	const [sorting, setSorting] = React.useState<SortingState>([
		{
			id: "description",
			desc: false,
		},
	]);
	const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
		[]
	);
	const [columnVisibility, setColumnVisibility] =
		React.useState<VisibilityState>({});
	const [rowSelection, setRowSelection] = React.useState({});

	// Create group options for the filter
	const groupOptions = [
		{ label: "Categoria", value: TypeGroup.CATEGORY },
		{ label: "Subcategoria", value: TypeGroup.SUBCATEGORY },
		{ label: "Subsubcategoria", value: TypeGroup.SUBSUBCATEGORY },
		{ label: "Oportunidade", value: TypeGroup.OPPORTUNITY },
	];

	const table = useReactTable({
		data: types,
		columns: typesTableColumns,
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
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:flex items-center gap-4">
				<SearchInput
					className="w-full xl:w-[300px]"
					placeholder="Pesquisar tipos..."
					value={
						(table.getColumn("description")?.getFilterValue() as string) ?? ""
					}
					onChange={(event) =>
						table.getColumn("description")?.setFilterValue(event.target.value)
					}
				/>

				<TableSelect
					options={groupOptions}
					className="w-full xl:w-[200px]"
					placeholder="Grupo"
					onChange={(value) => table.getColumn("group")?.setFilterValue(value)}
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
					translateFunction={translateTypesTableKeys}
				/>

				<CreateTypeSheet />
			</div>

			<TypesTable table={table} isLoadingGetTypes={false} data={types} />

			<TablePagination table={table} />
		</div>
	);
}
