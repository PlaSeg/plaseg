import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProductsTableItem } from "@/mocks/products";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuItem,
	DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router";

export const productsTableColumns: ColumnDef<ProductsTableItem>[] = [
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
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					className="p-0 hover:bg-transparent"
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
				>
					Nome
					<ArrowUpDown />
				</Button>
			);
		},
		cell: ({ row }) => (
			<div className="capitalize font-semibold">{row.getValue("name")}</div>
		),
	},
	{
		accessorKey: "code",
		header: "Código",
		cell: ({ row }) => <div className="lowercase">{row.getValue("code")}</div>,
	},
	{
		accessorKey: "type",
		header: "Tipo",
		cell: ({ row }) => (
			<Badge className="rounded-full text-muted-foreground shadow-none bg-muted hover:bg-muted">
				{row.getValue("type")}
			</Badge>
		),
	},
	{
		accessorKey: "price",
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					className="p-0 hover:bg-transparent"
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
				>
					Preço
					<ArrowUpDown />
				</Button>
			);
		},
		cell: ({ row }) => {
			const price = parseFloat(row.getValue("price"));

			const formatted = new Intl.NumberFormat("pt-BR", {
				style: "currency",
				currency: "BRL",
			}).format(price);

			return <div className="font-medium">{formatted}</div>;
		},
	},
	{
		accessorKey: "max_quantity",
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					className="p-0 hover:bg-transparent"
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
				>
					Qtd. Máx
					<ArrowUpDown />
				</Button>
			);
		},
		cell: ({ row }) => (
			<div className="capitalize">{row.getValue("max_quantity")} unidades</div>
		),
	},
	{
		accessorKey: "budget",
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					className="p-0 hover:bg-transparent"
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
				>
					Orçamento
					<ArrowUpDown />
				</Button>
			);
		},
		cell: ({ row }) => {
			const budget = parseFloat(row.getValue("budget"));

			const formatted = new Intl.NumberFormat("pt-BR", {
				style: "currency",
				currency: "BRL",
			}).format(budget);

			return <div className="font-medium">{formatted}</div>;
		},
	},
	{
		id: "actions",
		enableHiding: false,
		cell: ({ row }) => {
			const product = row.original;

			return (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" className="h-8 w-8 p-0">
							<span className="sr-only">Abrir Menu</span>
							<MoreHorizontal />
						</Button>
					</DropdownMenuTrigger>

					<DropdownMenuContent align="end">
						<DropdownMenuLabel>Ações</DropdownMenuLabel>

						<DropdownMenuItem
							onClick={() => navigator.clipboard.writeText(product.id)}
						>
							Copiar id do produto
						</DropdownMenuItem>

						<DropdownMenuSeparator />

						<DropdownMenuItem>Ver detalhes</DropdownMenuItem>

						<DropdownMenuItem asChild>
							<Link to="/empresa/adicionar-produto">Editar</Link>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	},
];
