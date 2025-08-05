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

type GenerateTermsOfReferenceDocumentResponse =
	| HTTPSuccessResponse<null>
	| HTTPErrorResponse;

interface GenerateTermsOfReferenceDocumentParams {
	projectId: string;
}

const generateTermsOfReferenceDocument = async ({
	projectId,
}: GenerateTermsOfReferenceDocumentParams): Promise<GenerateTermsOfReferenceDocumentResponse> => {
	try {
		const response = await api.patch<GenerateTermsOfReferenceDocumentResponse>(
			`/projects/${projectId}/document/terms-of-reference`
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

export const useGenerateTermsOfReferenceDocument = (projectId: string) => {
	const [isConfirmationDialogOpen, setIsConfirmationDialogOpen] =
		useState(false);
	const {
		mutateAsync: generateTermsOfReferenceDocumentFn,
		isPending: isLoadingGenerateTermsOfReferenceDocument,
	} = useMutation({
		mutationFn: (
			generateTermsOfReferenceDocumentParams: GenerateTermsOfReferenceDocumentParams
		) =>
			generateTermsOfReferenceDocument(generateTermsOfReferenceDocumentParams),
		onSuccess: (response) => {
			if (response.success) {
				queryClient.invalidateQueries({
					queryKey: ["get-project-by-id", projectId],
				});
				queryClient.invalidateQueries({
					queryKey: ["get-project-document-by-id", projectId],
				});
				setIsConfirmationDialogOpen(false);
				toast.success("Documento gerado com sucesso!");
				return;
			}

			response.errors.forEach((error) => {
				toast.error(error);
			});
		},
	});

	return {
		generateTermsOfReferenceDocumentFn,
		isLoadingGenerateTermsOfReferenceDocument,
		isConfirmationDialogOpen,
		setIsConfirmationDialogOpen,
	};
};
