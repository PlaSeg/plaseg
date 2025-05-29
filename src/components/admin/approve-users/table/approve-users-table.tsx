import { Table, TableBody, TableRow, TableCell } from "@/components/ui/table";
import { flexRender, Table as TableType } from "@tanstack/react-table";
import { ApproveUsersTableBodySkeleton } from "./approve-users-table-body-skeleton";
import { ApproveUsersTableColumns } from "./approve-users-table-columns";
import { ApproveUsersTableHeader } from "./approve-users-table-header";
import { ApproveUser } from "@/@types/admin/approve-users";

interface ApproveUsersTableProps {
	table: TableType<ApproveUser>;
	isLoadingGetApproveUsers: boolean;
	data: ApproveUser[];
}

export function ApproveUsersTable({
	table,
	isLoadingGetApproveUsers,
	data,
}: ApproveUsersTableProps) {
	return (
		<Table>
			<ApproveUsersTableHeader table={table} />

			<TableBody>
				{isLoadingGetApproveUsers && <ApproveUsersTableBodySkeleton />}

				{!isLoadingGetApproveUsers &&
					data &&
					data.length > 0 &&
					table.getRowModel().rows?.length > 0 &&
					table.getRowModel().rows.map((row) => (
						<TableRow
							key={row.id}
							data-state={row.getIsSelected() && "selected"}
						>
							{row.getVisibleCells().map((cell) => (
								<TableCell key={cell.id}>
									{flexRender(cell.column.columnDef.cell, cell.getContext())}
								</TableCell>
							))}
						</TableRow>
					))}

				{!isLoadingGetApproveUsers &&
					(!data ||
						data.length === 0 ||
						table.getRowModel().rows?.length === 0) && (
						<TableRow>
							<TableCell
								colSpan={ApproveUsersTableColumns.length}
								className="h-24 text-center"
							>
								Sem resultados
							</TableCell>
						</TableRow>
					)}
			</TableBody>
		</Table>
	);
}
