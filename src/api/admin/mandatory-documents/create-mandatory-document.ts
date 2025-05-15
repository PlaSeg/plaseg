import { HTTPSuccessResponse, HTTPErrorResponse } from "@/@types/http";
import { AxiosError } from "axios";
import { api } from "@/services/axios";
import { CreateMandatoryDocumentRequest } from "@/@schemas/mandatory-documents";

type CreateMandatoryDocumentResponse =
	| HTTPSuccessResponse<null>
	| HTTPErrorResponse;

/**
 * @description Adiciona um documento obrigatório
 * @param request
 * @returns
 */
export async function createMandatoryDocument(
	request: CreateMandatoryDocumentRequest //
): Promise<CreateMandatoryDocumentResponse> {
	try {
		const response = await api.post<HTTPSuccessResponse<null>>(
			"/mandatory-documents",
			request
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
}
