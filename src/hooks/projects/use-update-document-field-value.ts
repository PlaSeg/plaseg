import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { updateDocumentFieldValue } from "@/api/projects/update-document-field-value";
import { queryClient } from "@/services/react-query";

interface UseUpdateDocumentFieldValueProps {
	fieldId: string;
	onSuccess?: () => void;
}

export function useUpdateDocumentFieldValue({
	fieldId,
	onSuccess,
}: UseUpdateDocumentFieldValueProps) {
	const {
		mutateAsync: updateDocumentFieldValueFn,
		isPending: isLoadingUpdateDocumentFieldValue,
	} = useMutation({
		mutationFn: (value: string) => updateDocumentFieldValue(fieldId, { value }),
		onSuccess: (response) => {
			if (response.success) {
				toast.success("Campo atualizado com sucesso!");
				queryClient.invalidateQueries({
					queryKey: ["get-project-document-by-id"],
				});
				onSuccess?.();
				return;
			}

			response.errors.forEach((error) => {
				toast.error(error);
			});
		},
	});

	return {
		updateDocumentFieldValueFn,
		isLoadingUpdateDocumentFieldValue,
	};
}
