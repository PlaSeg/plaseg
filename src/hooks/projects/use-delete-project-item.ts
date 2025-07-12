import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import type {
	HTTPErrorResponse,
	HTTPSuccessResponse,
} from "@/@types/http/http";
import { api } from "@/services/axios";
import { queryClient } from "@/services/react-query";

const deleteProjectItemResponseSchema = z.object({
	success: z.literal(true),
	errors: z.null(),
	data: z.null(),
});

type DeleteProjectItemResponse = HTTPSuccessResponse<null> | HTTPErrorResponse;

interface DeleteProjectItemParams {
	projectId: string;
	requestedItemId: string;
}

const deleteProjectItem = async ({
	projectId,
	requestedItemId,
}: DeleteProjectItemParams): Promise<void> => {
	const response = await api.delete<DeleteProjectItemResponse>(
		`/projects/${projectId}/requested-item/${requestedItemId}`
	);

	deleteProjectItemResponseSchema.parse(response.data);
};

export const useDeleteProjectItem = () => {
	const {
		mutateAsync: deleteProjectItemFn,
		isPending: isLoadingDeleteProjectItem,
	} = useMutation({
		mutationFn: deleteProjectItem,
		onSuccess: (_, { projectId }) => {
			queryClient.invalidateQueries({
				queryKey: ["get-project-by-id", projectId],
			});
		},
	});

	return {
		deleteProjectItemFn,
		isLoadingDeleteProjectItem,
	};
};
