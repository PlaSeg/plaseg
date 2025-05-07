import { updateCategoryStatus } from "@/api/admin/categories/update-category-status";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "@/services/react-query";
import { toast } from "sonner";

export function useUpdateCategoryStatus() {
	const {
		mutate: updateCategoryStatusFn,
		isPending: isLoadingUpdateCategoryStatus,
	} = useMutation({
		mutationKey: ["update-category-status"],
		mutationFn: ({
			categoryId,
			status,
		}: {
			categoryId: string;
			status: boolean;
		}) => updateCategoryStatus(categoryId, status),
		onSuccess: (response) => {
			if (response.success) {
				queryClient.invalidateQueries({
					queryKey: ["categories"],
				});
				toast.success("Status da categoria atualizado com sucesso!");
				return;
			}

			response.errors.forEach((error) => {
				toast.error(error);
			});
		},
	});

	return {
		updateCategoryStatusFn,
		isLoadingUpdateCategoryStatus,
	};
}
