import { Button } from "@/components/ui/button";
import type { ColumnDef } from "@tanstack/react-table";
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
import type { PriceRegistrationRecordData } from "@/@types/company/price-registration-record";

export const priceRegistrationRecordsTableColumns: ColumnDef<PriceRegistrationRecordData>[] =
	[
		{
			id: "select",
			header: ({ table }) => (
				<Checkbox
					checked={
						table.getIsAllPageRowsSelected() ||
						(table.getIsSomePageRowsSelected() && "indeterminate")
					}
					onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
					aria-label="Selecionar todos"
				/>
			),
			cell: ({ row }) => (
				<Checkbox
					checked={row.getIsSelected()}
					onCheckedChange={(value) => row.toggleSelected(!!value)}
					aria-label="Selecionar linha"
				/>
			),
			enableSorting: false,
			enableHiding: false,
		},
		{
			accessorKey: "number",
			header: ({ column }) => {
				return (
					<Button
						variant="ghost"
						className="p-0 hover:bg-transparent"
						onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
					>
						Número
						<ArrowUpDown />
					</Button>
				);
			},
			cell: ({ row }) => (
				<div className="capitalize">{row.getValue("number")}</div>
			),
		},
		{
			accessorKey: "year",
			header: ({ column }) => {
				return (
					<Button
						variant="ghost"
						className="p-0 hover:bg-transparent"
						onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
					>
						Ano
						<ArrowUpDown />
					</Button>
				);
			},
			cell: ({ row }) => (
				<div className="capitalize">{row.getValue("year")}</div>
			),
		},
		{
			accessorKey: "responsible_body",
			header: "Órgão",
			cell: ({ row }) => (
				<div className="capitalize">{row.getValue("responsible_body")}</div>
			),
		},
		{
			accessorKey: "date",
			header: ({ column }) => {
				return (
					<Button
						variant="ghost"
						className="p-0 hover:bg-transparent"
						onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
					>
						Data de Assinatura
						<ArrowUpDown />
					</Button>
				);
			},
			cell: ({ row }) => (
				<div className="capitalize">{row.getValue("date")}</div>
			),
			sortingFn: (rowA, rowB, columnId) => {
				const dateA = rowA.getValue<string>(columnId);
				const dateB = rowB.getValue<string>(columnId);

				const parseDate = (dateStr: string) => {
					const [day, month, year] = dateStr.split("/").map(Number);
					return new Date(year, month - 1, day);
				};

				const dateValueA = parseDate(dateA);
				const dateValueB = parseDate(dateB);

				return dateValueA.getTime() - dateValueB.getTime();
			},
		},
		{
			accessorKey: "validity_in_months",
			header: ({ column }) => {
				return (
					<Button
						variant="ghost"
						className="p-0 hover:bg-transparent"
						onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
					>
						Validade
						<ArrowUpDown />
					</Button>
				);
			},
			cell: ({ row }) => (
				<div className="capitalize">{row.getValue("validity_in_months")}</div>
			),
		},
		{
			id: "actions",
			enableHiding: false,
			cell: ({ row }) => {
				const record = row.original;

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
								onClick={() => navigator.clipboard.writeText(record.id)}
							>
								Copiar ID da Ata
							</DropdownMenuItem>

							<DropdownMenuSeparator />

							<DropdownMenuItem>Ver detalhes</DropdownMenuItem>

							<DropdownMenuItem>Editar</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				);
			},
		},
	];
