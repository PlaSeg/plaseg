import { HTTPSuccessResponse, HTTPErrorResponse } from "@/@types/http";
import { AxiosError } from "axios";
import { api } from "@/services/axios";

type DeleteMandatoryDocumentResponse =
	| HTTPSuccessResponse<null>
	| HTTPErrorResponse;

export async function deleteMandatoryDocument(
	id: string
): Promise<DeleteMandatoryDocumentResponse> {
	try {
		const response = await api.delete<HTTPSuccessResponse<null>>(
			`/mandatory-document/${id}`
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
