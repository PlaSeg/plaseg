import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import type {
	HTTPErrorResponse,
	HTTPSuccessResponse,
} from "@/@types/http/http";
import { api } from "@/services/axios";
import { queryClient } from "@/services/react-query";

const acceptFieldValueSuggestionResponseSchema = z.object({
	success: z.literal(true),
	errors: z.null(),
	data: z.null(),
});

type AcceptFieldValueSuggestionResponse =
	| HTTPSuccessResponse<string>
	| HTTPErrorResponse;

interface AcceptFieldValueSuggestionParams {
	projectId: string;
	fieldId: string;
	documentId: string;
}

const acceptFieldValueSuggestion = async ({
	projectId,
	fieldId,
}: Omit<AcceptFieldValueSuggestionParams, "documentId">): Promise<void> => {
	const response = await api.patch<AcceptFieldValueSuggestionResponse>(
		`/projects/${projectId}/document/field/${fieldId}/ready`
	);

	acceptFieldValueSuggestionResponseSchema.parse(response.data);
};

export const useAcceptFieldValueSuggestion = () => {
	const {
		mutateAsync: acceptFieldValueSuggestionFn,
		isPending: isLoadingAcceptFieldValueSuggestion,
	} = useMutation({
		mutationFn: (
			acceptFieldValueSuggestionParams: AcceptFieldValueSuggestionParams
		) => acceptFieldValueSuggestion(acceptFieldValueSuggestionParams),
		onSuccess: (_, { projectId, documentId }) => {
			queryClient.invalidateQueries({
				queryKey: ["get-project-document-by-id", projectId, documentId],
			});
			queryClient.invalidateQueries({
				queryKey: ["get-project-by-id", projectId],
			});
		},
	});

	return {
		acceptFieldValueSuggestionFn,
		isLoadingAcceptFieldValueSuggestion,
	};
};
