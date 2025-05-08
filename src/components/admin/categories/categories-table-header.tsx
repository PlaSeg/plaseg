import { Category } from "@/@types/category";
import { TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { flexRender, Table } from "@tanstack/react-table";

interface CategoriesTableHeaderProps {
    table: Table<Category>;
    widths?: string[];
}

export function CategoriesTableHeader({
    table,
    widths = [
        "w-[80px]",
        "w-[200px]",
        "w-[220px]",
        "w-[120px]",
        "w-[120px]",
        "w-[120px]",
        "w-[120px]",
        "w-[10px]",
        "w-[10px]",
        "w-full	",
    ],
}: CategoriesTableHeaderProps) {
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
