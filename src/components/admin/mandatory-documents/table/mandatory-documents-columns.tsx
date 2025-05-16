import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowDown, ArrowUp, Eye } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { MandatoryDocuments } from "@/@types/admin/mandatory-documents";
import { translateMandatoryDocumentsTableKeys } from "@/utils/translate-mandatory-documents-table-keys";
import { formatDate } from "@/utils/format-date";
import { EditMandatoryDocumentSheet } from "../modals/edit-mandatory-document";
import { DeleteMandatoryDocument } from "../modals/delete-mandatory-document";

export const mandatoryDocumentsTableColumns: ColumnDef<MandatoryDocuments>[] = [
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
				{translateMandatoryDocumentsTableKeys("name")}
				{column.getIsSorted() !== "desc" && (
					<ArrowUp className="ml-2 h-4 w-4" />
				)}
				{column.getIsSorted() === "desc" && (
					<ArrowDown className="ml-2 h-4 w-4" />
				)}
			</Button>
		),
		cell: ({ row }) => (
			<div className="capitalize font-semibold">{row.getValue("name")}</div>
		),
	},
	{
		accessorKey: "description",
		header: ({ column }) => (
			<Button
				variant="ghost"
				className="!p-0 hover:bg-transparent"
				onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
			>
				{translateMandatoryDocumentsTableKeys("description")}
				{column.getIsSorted() !== "desc" && (
					<ArrowUp className="ml-2 h-4 w-4" />
				)}
				{column.getIsSorted() === "desc" && (
					<ArrowDown className="ml-2 h-4 w-4" />
				)}
			</Button>
		),
		cell: ({ row }) => (
			<div className="capitalize font-semibold">
				{row.getValue("description")}
			</div>
		),
	},

	{
		accessorKey: "model",
		header: ({ column }) => (
			<Button
				variant="ghost"
				className="!p-0 hover:bg-transparent"
				onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
			>
				{translateMandatoryDocumentsTableKeys("model")}
				{column.getIsSorted() !== "desc" && (
					<ArrowUp className="ml-2 h-4 w-4" />
				)}
				{column.getIsSorted() === "desc" && (
					<ArrowDown className="ml-2 h-4 w-4" />
				)}
			</Button>
		),
		cell: ({ row }) => (
			<div className="capitalize font-semibold">{row.getValue("model")}</div>
		),
	},

	{
		accessorKey: "createdAt",
		header: ({ column }) => (
			<Button
				variant="ghost"
				className="!p-0 hover:bg-transparent"
				onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
			>
				{translateMandatoryDocumentsTableKeys("createdAt")}
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
			const document = row.original;

			return (
				<div className="flex items-center gap-4">
					<Button variant="outline" size="icon" disabled>
						<Eye />
						<span className="sr-only">Ver detalhes</span>
					</Button>

					<EditMandatoryDocumentSheet />

					<DeleteMandatoryDocument id={document.id} name={document.name} />
				</div>
			);
		},
	},
];
