"use client";
import * as React from "react";
import {
    ColumnFiltersState,
    SortingState,
    VisibilityState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table";
import { ChevronDown, PlusIcon, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { categoriesTableColumns } from "./categories-table-columns"; 
import { SearchInput } from "@/components/ui/search-input";
import { categoriesMock } from "@/mocks/admin/categories/categories"; 
import { translateCategoriesTableKeys } from "@/utils/translate-categories-table-keys"; 
import { useGetCategories } from "@/hooks/admin/categories/use-get-categories"; 
import { CategoriesTableBodySkeleton } from "./categories-table-body-skeleton"; 
import { CategoriesTableHeader } from "./categories-table-header"; 
import { AddCategoryForm } from "./add-category-form"; 
import { Dialog,
    DialogTrigger,
    DialogContent

 } from "@/components/ui/dialog";

export function CategoriesTable() {
    const [sorting, setSorting] = React.useState<SortingState>([
        {
            id: "createdAt",
            desc: true, 
        },
    ]);
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
        []
    );
    const [columnVisibility, setColumnVisibility] =
        React.useState<VisibilityState>({});
    const [rowSelection, setRowSelection] = React.useState({});
    const { categories, isLoadingGetCategories } = useGetCategories();

    const data = categoriesMock;

    const table = useReactTable({
        data: categories,
        columns: categoriesTableColumns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        },
    });

    return (
        <div className="w-full space-y-4 bg-white p-4 border border-muted rounded-lg">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:flex items-center gap-4">
                <SearchInput
                    className="w-full xl:w-[400px]"
                    placeholder="Pesquisar categorias..."
                    value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
                    onChange={(event) =>
                        table.getColumn("title")?.setFilterValue(event.target.value)
                    }
                />

                <Button
                    variant="secondary"
                    className="font-semibold"
                    onClick={() => [table.resetSorting(), table.resetColumnFilters()]}
                >
                    <X />
                    Limpar Filtros
                </Button>

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="outline"
                            className="font-semibold md:ml-auto w-full xl:w-[100px]"
                        >
                            <div className="flex items-center gap-2">
                                Exibir <ChevronDown />
                            </div>
                        </Button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent align="end">
                        {table
                            .getAllColumns()
                            .filter((column) => column.getCanHide())
                            .map((column) => {
                                return (
                                    <DropdownMenuCheckboxItem
                                        key={column.id}
                                        className="capitalize"
                                        checked={column.getIsVisible()}
                                        onCheckedChange={(value) =>
                                            column.toggleVisibility(!!value)
                                        }
                                    >
                                        {translateCategoriesTableKeys(column.id)}
                                    </DropdownMenuCheckboxItem>
                                );
                            })}
                    </DropdownMenuContent>
                </DropdownMenu>

             
                <Dialog>
                    <DialogTrigger asChild>
                        <Button className="font-semibold">
                            <PlusIcon className="mr-2 h-4 w-4" />
                            Adicionar Categoria
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-md max-h-[60vh] overflow-y-auto">
                        <AddCategoryForm />
                    </DialogContent>
                </Dialog>
            </div>

            
            <div>
                <Table className="overflow-x-scroll">
                    <CategoriesTableHeader table={table} />

                    <TableBody>
                        {!isLoadingGetCategories &&
                            data.length > 0 &&
                            table.getRowModel().rows?.length > 0 &&
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                    className="border-none"
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))}

                        {isLoadingGetCategories ||
                            ((!data ||
                                data.length === 0 ||
                                table.getRowModel().rows?.length === 0) && (
                                <TableRow>
                                    <TableCell
                                        colSpan={categoriesTableColumns.length}
                                        className="h-24 text-center"
                                    >
                                        Sem resultados
                                    </TableCell>
                                </TableRow>
                            ))}

                        {isLoadingGetCategories && <CategoriesTableBodySkeleton />}
                    </TableBody>
                </Table>
            </div>

            <div className="flex items-center justify-end space-x-2">
                <div className="flex-1 text-sm text-muted-foreground">
                    {table.getFilteredSelectedRowModel().rows.length} de{" "}
                    {table.getFilteredRowModel().rows.length} linha(s) selecionada(s).
                </div>

                <div className="space-x-2">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                        Anterior
                    </Button>

                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                    >
                        Próximo
                    </Button>
                </div>
            </div>
        </div>
    );
}