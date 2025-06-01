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
import { CirclePlus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Project, projectsTableColumns } from "./projects-table-columns";
import { SearchInput } from "@/components/ui/search-input";
import { translateProjectTableKeys } from "@/utils/translate-project-table-keys";
import { TableSelect } from "@/components/table/table-select";
import { ProjectsTable } from "./projects-table";
import { TablePagination } from "@/components/table/table-footer";
import { TableHideColumnsDropDown } from "@/components/table/table-hide-columns-dropdown";

const projects: Project[] = [
	{
		// should be uuid
		id: "5a906689-3261-41bf-ad9c-5634dea1f09d",
		name: "Projeto X",
		slug: "projeto-x",
		opportunity: "Modernização do Sistema de Videomonitoramento",
		createdAt: new Date().toISOString(),
		requiredValue: 100000,
		contrapartValue: 50000,
		completedPercentage: 50,
	},
];

export function ProjectsTableContainer() {
	const [sorting, setSorting] = React.useState<SortingState>([]);
	const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
		[]
	);
	const [columnVisibility, setColumnVisibility] =
		React.useState<VisibilityState>({});
	const [rowSelection, setRowSelection] = React.useState({});

	const table = useReactTable({
		data: projects,
		columns: projectsTableColumns,
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
				<h1 className="text-2xl font-semibold">Projetos</h1>
				<span className="text-sm text-muted-foreground">
					Visualize e gerencie os seus projetos.
				</span>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:flex items-center gap-4">
				<SearchInput
					className="w-full xl:w-[300px]"
					placeholder="Pesquisar projetos..."
					value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
					onChange={(event) =>
						table.getColumn("name")?.setFilterValue(event.target.value)
					}
				/>

				<TableSelect
					options={[
						{ label: "Edital", value: "edital" },
						{ label: "Chamada Pública", value: "chamada-publica" },
					]}
					className="w-full xl:w-[200px]"
					placeholder="Categoria"
					onChange={(value) =>
						table.getColumn("opportunity")?.setFilterValue(value)
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
					translateFunction={translateProjectTableKeys}
				/>

				<Button>
					<CirclePlus />
					Criar novo projeto
				</Button>
			</div>

			<ProjectsTable
				table={table}
				isLoadingGetProjects={false}
				data={projects}
			/>

			<TablePagination table={table} />
		</div>
	);
}
