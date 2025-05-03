"use client";
import * as React from "react";
import {
	ColumnFiltersState,
	SortingState,
	VisibilityState,
	flexRender,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	useReactTable,
} from "@tanstack/react-table";
import { ChevronDown, PlusIcon, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { opportunitiesTableColumns } from "./opportunities-table-columns";
import { SearchInput } from "@/components/ui/search-input";
import { opportunitiesMock } from "@/mocks/admin/opportunities";
import { translateOpportunitiesTableKeys } from "@/utils/translate-opportunities-table-keys";
import { Link } from "react-router";
import { useGetOpportunities } from "@/hooks/admin/use-get-opportunities";
import { OpportunitiesTableBodySkeleton } from "./opportunities-table-body-skeleton";
import { OpportunitiesTableHeader } from "./opportunities-table-header";
import { TableSelect } from "@/components/table/table-select";
import { opportunitiesCategories } from "@/mocks/opportunity/opportunities-categories";

export function OpportunitiesTable() {
	const [sorting, setSorting] = React.useState<SortingState>([
		{
			id: "maxFundingAmount",
			desc: true,
		},
	]);
	const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
		[]
	);
	const [columnVisibility, setColumnVisibility] =
		React.useState<VisibilityState>({});
	const [rowSelection, setRowSelection] = React.useState({});
	const { opportunities, isLoadingGetOpportunities } = useGetOpportunities();

	const data = opportunitiesMock;

	const table = useReactTable({
		data: opportunities,
		columns: opportunitiesTableColumns,
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
					placeholder="Pesquisar oportunidades..."
					value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
					onChange={(event) =>
						table.getColumn("title")?.setFilterValue(event.target.value)
					}
				/>

				<TableSelect
					options={opportunitiesCategories}
					className="w-full xl:w-[200px]"
					placeholder="Categoria"
					onChange={(value) =>
						table.getColumn("category")?.setFilterValue(value)
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

				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button
							variant="outline"
							className="font-semibold md:ml-auto w-full xl:w-[100px]"
						>
							<div className="flex items-center gap-2">
								Exibir <ChevronDown />
							</div>
						</Button>
					</DropdownMenuTrigger>

					<DropdownMenuContent align="end">
						{table
							.getAllColumns()
							.filter((column) => column.getCanHide())
							.map((column) => {
								return (
									<DropdownMenuCheckboxItem
										key={column.id}
										className="capitalize"
										checked={column.getIsVisible()}
										onCheckedChange={(value) =>
											column.toggleVisibility(!!value)
										}
									>
										{translateOpportunitiesTableKeys(column.id)}
									</DropdownMenuCheckboxItem>
								);
							})}
					</DropdownMenuContent>
				</DropdownMenu>

				<Button className="font-semibold" asChild>
					<Link to="/admin/adicionar-oportunidade">
						<PlusIcon />
						Adicionar Oportunidade
					</Link>
				</Button>
			</div>

			<div>
				<Table className="overflow-x-scroll">
					<OpportunitiesTableHeader table={table} />

					<TableBody>
						{!isLoadingGetOpportunities &&
							data.length > 0 &&
							table.getRowModel().rows?.length > 0 &&
							table.getRowModel().rows.map((row) => (
								<TableRow
									key={row.id}
									data-state={row.getIsSelected() && "selected"}
									className="border-none"
								>
									{row.getVisibleCells().map((cell) => (
										<TableCell key={cell.id}>
											{flexRender(
												cell.column.columnDef.cell,
												cell.getContext()
											)}
										</TableCell>
									))}
								</TableRow>
							))}

						{isLoadingGetOpportunities ||
							((!data ||
								data.length === 0 ||
								table.getRowModel().rows?.length === 0) && (
								<TableRow>
									<TableCell
										colSpan={opportunitiesTableColumns.length}
										className="h-24 text-center"
									>
										Sem resultados
									</TableCell>
								</TableRow>
							))}

						{isLoadingGetOpportunities && <OpportunitiesTableBodySkeleton />}
					</TableBody>
				</Table>
			</div>

			<div className="flex items-center justify-end space-x-2">
				<div className="flex-1 text-sm text-muted-foreground">
					{table.getFilteredSelectedRowModel().rows.length} de{" "}
					{table.getFilteredRowModel().rows.length} linha(s) selecionada(s).
				</div>

				<div className="space-x-2">
					<Button
						variant="outline"
						size="sm"
						onClick={() => table.previousPage()}
						disabled={!table.getCanPreviousPage()}
					>
						Anterior
					</Button>

					<Button
						variant="outline"
						size="sm"
						onClick={() => table.nextPage()}
						disabled={!table.getCanNextPage()}
					>
						Próximo
					</Button>
				</div>
			</div>
		</div>
	);
}
