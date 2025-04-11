import { Skeleton } from "@/components/ui/skeleton";
import { TableCell, TableRow } from "@/components/ui/table";
import { OpportunityColumn } from "@/mocks/admin/opportunities";
import { Table } from "@tanstack/react-table";

interface OpportunitiesTableSkeletonProps {
	table: Table<OpportunityColumn>;
}

export function OpportunitiesTableBodySkeleton({
	table,
	widths = ["w-4.5"],
}: OpportunitiesTableSkeletonProps & { widths?: string[] }) {
	return (
		<>
			{table.getRowModel().rows?.length > 0 &&
				table.getRowModel().rows.map((row) => (
					<TableRow
						key={row.id}
						data-state={row.getIsSelected() && "selected"}
						className="border-none"
					>
						{row.getVisibleCells().map((cell, index) => (
							<TableCell key={cell.id} className="h-14">
								<Skeleton className={`h-5 ${widths[index] || "w-full"}`} />
							</TableCell>
						))}
					</TableRow>
				))}
		</>
	);
}
