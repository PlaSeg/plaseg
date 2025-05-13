import { Skeleton } from "@/components/ui/skeleton";

export function AdministratorsTableBodySkeleton() {
	return (
		<tbody>
			{Array.from({ length: 5 }).map((_, i) => (
				<tr key={i}>
					{Array.from({ length: 7 }).map((_, j) => (
						<td key={j}>
							<Skeleton className="h-4 w-full" />
						</td>
					))}
				</tr>
			))}
		</tbody>
	);
}
