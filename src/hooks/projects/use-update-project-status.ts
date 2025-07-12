import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import type {
	HTTPErrorResponse,
	HTTPSuccessResponse,
} from "@/@types/http/http";
import { api } from "@/services/axios";
import { queryClient } from "@/services/react-query";

const updateProjectStatusResponseSchema = z.object({
	success: z.literal(true),
	errors: z.null(),
	data: z.null(),
});

type UpdateProjectStatusResponse =
	| HTTPSuccessResponse<null>
	| HTTPErrorResponse;

interface UpdateProjectStatusParams {
	projectId: string;
}

const updateProjectStatus = async ({
	projectId,
}: UpdateProjectStatusParams): Promise<void> => {
	const response = await api.patch<UpdateProjectStatusResponse>(
		`/projects/${projectId}/is-active`
	);

	updateProjectStatusResponseSchema.parse(response.data);
};

export const useUpdateProjectStatus = () => {
	const {
		mutateAsync: updateProjectStatusFn,
		isPending: isLoadingUpdateProjectStatus,
	} = useMutation({
		mutationFn: updateProjectStatus,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["get-projects"],
			});
		},
	});

	return {
		updateProjectStatusFn,
		isLoadingUpdateProjectStatus,
	};
};
