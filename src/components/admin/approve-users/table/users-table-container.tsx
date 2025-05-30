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
import {  X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { UsersTableColumns } from "./users-table-columns";
import { SearchInput } from "@/components/ui/search-input";
import { translateUsersTableKeys } from "@/utils/translate-users-table-keys";
import { TableSelect } from "@/components/table/table-select";
import { UsersTable } from "./users-table";
import { TablePagination } from "@/components/table/table-footer";
import { TableHideColumnsDropDown } from "@/components/table/table-hide-columns-dropdown";
import { Role } from "@/@types/admin/user";
import { users } from "@/mocks/admin/users";



export function UsersTableContainer() {
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
	

	const roleOptions = [
		{ label: "Administrador", value: Role.ADMIN },
		{ label: "Município", value: Role.MUNICIPALITY },
		{ label: "Empresa", value: Role.COMPANY },
	];

	const table = useReactTable({
		data: users,
		columns: UsersTableColumns,
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
				<h1 className="text-2xl font-semibold">Usuários</h1>
				<span className="text-sm text-muted-foreground">
					Aprove ou bloqueie os usuários da aplicação.
				</span>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:flex items-center gap-4">
				<SearchInput
					className="w-full xl:w-[300px]"
					placeholder="Pesquisar usuário..."
					value={
						(table.getColumn("name")?.getFilterValue() as string) ?? ""
					}
					onChange={(event) =>
						table.getColumn("name")?.setFilterValue(event.target.value)
					}
				/>

				<TableSelect
					options={roleOptions}
					className="w-full xl:w-[200px]"
					placeholder="Cargo"
					onChange={(value) => table.getColumn("role")?.setFilterValue(value)}
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
					translateFunction={translateUsersTableKeys}
				/>

				
			</div>

			<UsersTable
				table={table}
				isLoadingGetUsers= {false}
				data={users}
			/>

			<TablePagination table={table} />
		</div>
	);
}
