import { Skeleton } from "@/components/ui/skeleton";
import { TableCell, TableRow } from "@/components/ui/table";

interface CategoriesTableSkeletonProps {
    widths?: string[];
}

export function CategoriesTableBodySkeleton({
    widths = ["w-4 h-4 shadow-sm"],
}:CategoriesTableSkeletonProps) {
    return (
        <>
            {Array.from({ length: 10 }).map(() => (
                <TableRow className="border-none">
                    {Array.from({ length: 6}).map((_, i) => (
                        <TableCell key={i} className="h-14">
                            <Skeleton className={`h-5 ${widths[i] || "w-full"}`} />
                        </TableCell>
                    ))}
                </TableRow>
            ))}
        </>
    );
}
