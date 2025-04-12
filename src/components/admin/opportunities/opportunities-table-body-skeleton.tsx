import { Skeleton } from "@/components/ui/skeleton";
import { TableCell, TableRow } from "@/components/ui/table";

interface OpportunitiesTableSkeletonProps {
	widths?: string[];
}

export function OpportunitiesTableBodySkeleton({
	widths = ["w-4 h-4 shadow-sm"],
}: OpportunitiesTableSkeletonProps) {
	return (
		<>
			{Array.from({ length: 10 }).map((_, i) => (
				<TableRow className="border-none">
					{Array.from({ length: 9 }).map((_, i) => (
						<TableCell key={i} className="h-14">
							<Skeleton className={`h-5 ${widths[i] || "w-full"}`} />
						</TableCell>
					))}
				</TableRow>
			))}
		</>
	);
}
