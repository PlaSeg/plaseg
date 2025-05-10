import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowDown, ArrowUp, Eye } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { translateBaseProductsTableKeys } from "@/utils/translate-base-products-table-keys";
import { BaseProduct } from "@/@types/base-product";
import { formatDate } from "@/utils/format-date";
import { EditBaseProductSheet } from "../modals/edit-base-product-sheet";
import { DeleteBaseProductDialog } from "../modals/delete-base-product-dialog";
import { formatCurrency } from "@/utils/format-currency";

export const baseProductsTableColumns: ColumnDef<BaseProduct>[] = [
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
		accessorKey: "code",
		header: ({ column }) => (
			<Button
				variant="ghost"
				className="!p-0 hover:bg-transparent"
				onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
			>
				{translateBaseProductsTableKeys("code")}
				{column.getIsSorted() !== "desc" && (
					<ArrowUp className="ml-2 h-4 w-4" />
				)}
				{column.getIsSorted() === "desc" && (
					<ArrowDown className="ml-2 h-4 w-4" />
				)}
			</Button>
		),
		cell: ({ row }) => <div className="font-mono">{row.getValue("code")}</div>,
	},
	{
		accessorKey: "name",
		header: ({ column }) => (
			<Button
				variant="ghost"
				className="!p-0 hover:bg-transparent"
				onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
			>
				{translateBaseProductsTableKeys("name")}
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
		accessorKey: "type",
		header: ({ column }) => (
			<Button
				variant="ghost"
				className="!p-0 hover:bg-transparent"
				onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
			>
				{translateBaseProductsTableKeys("type")}
				{column.getIsSorted() !== "desc" && (
					<ArrowUp className="ml-2 h-4 w-4" />
				)}
				{column.getIsSorted() === "desc" && (
					<ArrowDown className="ml-2 h-4 w-4" />
				)}
			</Button>
		),
		cell: ({ row }) => <div>{row.getValue("type")}</div>,
	},
	{
		accessorKey: "unitValue",
		header: ({ column }) => (
			<Button
				variant="ghost"
				className="!p-0 hover:bg-transparent"
				onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
			>
				{translateBaseProductsTableKeys("unitValue")}
				{column.getIsSorted() !== "desc" && (
					<ArrowUp className="ml-2 h-4 w-4" />
				)}
				{column.getIsSorted() === "desc" && (
					<ArrowDown className="ml-2 h-4 w-4" />
				)}
			</Button>
		),
		cell: ({ row }) => <div>{formatCurrency(row.getValue("unitValue"))}</div>,
	},
	{
		accessorKey: "createdAt",
		header: ({ column }) => (
			<Button
				variant="ghost"
				className="!p-0 hover:bg-transparent"
				onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
			>
				{translateBaseProductsTableKeys("createdAt")}
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
		header: "Ações",
		cell: ({ row }) => {
			const baseProduct = row.original;

			return (
				<div className="flex items-center gap-4">
					<Button variant="outline" size="icon">
						<Eye className="h-4 w-4" />
						<span className="sr-only">Ver detalhes</span>
					</Button>

					<EditBaseProductSheet />

					<DeleteBaseProductDialog
						baseProductId={baseProduct.id}
						baseProductName={baseProduct.name}
					/>
				</div>
			);
		},
	},
];
