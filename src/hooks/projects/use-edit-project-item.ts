import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { z } from "zod";
import type {
	HTTPErrorResponse,
	HTTPSuccessResponse,
} from "@/@types/http/http";
import { api } from "@/services/axios";
import { queryClient } from "@/services/react-query";

const editProjectItemResponseSchema = z.object({
	success: z.literal(true),
	errors: z.null(),
	data: z.null(),
});

type EditProjectItemResponse = HTTPSuccessResponse<null> | HTTPErrorResponse;

interface EditProjectItemParams {
	projectId: string;
	requestedItemId: string;
	quantity: number;
	allocationDepartmentId: string;
	maintenanceContractId: string;
}

const editProjectItem = async ({
	projectId,
	requestedItemId,
	quantity,
	allocationDepartmentId,
	maintenanceContractId,
}: EditProjectItemParams): Promise<void> => {
	const response = await api.patch<EditProjectItemResponse>(
		`/projects/${projectId}/requested-item/${requestedItemId}`,
		{
			quantity,
			allocationDepartmentId,
			maintenanceContractId,
		}
	);

	editProjectItemResponseSchema.parse(response.data);
};

export const useEditProjectItem = () => {
	const [isEditProjectItemDialogOpen, setIsEditProjectItemDialogOpen] =
		useState(false);

	const {
		mutateAsync: editProjectItemFn,
		isPending: isLoadingEditProjectItem,
	} = useMutation({
		mutationFn: editProjectItem,
		onSuccess: (_, { projectId }) => {
			queryClient.invalidateQueries({
				queryKey: ["get-project-by-id", projectId],
			});
		},
	});

	return {
		editProjectItemFn,
		isLoadingEditProjectItem,
		isEditProjectItemDialogOpen,
		setIsEditProjectItemDialogOpen,
	};
};
