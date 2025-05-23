import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowDown, ArrowUp, Eye, SquarePen } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { translateProjectTableKeys } from "@/utils/translate-project-table-keys";
import { formatDate } from "@/utils/format-date";
import { Link } from "react-router";

export interface Project {
	id: string;
	name: string;
	slug: string;
	opportunity: string;
	createdAt: string;
	requiredValue: number;
	contrapartValue: number;
	completedPercentage: number;
}

export const projectsTableColumns: ColumnDef<Project>[] = [
	{
		id: "select",
		header: ({ table }) => (
			<Checkbox
				checked={
					table.getIsAllPageRowsSelected() ||
					(table.getIsSomePageRowsSelected() && "indeterminate")
				}
				onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
				aria-label="Select all"
			/>
		),
		cell: ({ row }) => (
			<Checkbox
				checked={row.getIsSelected()}
				onCheckedChange={(value) => row.toggleSelected(!!value)}
				aria-label="Select row"
			/>
		),
		enableSorting: false,
		enableHiding: false,
	},
	{
		accessorKey: "name",
		header: ({ column }) => (
			<Button
				variant="ghost"
				className="!p-0 hover:bg-transparent"
				onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
			>
				{translateProjectTableKeys("name")}
				{column.getIsSorted() !== "desc" && (
					<ArrowUp className="ml-2 h-4 w-4" />
				)}
				{column.getIsSorted() === "desc" && (
					<ArrowDown className="ml-2 h-4 w-4" />
				)}
			</Button>
		),
		cell: ({ row }) => (
			<div className="font-semibold">{row.getValue("name")}</div>
		),
	},
	{
		accessorKey: "opportunity",
		header: ({ column }) => (
			<Button
				variant="ghost"
				className="!p-0 hover:bg-transparent"
				onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
			>
				{translateProjectTableKeys("opportunity")}
				{column.getIsSorted() !== "desc" && (
					<ArrowUp className="ml-2 h-4 w-4" />
				)}
				{column.getIsSorted() === "desc" && (
					<ArrowDown className="ml-2 h-4 w-4" />
				)}
			</Button>
		),
		cell: ({ row }) => <div>{row.getValue("opportunity")}</div>,
	},
	{
		accessorKey: "requiredValue",
		header: ({ column }) => (
			<Button
				variant="ghost"
				className="!p-0 hover:bg-transparent"
				onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
			>
				{translateProjectTableKeys("requiredValue")}
				{column.getIsSorted() !== "desc" && (
					<ArrowUp className="ml-2 h-4 w-4" />
				)}
				{column.getIsSorted() === "desc" && (
					<ArrowDown className="ml-2 h-4 w-4" />
				)}
			</Button>
		),
		cell: ({ row }) => {
			const value = row.getValue("requiredValue") as number;
			return (
				<div className="font-medium">
					{new Intl.NumberFormat("pt-BR", {
						style: "currency",
						currency: "BRL",
					}).format(value)}
				</div>
			);
		},
	},
	{
		accessorKey: "contrapartValue",
		header: ({ column }) => (
			<Button
				variant="ghost"
				className="!p-0 hover:bg-transparent"
				onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
			>
				{translateProjectTableKeys("contrapartValue")}
				{column.getIsSorted() !== "desc" && (
					<ArrowUp className="ml-2 h-4 w-4" />
				)}
				{column.getIsSorted() === "desc" && (
					<ArrowDown className="ml-2 h-4 w-4" />
				)}
			</Button>
		),
		cell: ({ row }) => {
			const value = row.getValue("contrapartValue") as number;
			return (
				<div className="font-medium">
					{new Intl.NumberFormat("pt-BR", {
						style: "currency",
						currency: "BRL",
					}).format(value)}
				</div>
			);
		},
	},
	{
		accessorKey: "createdAt",
		header: ({ column }) => (
			<Button
				variant="ghost"
				className="!p-0 hover:bg-transparent"
				onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
			>
				{translateProjectTableKeys("createdAt")}
				{column.getIsSorted() !== "desc" && (
					<ArrowUp className="ml-2 h-4 w-4" />
				)}
				{column.getIsSorted() === "desc" && (
					<ArrowDown className="ml-2 h-4 w-4" />
				)}
			</Button>
		),
		cell: ({ row }) => <div>{formatDate(row.getValue("createdAt"))}</div>,
		sortingFn: "datetime",
	},
	{
		id: "actions",
		header: translateProjectTableKeys("actions"),
		cell: ({ row }) => {
			return (
				<div className="flex items-center gap-4">
					<Button variant="outline" size="icon" disabled>
						<Eye />
						<span className="sr-only">Ver detalhes</span>
					</Button>

					<Button variant="outline" size="icon" asChild>
						<Link to={`/projetos/${row.original.slug}`}>
							<SquarePen />
							<span className="sr-only">Editar</span>
						</Link>
					</Button>
				</div>
			);
		},
	},
];
