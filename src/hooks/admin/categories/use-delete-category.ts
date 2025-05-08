import { deleteCategory} from "@/api/admin/categories/delete-category";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "@/services/react-query";
import { toast } from "sonner";

export function useDeleteCategory() {
	const { mutate: deleteCategoryFn, isPending: isLoadingDeleteCategory} =
		useMutation({
			mutationKey: ["delete-category"],
			mutationFn: deleteCategory,
			onSuccess: (response) => {
				if (response.success) {
					queryClient.invalidateQueries({
						queryKey: ["categories"],
					});
					toast.success("Categoria excluída com sucesso!");
					return;
				}

				response.errors.forEach((error) => {
					toast.error(error);
				});
			},
		});

	return {
		deleteCategoryFn,
		isLoadingDeleteCategory,
	};
}
