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

type GenerateSustainabilityDocumentResponse =
	| HTTPSuccessResponse<null>
	| HTTPErrorResponse;

interface GenerateSustainabilityDocumentParams {
	projectId: string;
}

const generateSustainabilityDocument = async ({
	projectId,
}: GenerateSustainabilityDocumentParams): Promise<GenerateSustainabilityDocumentResponse> => {
	try {
		const response = await api.patch<GenerateSustainabilityDocumentResponse>(
			`/projects/${projectId}/document/sustainability-location`
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

export const useGenerateSustainabilityDocument = (projectId: string) => {
	const [isConfirmationDialogOpen, setIsConfirmationDialogOpen] =
		useState(false);
	const {
		mutateAsync: generateSustainabilityDocumentFn,
		isPending: isLoadingGenerateSustainabilityDocument,
	} = useMutation({
		mutationFn: (
			generateSustainabilityDocumentParams: GenerateSustainabilityDocumentParams
		) => generateSustainabilityDocument(generateSustainabilityDocumentParams),
		onSuccess: (response) => {
			if (response.success) {
				queryClient.invalidateQueries({
					queryKey: ["get-project-by-id", projectId],
				});
				queryClient.invalidateQueries({
					queryKey: ["get-project-document-by-id", projectId],
				});
				setIsConfirmationDialogOpen(false);
				toast.success("Documento de sustentabilidade gerado com sucesso!");
				return;
			}

			response.errors.forEach((error) => {
				toast.error(error);
			});
		},
	});

	return {
		generateSustainabilityDocumentFn,
		isLoadingGenerateSustainabilityDocument,
		isConfirmationDialogOpen,
		setIsConfirmationDialogOpen,
	};
};
