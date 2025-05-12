import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowDown, ArrowUp, Eye, SquarePen } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { translateBaseProductsTableKeys } from "@/utils/translate-base-products-table-keys";
import { BaseProduct } from "@/@types/base-product";
import { formatDate } from "@/utils/format-date";
import { DeleteBaseProductDialog } from "../modals/delete-base-product-dialog";
import { formatCurrency } from "@/utils/format-currency";
import { Tag } from "@/components/ui/tag";

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
		accessorKey: "category",
		header: ({ column }) => (
			<Button
				variant="ghost"
				className="!p-0 hover:bg-transparent"
				onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
			>
				{translateBaseProductsTableKeys("category")}
				{column.getIsSorted() !== "desc" && (
					<ArrowUp className="ml-2 h-4 w-4" />
				)}
				{column.getIsSorted() === "desc" && (
					<ArrowDown className="ml-2 h-4 w-4" />
				)}
			</Button>
		),
		cell: ({ row }) => {
			const category = row.getValue("category") as string | null;

			if (!category) {
				return <div>{"-"}</div>;
			}

			return <Tag>{category}</Tag>;
		},
	},
	{
		accessorKey: "subCategory",
		header: ({ column }) => (
			<Button
				variant="ghost"
				className="!p-0 hover:bg-transparent"
				onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
			>
				{translateBaseProductsTableKeys("subCategory")}
				{column.getIsSorted() !== "desc" && (
					<ArrowUp className="ml-2 h-4 w-4" />
				)}
				{column.getIsSorted() === "desc" && (
					<ArrowDown className="ml-2 h-4 w-4" />
				)}
			</Button>
		),
		cell: ({ row }) => {
			const subCategory = row.getValue("subCategory") as string | null;

			if (!subCategory) {
				return <div>{"-"}</div>;
			}

			return <Tag>{subCategory}</Tag>;
		},
	},
	{
		accessorKey: "subSubCategory",
		header: ({ column }) => (
			<Button
				variant="ghost"
				className="!p-0 hover:bg-transparent"
				onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
			>
				{translateBaseProductsTableKeys("subSubCategory")}
				{column.getIsSorted() !== "desc" && (
					<ArrowUp className="ml-2 h-4 w-4" />
				)}
				{column.getIsSorted() === "desc" && (
					<ArrowDown className="ml-2 h-4 w-4" />
				)}
			</Button>
		),
		cell: ({ row }) => {
			const subSubCategory = row.getValue("subSubCategory") as string | null;

			if (!subSubCategory) {
				return <div>{"-"}</div>;
			}

			return <Tag>{subSubCategory}</Tag>;
		},
	},
	{
		accessorKey: "budget1",
		header: ({ column }) => (
			<Button
				variant="ghost"
				className="!p-0 hover:bg-transparent"
				onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
			>
				{translateBaseProductsTableKeys("budget1")}
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
				{formatCurrency(row.getValue("budget1"))}
			</div>
		),
	},
	{
		accessorKey: "budget1Validity",
		header: ({ column }) => (
			<Button
				variant="ghost"
				className="!p-0 hover:bg-transparent"
				onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
			>
				{translateBaseProductsTableKeys("budget1Validity")}
				{column.getIsSorted() !== "desc" && (
					<ArrowUp className="ml-2 h-4 w-4" />
				)}
				{column.getIsSorted() === "desc" && (
					<ArrowDown className="ml-2 h-4 w-4" />
				)}
			</Button>
		),
		cell: ({ row }) => <div>{formatDate(row.getValue("budget1Validity"))}</div>,
		sortingFn: "datetime",
	},
	{
		id: "actions",
		header: "Ações",
		cell: ({ row }) => {
			const baseProduct = row.original;

			return (
				<div className="flex items-center gap-4">
					<Button variant="outline" size="icon" disabled>
						<Eye className="h-4 w-4" />
						<span className="sr-only">Ver detalhes</span>
					</Button>

					<Button variant="outline" size="icon" disabled>
						<SquarePen className="h-4 w-4" />
						<span className="sr-only">Editar</span>
					</Button>

					<DeleteBaseProductDialog
						baseProductId={baseProduct.id}
						baseProductName={baseProduct.name}
					/>
				</div>
			);
		},
	},
];
