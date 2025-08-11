import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useState } from "react";
import { toast } from "sonner";
import type {
	HTTPErrorResponse,
	HTTPSuccessResponse,
} from "@/@types/http/http";
import { api } from "@/services/axios";
import { queryClient } from "@/services/react-query";

type GenerateExecutionScheduleDocumentResponse =
	| HTTPSuccessResponse<null>
	| HTTPErrorResponse;

interface GenerateExecutionScheduleDocumentParams {
	projectId: string;
}

const generateExecutionScheduleDocument = async ({
	projectId,
}: GenerateExecutionScheduleDocumentParams): Promise<GenerateExecutionScheduleDocumentResponse> => {
	try {
		const response = await api.patch<GenerateExecutionScheduleDocumentResponse>(
			`/projects/${projectId}/document/timeline`
		);

		return response.data;
	} catch (error) {
		if (error instanceof AxiosError && error.response?.data) {
			return error.response.data;
		}

		return {
			success: false,
			errors: ["Erro desconhecido"],
			data: null,
		};
	}
};

export const useGenerateExecutionScheduleDocument = (projectId: string) => {
	const [isConfirmationDialogOpen, setIsConfirmationDialogOpen] =
		useState(false);

	const {
		mutateAsync: generateExecutionScheduleDocumentFn,
		isPending: isLoadingGenerateExecutionScheduleDocument,
	} = useMutation({
		mutationFn: (
			generateExecutionScheduleDocumentParams: GenerateExecutionScheduleDocumentParams
		) =>
			generateExecutionScheduleDocument(
				generateExecutionScheduleDocumentParams
			),
		onSuccess: (response) => {
			if (response.success) {
				queryClient.invalidateQueries({
					queryKey: ["get-project-by-id", projectId],
				});
				queryClient.invalidateQueries({
					queryKey: ["get-project-document-by-id", projectId],
				});
				setIsConfirmationDialogOpen(false);
				toast.success("Documento de cronograma de execução gerado com sucesso!");
				return;
			}

			response.errors.forEach((error) => {
				toast.error(error);
			});
		},
	});

	return {
		generateExecutionScheduleDocumentFn,
		isLoadingGenerateExecutionScheduleDocument,
		isConfirmationDialogOpen,
		setIsConfirmationDialogOpen,
	};
};
