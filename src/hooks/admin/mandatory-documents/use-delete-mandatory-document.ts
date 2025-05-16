import { deleteMandatoryDocument } from "@/api/admin/mandatory-documents/delete-mandatory-document";
import { queryClient } from "@/services/react-query";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";

export function useDeleteMandatoryDocument() {
	const [isDeleteMandatoryDocumentOpen, setIsDeleteMandatoryDocumentOpen] =
		useState(false);
	const {
		mutate: deleteMandatoryDocumentFn,
		isPending: isDeletingMandatoryDocument,
	} = useMutation({
		mutationKey: ["delete-mandatory-document"],
		mutationFn: deleteMandatoryDocument,
		onSuccess: (response) => {
			if (response.success) {
				queryClient.invalidateQueries({
					queryKey: ["mandatory-document"],
				});
				return;
			}

			response.errors.forEach((error) => {
				toast.error(error);
			});
		},
	});

	return {
		deleteMandatoryDocumentFn,
		isDeletingMandatoryDocument,
		isDeleteMandatoryDocumentOpen,
		setIsDeleteMandatoryDocumentOpen,
	};
}
