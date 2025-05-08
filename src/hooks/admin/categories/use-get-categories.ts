import { getCategories } from "@/api/admin/categories/get-categories";
import { useQuery } from "@tanstack/react-query";

export function useGetCategories() {
    const { data: result, isLoading: isLoadingGetCategories } = useQuery({
        queryKey: ["categories"],
        queryFn: getCategories,
    });

    return {
        categories: result?.success ? result.data : [],
        isLoadingGetCategories,
    };
}
