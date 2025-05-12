import { deleteType } from "@/api/admin/types/delete-type";
import { queryClient } from "@/services/react-query";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";

export function useDeleteType() {
	const [isDeleteTypeDialogOpen, setIsDeleteTypeDialogOpen] = useState(false);
	const { mutate: deleteTypeFn, isPending: isDeletingType } = useMutation({
		mutationKey: ["delete-type"],
		mutationFn: deleteType,
		onSuccess: (response) => {
			if (response.success) {
				queryClient.invalidateQueries({
					queryKey: ["types"],
				});
				return;
			}

			response.errors.forEach((error) => {
				toast.error(error);
			});
		},
	});

	return {
		deleteTypeFn,
		isDeletingType,
		isDeleteTypeDialogOpen,
		setIsDeleteTypeDialogOpen,
	};
}
