import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import {
	ArrowDown,
	ArrowUp,
	Eye,
	MoreHorizontal,
	SquarePen,
} from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { translateOpportunitiesTableKeys } from "@/utils/translate-opportunities-table-keys";
import { Opportunity } from "@/@types/opportunity";
import { formatDate } from "@/utils/format-date";
import { DeleteOpportunityDialog } from "../modals/delete-opportunity-dialog";
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

export const opportunitiesTableColumns: ColumnDef<Opportunity>[] = [
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
		accessorKey: "title",
		header: ({ column }) => (
			<Button
				variant="ghost"
				className="!p-0 hover:bg-transparent"
				onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
			>
				{translateOpportunitiesTableKeys("title")}
				{column.getIsSorted() !== "desc" && (
					<ArrowUp className="ml-2 h-4 w-4" />
				)}
				{column.getIsSorted() === "desc" && (
					<ArrowDown className="ml-2 h-4 w-4" />
				)}
			</Button>
		),
		cell: ({ row }) => (
			<div className="capitalize font-semibold">{row.getValue("title")}</div>
		),
	},
	{
		accessorKey: "initialDeadline",
		header: ({ column }) => (
			<Button
				variant="ghost"
				className="!p-0 hover:bg-transparent"
				onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
			>
				{translateOpportunitiesTableKeys("initialDeadline")}
				{column.getIsSorted() !== "desc" && (
					<ArrowUp className="ml-2 h-4 w-4" />
				)}
				{column.getIsSorted() === "desc" && (
					<ArrowDown className="ml-2 h-4 w-4" />
				)}
			</Button>
		),
		cell: ({ row }) => <div>{formatDate(row.getValue("initialDeadline"))}</div>,
		sortingFn: "datetime",
	},
	{
		accessorKey: "finalDeadline",
		header: ({ column }) => (
			<Button
				variant="ghost"
				className="!p-0 hover:bg-transparent"
				onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
			>
				{translateOpportunitiesTableKeys("finalDeadline")}
				{column.getIsSorted() !== "desc" && (
					<ArrowUp className="ml-2 h-4 w-4" />
				)}
				{column.getIsSorted() === "desc" && (
					<ArrowDown className="ml-2 h-4 w-4" />
				)}
			</Button>
		),
		cell: ({ row }) => {
			const currentDate = new Date();
			const finalDeadline = row.getValue("finalDeadline") as string;
			const [day, month, year] = finalDeadline.split("/").map(Number);
			const parsedEndDate = new Date(year, month - 1, day);
			const isExpired = currentDate > parsedEndDate;

			return (
				<div className={`${isExpired ? "text-red-500 font-medium" : ""}`}>
					{formatDate(finalDeadline)}
				</div>
			);
		},
	},
	{
		accessorKey: "minValue",
		header: ({ column }) => (
			<Button
				variant="ghost"
				className="!p-0 hover:bg-transparent"
				onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
			>
				{translateOpportunitiesTableKeys("minValue")}
				{column.getIsSorted() !== "desc" && (
					<ArrowUp className="ml-2 h-4 w-4" />
				)}
				{column.getIsSorted() === "desc" && (
					<ArrowDown className="ml-2 h-4 w-4" />
				)}
			</Button>
		),
		cell: ({ row }) => (
			<div>
				{Number(row.getValue("minValue")).toLocaleString("pt-BR", {
					style: "currency",
					currency: "BRL",
				})}
			</div>
		),
	},
	{
		accessorKey: "maxValue",
		header: ({ column }) => (
			<Button
				variant="ghost"
				className="!p-0 hover:bg-transparent"
				onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
			>
				{translateOpportunitiesTableKeys("maxValue")}
				{column.getIsSorted() !== "desc" && (
					<ArrowUp className="ml-2 h-4 w-4" />
				)}
				{column.getIsSorted() === "desc" && (
					<ArrowDown className="ml-2 h-4 w-4" />
				)}
			</Button>
		),
		cell: ({ row }) => (
			<div className="font-semibold">
				{Number(row.getValue("maxValue")).toLocaleString("pt-BR", {
					style: "currency",
					currency: "BRL",
				})}
			</div>
		),
	},
	{
		id: "actions",
		header: "Ações",
		cell: ({ row }) => {
			const opportunity = row.original;

			return (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" className="h-8 w-8 p-0">
							<span className="sr-only">Abrir menu</span>

							<MoreHorizontal className="h-4 w-4" />
						</Button>
					</DropdownMenuTrigger>

					<DropdownMenuContent align="end">
						<DropdownMenuItem>
							<Eye />
							Ver Detalhes
						</DropdownMenuItem>

						<DropdownMenuItem>
							<SquarePen />
							Editar
						</DropdownMenuItem>

						<DeleteOpportunityDialog
							opportunityId={opportunity.id}
							opportunityName={opportunity.title}
						/>
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	},
];
