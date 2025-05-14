import { ColumnDef } from "@tanstack/react-table";
import { translateAdministratorsTableKeys } from "@/utils/translate-administrators-table-keys";
import { formatDate } from "@/utils/format-date";
import { formatDocument } from "@/utils/format-document";
import { AdministratorSchema } from "@/@schemas/administrator";

export const administratorsTableColumns: ColumnDef<AdministratorSchema>[] = [
	{
		accessorKey: "name",
		header: translateAdministratorsTableKeys.name,
	},
	{
		accessorKey: "email",
		header: translateAdministratorsTableKeys.email,
	},
	{
		accessorKey: "document",
		header: translateAdministratorsTableKeys.document,
		cell: ({ row }) => formatDocument(row.original.document),
	},
	{
		accessorKey: "phone",
		header: translateAdministratorsTableKeys.phone,
	},
	{
		accessorKey: "role",
		header: translateAdministratorsTableKeys.role,
	},
	{
		accessorKey: "createdAt",
		header: translateAdministratorsTableKeys.createdAt,
		cell: ({ row }) => formatDate(row.original.createdAt),
	},
];
