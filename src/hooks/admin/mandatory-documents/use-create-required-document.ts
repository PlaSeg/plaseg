import { createRequiredDocument } from "@/api/admin/mandatory-documents/create-required-document";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "@/services/react-query";
import { toast } from "sonner";
import { useState } from "react";
import { createRequiredDocumentSchema } from "@/@schemas/required-document";
import { useFormMutation } from "@/hooks/use-form-mutation";

export function useCreateRequiredDocument() {
	const [
		isCreateRequiredDocumentSheetOpen,
		setIsCreateRequiredDocumentSheetOpen,
	] = useState(false);

	const form = useFormMutation({
		schema: createRequiredDocumentSchema,
		defaultValues: {
			name: "",
			description: "",
			model: "",
		},
		onSubmit: (data) => {
			createRequiredDocumentFn(data);
		},
	});

	const {
		mutate: createRequiredDocumentFn,
		isPending: isAddingRequiredDocument,
	} = useMutation({
		mutationKey: ["create-mandatory-document"],
		mutationFn: createRequiredDocument,
		onSuccess: (response) => {
			if (response.success) {
				queryClient.invalidateQueries({
					queryKey: ["get-required-documents"],
				});
				form.reset();
				setIsCreateRequiredDocumentSheetOpen(false);
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
		isAddingRequiredDocument,
		isCreateRequiredDocumentSheetOpen,
		setIsCreateRequiredDocumentSheetOpen,
	};
}
