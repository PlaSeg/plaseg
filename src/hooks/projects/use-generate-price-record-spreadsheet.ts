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

type GeneratePriceRecordSpreadsheetResponse =
	| HTTPSuccessResponse<null>
	| HTTPErrorResponse;

interface GeneratePriceRecordSpreadsheetParams {
	projectId: string;
}

const generatePriceRecordSpreadsheet = async ({
	projectId,
}: GeneratePriceRecordSpreadsheetParams): Promise<GeneratePriceRecordSpreadsheetResponse> => {
	try {
		const response = await api.patch<GeneratePriceRecordSpreadsheetResponse>(
			`/projects/${projectId}/document/price-survey-spreadsheet`
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

export const useGeneratePriceRecordSpreadsheet = (projectId: string) => {
	const [isConfirmationDialogOpen, setIsConfirmationDialogOpen] =
		useState(false);

	const {
		mutateAsync: generatePriceRecordSpreadsheetFn,
		isPending: isLoadingGeneratePriceRecordSpreadsheet,
	} = useMutation({
		mutationFn: (
			generatePriceRecordSpreadsheetParams: GeneratePriceRecordSpreadsheetParams
		) => generatePriceRecordSpreadsheet(generatePriceRecordSpreadsheetParams),
		onSuccess: (response) => {
			if (response.success) {
				queryClient.invalidateQueries({
					queryKey: ["get-project-by-id", projectId],
				});
				queryClient.invalidateQueries({
					queryKey: ["get-project-document-by-id", projectId],
				});
				setIsConfirmationDialogOpen(false);
				toast.success("Planilha de levantamento de preços gerada com sucesso!");
				return;
			}

			response.errors.forEach((error) => {
				toast.error(error);
			});
		},
	});

	return {
		generatePriceRecordSpreadsheetFn,
		isLoadingGeneratePriceRecordSpreadsheet,
		isConfirmationDialogOpen,
		setIsConfirmationDialogOpen,
	};
};
