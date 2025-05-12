import { useMutation } from "@tanstack/react-query";
import { deleteBaseProduct } from "@/api/admin/base-products/delete-base-product";
import { toast } from "sonner";
import { useState } from "react";
import { queryClient } from "@/services/react-query";

export function useDeleteBaseProduct() {
	const [isDeleteBaseProductDialogOpen, setIsDeleteBaseProductDialogOpen] =
		useState(false);

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

	return {
		deleteBaseProductFn,
		isLoadingDeleteBaseProduct,
		isDeleteBaseProductDialogOpen,
		setIsDeleteBaseProductDialogOpen,
	};
}
