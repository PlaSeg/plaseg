import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowDown, ArrowUp, Copy, MoreHorizontal } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { translateCategoriesTableKeys } from "@/utils/translate-categories-table-keys"; 
import { Switch } from "@/components/ui/switch";
import { Category } from "@/@types/category";
import { formatDate } from "@/utils/format-date";
import { DeleteCategoryDialog } from "./delete-category-dialog"; //
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { useUpdateCategoryStatus } from "@/hooks/admin/categories/use-update-category-status"; //

interface StatusSwitchProps {
    categoryId: string;
    isActive: boolean;
}

function StatusSwitch({ categoryId, isActive }: StatusSwitchProps) {
    const { updateCategoryStatusFn, isLoadingUpdateCategoryStatus } =
        useUpdateCategoryStatus();

    return (
        <Switch
            checked={isActive}
            onCheckedChange={() =>
                updateCategoryStatusFn({
                    categoryId,
                    status: !isActive,
                })
            }
            disabled={isLoadingUpdateCategoryStatus}
            className="data-[state=checked]:bg-green-500"
        />
    );
}

export const categoriesTableColumns: ColumnDef<Category>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "id",
        header: ({ column }) => (
            <Button
                variant="ghost"
                className="!p-0 hover:bg-transparent"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
                {translateCategoriesTableKeys("id")}
                {column.getIsSorted() !== "desc" && (
                    <ArrowUp className="ml-2 h-4 w-4" />
                )}
                {column.getIsSorted() === "desc" && (
                    <ArrowDown className="ml-2 h-4 w-4" />
                )}
            </Button>
        ),
        cell: ({ row }) => (
            <div className="capitalize font-semibold">{row.getValue("title")}</div>//
        ),
    },
    {
        accessorKey: "code",
        header: ({ column }) => (
            <Button
                variant="ghost"
                className="!p-0 hover:bg-transparent"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
                {translateCategoriesTableKeys("code")}
                {column.getIsSorted() !== "desc" && (
                    <ArrowUp className="ml-2 h-4 w-4" />
                )}
                {column.getIsSorted() === "desc" && (
                    <ArrowDown className="ml-2 h-4 w-4" />
                )}
            </Button>
        ),
        
    },
    {
        accessorKey: "name",
        header: ({ column }) => (
            <Button
                variant="ghost"
                className="!p-0 hover:bg-transparent"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
                {translateCategoriesTableKeys("name")}
                {column.getIsSorted() !== "desc" && (
                    <ArrowUp className="ml-2 h-4 w-4" />
                )}
                {column.getIsSorted() === "desc" && (
                    <ArrowDown className="ml-2 h-4 w-4" />
                )}
            </Button>
        ),
        cell: ({ row }) => <div>{formatDate(row.getValue("name"))}</div>,
        sortingFn: "datetime",
    },
    {
        accessorKey: "updatedAt",
        header: ({ column }) => (
            <Button
                variant="ghost"
                className="!p-0 hover:bg-transparent"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
                {translateCategoriesTableKeys("updatedAt")}
                {column.getIsSorted() !== "desc" && (
                    <ArrowUp className="ml-2 h-4 w-4" />
                )}
                {column.getIsSorted() === "desc" && (
                    <ArrowDown className="ml-2 h-4 w-4" />
                )}
            </Button>
        ),
        cell: ({ row }) => {
            const currentDate = new Date();
            const updatedAt = row.getValue("updatedAt") as string;
            const [day, month, year] = updatedAt.split("/").map(Number);
            const parsedUpdateAtDate = new Date(year, month - 1, day);
            const isExpired = currentDate > parsedUpdateAtDate;

            return (
                <div className={`${isExpired ? "text-red-500 font-medium" : ""}`}>
                    {formatDate(updatedAt)}
                </div>
            );
        },
    },
    {
        accessorKey: "createdAt",
        header: ({ column }) => (
            <Button
                variant="ghost"
                className="!p-0 hover:bg-transparent"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
                {translateCategoriesTableKeys("createdAt")}
                {column.getIsSorted() !== "desc" && (
                    <ArrowUp className="ml-2 h-4 w-4" />
                )}
                {column.getIsSorted() === "desc" && (
                    <ArrowDown className="ml-2 h-4 w-4" />
                )}
            </Button>

            //
        ),
       
    },
    
    {
        id: "actions",
        header: "Ações",
        cell: ({ row }) => {
            const category = row.original;

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Abrir menu</span>

                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent align="end">
                        <DropdownMenuItem
                            onClick={() => navigator.clipboard.writeText(category.id)}
                        >
                            <Copy />
                            Copiar ID
                        </DropdownMenuItem>

                    </DropdownMenuContent>
                </DropdownMenu>
            );
        },
    },
];
