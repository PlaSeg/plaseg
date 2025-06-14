import { Skeleton } from "@/components/ui/skeleton";

export function ProjectsDetailsSkeleton() {
	return (
		<div className="flex flex-col gap-6 py-6">
			<div className="w-full flex flex-col gap-2">
				<Skeleton className="h-[32px] w-[300px] bg-slate-200 rounded-xl" />
				<Skeleton className="h-[22px] w-[250px] bg-slate-200 rounded-xl" />
			</div>

			<Skeleton className="h-[128px] w-full bg-slate-200 rounded-xl" />

			<div className="w-full grid grid-cols-3 gap-6">
				<Skeleton className="h-[400px] col-span-2 bg-slate-200 rounded-xl" />
				<Skeleton className="h-[400px] bg-slate-200 rounded-xl" />
			</div>
		</div>
	);
}
