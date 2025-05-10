import { Skeleton } from "@/components/ui/skeleton";
import { TableCell, TableRow } from "@/components/ui/table";

export function BaseProductsTableBodySkeleton() {
	return (
		<>
			{Array.from({ length: 10 }).map((_, index) => (
				<TableRow key={index}>
					<TableCell className="p-2">
						<Skeleton className="h-4 w-4" />
					</TableCell>
					<TableCell className="p-2">
						<Skeleton className="h-4 w-16" />
					</TableCell>
					<TableCell className="p-2">
						<Skeleton className="h-4 w-36" />
					</TableCell>
					<TableCell className="p-2">
						<Skeleton className="h-4 w-20" />
					</TableCell>
					<TableCell className="p-2">
						<Skeleton className="h-4 w-16" />
					</TableCell>
					<TableCell className="p-2">
						<Skeleton className="h-4 w-20" />
					</TableCell>
					<TableCell className="p-2">
						<div className="flex items-center gap-4">
							<Skeleton className="h-8 w-8 rounded-md" />
							<Skeleton className="h-8 w-8 rounded-md" />
							<Skeleton className="h-8 w-8 rounded-md" />
						</div>
					</TableCell>
				</TableRow>
			))}
		</>
	);
}
