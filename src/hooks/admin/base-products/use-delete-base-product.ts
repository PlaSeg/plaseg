import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBaseProduct } from "@/api/admin/base-products/delete-base-product";
import { toast } from "sonner";

export function useDeleteBaseProduct() {
	const queryClient = useQueryClient();

	const { mutate: deleteBaseProductFn, isPending: isLoadingDeleteBaseProduct } =
		useMutation({
			mutationFn: deleteBaseProduct,
			onSuccess: (response) => {
				if (response.success) {
					queryClient.invalidateQueries({ queryKey: ["baseProducts"] });
					toast.success("Produto base excluído com sucesso!");
					return;
				}

				response.errors.forEach((error) => {
					toast.error(error);
				});
			},
		});

	return { deleteBaseProductFn, isLoadingDeleteBaseProduct };
}
