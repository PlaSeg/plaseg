import { flexRender, type Table } from "@tanstack/react-table";
import { TableHead, TableHeader, TableRow } from "@/components/ui/table";
import type { Project } from "@/hooks/projects/use-get-projects";

interface ProjectsTableHeaderProps {
	table: Table<Project>;
	widths?: string[];
}

export function ProjectsTableHeader({
	table,
	widths = [
		"w-[50px]",
		"w-[300px]",
		"w-[200px]",
		"w-[150px]",
		"w-[100px]",
		"w-[100px]",
	],
}: ProjectsTableHeaderProps) {
	return (
		<TableHeader className="bg-slate-50">
			{table.getHeaderGroups().map((headerGroup) => (
				<TableRow key={headerGroup.id} className="border-none">
					{headerGroup.headers.map((header) => {
						return (
							<TableHead
								key={header.id}
								className={`h-5 ${widths[header.index] || "w-full"}`}
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
