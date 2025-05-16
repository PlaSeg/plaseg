import { createMandatoryDocument } from "@/api/admin/mandatory-documents/create-mandatory-document";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "@/services/react-query";
import { toast } from "sonner";
import { useState } from "react";
import { createMandatoryDocumentSchema } from "@/@schemas/mandatory-documents";
import { useFormMutation } from "@/hooks/use-form-mutation";

export function useCreateMandatoryDocument() {
	const [isCreateDocumentSheetOpen, setIsCreateDocumentSheetOpen] =
		useState(false);

	const form = useFormMutation({
		schema: createMandatoryDocumentSchema,
		defaultValues: {
			name: "",
			description: "",
			model: "",
		},
		onSubmit: (data) => {
			createMandatoryDocumentFn(data);
		},
	});

	const {
		mutate: createMandatoryDocumentFn,
		isPending: isAddingMandatoryDocument,
	} = useMutation({
		mutationKey: ["create-mandatory-document"],
		mutationFn: createMandatoryDocument,
		onSuccess: (response) => {
			if (response.success) {
				queryClient.invalidateQueries({
					queryKey: ["mandatory-document"],
				});

				form.reset();
				setIsCreateDocumentSheetOpen(false);
				toast.success("Documento obrigatório adicionado com sucesso!");
				return;
			}

			response.errors.forEach((error) => {
				toast.error(error);
			});
		},
	});

	return {
		form,
		isAddingMandatoryDocument,
		isCreateDocumentSheetOpen,
		setIsCreateDocumentSheetOpen,
	};
}
