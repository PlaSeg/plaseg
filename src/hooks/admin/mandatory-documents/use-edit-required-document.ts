import { createRequiredDocument } from "@/api/admin/mandatory-documents/create-required-document";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "@/services/react-query";
import { toast } from "sonner";
import { useState } from "react";
import { createRequiredDocumentSchema } from "@/@schemas/required-document";
import { useFormMutation } from "@/hooks/common/use-form-mutation";
import { RequiredDocument } from "@/@types/admin/required-document";

export function useEditRequiredDocument(requiredDocument: RequiredDocument) {
	const [isEditRequiredDocumentSheetOpen, setIsEditRequiredDocumentSheetOpen] =
		useState(false);

	const form = useFormMutation({
		schema: createRequiredDocumentSchema,
		defaultValues: {
			name: requiredDocument.name,
			description: requiredDocument.description,
			model: requiredDocument.model,
		},
		onSubmit: (data) => {
			console.log(data);
		},
	});

	const { isPending: isEditingRequiredDocument } = useMutation({
		mutationKey: ["edit-required-document"],
		mutationFn: createRequiredDocument,
		onSuccess: (response) => {
			if (response.success) {
				queryClient.invalidateQueries({
					queryKey: ["get-required-documents"],
				});
				form.reset();
				setIsEditRequiredDocumentSheetOpen(false);
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
		isEditingRequiredDocument,
		isEditRequiredDocumentSheetOpen,
		setIsEditRequiredDocumentSheetOpen,
	};
}
