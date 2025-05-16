import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import {
	ArrowUpDown,
	Copy,
	Eye,
	MoreHorizontal,
	SquarePen,
	Trash2,
} from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router";
import { Product } from "@/@types/company/product";

export const productsTableColumns: ColumnDef<Product>[] = [
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
		accessorKey: "itemType",
		header: "Tipo de Item",
		cell: ({ row }) => (
			<Badge className="rounded-full text-muted-foreground shadow-none bg-muted hover:bg-muted">
				{row.getValue("itemType")}
			</Badge>
		),
	},
	{
		accessorKey: "unitPrice",
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
			const unitPrice = parseFloat(row.getValue("unitPrice"));

			const formatted = new Intl.NumberFormat("pt-BR", {
				style: "currency",
				currency: "BRL",
			}).format(unitPrice);

			return <div className="font-medium">{formatted}</div>;
		},
	},
	{
		accessorKey: "minQuantity",
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					className="p-0 hover:bg-transparent"
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
				>
					Qtd. Mínima para Venda
					<ArrowUpDown />
				</Button>
			);
		},
		cell: ({ row }) => (
			<div className="capitalize">{row.getValue("minQuantity")} unidades</div>
		),
	},
	{
		accessorKey: "companyBudget",
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
			const companyBudget = parseFloat(row.getValue("companyBudget"));

			const formatted = new Intl.NumberFormat("pt-BR", {
				style: "currency",
				currency: "BRL",
			}).format(companyBudget);

			return <div className="font-medium">{formatted}</div>;
		},
	},
	{
		id: "actions",
		enableHiding: false,
		cell: ({ row }) => {
			return (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" className="h-8 w-8 p-0">
							<span className="sr-only">Abrir Menu</span>
							<MoreHorizontal />
						</Button>
					</DropdownMenuTrigger>

					<DropdownMenuContent align="end">
						<DropdownMenuItem
							onClick={() => navigator.clipboard.writeText(row.original.id)}
						>
							<Copy />
							Copiar ID do Produto
						</DropdownMenuItem>

						<DropdownMenuItem asChild>
							<Link to={`/produtos/${row.original.id}`}>
								<Eye />
								Ver detalhes
							</Link>
						</DropdownMenuItem>

						<DropdownMenuItem asChild>
							<Link to="/empresa/adicionar-produto">
								<SquarePen />
								Editar
							</Link>
						</DropdownMenuItem>

						<DropdownMenuItem>
							<Trash2 />
							Excluir
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	},
];
