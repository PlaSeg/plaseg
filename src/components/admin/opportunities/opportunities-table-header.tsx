import { Skeleton } from "@/components/ui/skeleton";
import {
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { OpportunityColumn } from "@/mocks/admin/opportunities";
import { flexRender, Table } from "@tanstack/react-table";

interface OpportunitiesTableHeaderProps {
	table: Table<OpportunityColumn>;
}

export function OpportunitiesTableHeader({
	table,
}: OpportunitiesTableHeaderProps) {
	return (
		<TableHeader className="bg-slate-50">
			{table.getHeaderGroups().map((headerGroup) => (
				<TableRow key={headerGroup.id} className="border-none">
					{headerGroup.headers.map((header) => {
						return (
							<TableHead
								key={header.id}
								className={`h-5 ${
									header.index === 0
										? "w-[50px]"
										: header.index === 1
										? "w-[300px]"
										: header.index === 2
										? "w-[168px]"
										: header.index === 3
										? "w-[120px]"
										: header.index === 4
										? "w-[120px]"
										: header.index === 5
										? "w-[120px]"
										: header.index === 6
										? "w-[120px]"
										: header.index === 7
										? "w-[10px]"
										: header.index === 8
										? "w-[10px]"
										: "w-full"
								}`}
							>
								{header.isPlaceholder
									? null
									: flexRender(
											header.column.columnDef.header,
											header.getContext()
									  )}
							</TableHead>
						);
					})}
				</TableRow>
			))}
		</TableHeader>
	);
}
