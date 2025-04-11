import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import {
	ArrowDown,
	ArrowUp,
	Copy,
	Eye,
	MoreHorizontal,
	SquarePen,
} from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { translateOpportunitiesTableKeys } from "@/utils/translate-opportunities-table-keys";
import { Switch } from "@/components/ui/switch";

interface OpportunityColumn {
	id: string;
	title: string;
	category: string;
	startDate: string;
	endDate: string;
	minFundingAmount: number;
	maxFundingAmount: number;
	isActive: boolean;
}

export const opportunitiesTableColumns: ColumnDef<OpportunityColumn>[] = [
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
		accessorKey: "category",
		header: ({ column }) => (
			<Button
				variant="ghost"
				className="!p-0 hover:bg-transparent"
				onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
			>
				{translateOpportunitiesTableKeys("category")}
				{column.getIsSorted() !== "desc" && (
					<ArrowUp className="ml-2 h-4 w-4" />
				)}
				{column.getIsSorted() === "desc" && (
					<ArrowDown className="ml-2 h-4 w-4" />
				)}
			</Button>
		),
		cell: ({ row }) => (
			<Badge
				className="rounded-full px-3 bg-muted border border-zinc-300 min-w-[130px]
			text-foreground flex justify-center hover:bg-transparent"
			>
				{row.getValue("category")}
			</Badge>
		),
	},
	{
		accessorKey: "startDate",
		header: ({ column }) => (
			<Button
				variant="ghost"
				className="!p-0 hover:bg-transparent"
				onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
			>
				{translateOpportunitiesTableKeys("startDate")}
				{column.getIsSorted() !== "desc" && (
					<ArrowUp className="ml-2 h-4 w-4" />
				)}
				{column.getIsSorted() === "desc" && (
					<ArrowDown className="ml-2 h-4 w-4" />
				)}
			</Button>
		),
		cell: ({ row }) => <div>{row.getValue("startDate")}</div>,
		sortingFn: "datetime",
	},
	{
		accessorKey: "endDate",
		header: ({ column }) => (
			<Button
				variant="ghost"
				className="!p-0 hover:bg-transparent"
				onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
			>
				{translateOpportunitiesTableKeys("endDate")}
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
			const endDate = row.getValue("endDate") as string;
			const [day, month, year] = endDate.split("/").map(Number);
			const parsedEndDate = new Date(year, month - 1, day);
			const isExpired = currentDate > parsedEndDate;

			return (
				<div className={`${isExpired ? "text-red-500 font-medium" : ""}`}>
					{endDate}
				</div>
			);
		},
	},
	{
		accessorKey: "minFundingAmount",
		header: ({ column }) => (
			<Button
				variant="ghost"
				className="!p-0 hover:bg-transparent"
				onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
			>
				{translateOpportunitiesTableKeys("minFundingAmount")}
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
				{Number(row.getValue("minFundingAmount")).toLocaleString("pt-BR", {
					style: "currency",
					currency: "BRL",
				})}
			</div>
		),
	},
	{
		accessorKey: "maxFundingAmount",
		header: ({ column }) => (
			<Button
				variant="ghost"
				className="!p-0 hover:bg-transparent"
				onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
			>
				{translateOpportunitiesTableKeys("maxFundingAmount")}
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
				{Number(row.getValue("maxFundingAmount")).toLocaleString("pt-BR", {
					style: "currency",
					currency: "BRL",
				})}
			</div>
		),
	},
	{
		accessorKey: "isActive",
		header: ({ column }) => (
			<Button
				variant="ghost"
				className="!p-0 hover:bg-transparent"
				onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
			>
				{translateOpportunitiesTableKeys("isActive")}
				{column.getIsSorted() !== "desc" && (
					<ArrowUp className="ml-2 h-4 w-4" />
				)}
				{column.getIsSorted() === "desc" && (
					<ArrowDown className="ml-2 h-4 w-4" />
				)}
			</Button>
		),
		cell: ({ row }) => {
			const isActive = row.getValue("isActive") as boolean;
			return (
				<Switch
					checked={isActive}
					onCheckedChange={() => {}}
					className="data-[state=checked]:bg-green-500"
				/>
			);
		},
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
							<div className="flex items-center">
								<Eye className="mr-2 h-4 w-4" />
								Visualizar
							</div>
						</DropdownMenuItem>

						<DropdownMenuItem asChild>
							<div className="flex items-center">
								<SquarePen className="h-4 w-4" />
								Editar
							</div>
						</DropdownMenuItem>

						<DropdownMenuItem
							onClick={() => navigator.clipboard.writeText(opportunity.id)}
						>
							<div className="flex items-center">
								<Copy className="mr-2 h-4 w-4" />
								Copiar ID
							</div>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	},
];
