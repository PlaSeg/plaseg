import { HTTPSuccessResponse, HTTPErrorResponse } from "@/@types/http";
import { AxiosError } from "axios";
import { api } from "@/services/axios";
import { MandatoryDocuments } from "@/@types/admin/mandatory-documents";
import { GetMandatoryDocumentsRequest } from "@/@schemas/mandatory-documents";

type GetMandatoryDocumentsResponse =
	| HTTPSuccessResponse<MandatoryDocuments[]>
	| HTTPErrorResponse;

export async function getMandatoryDocuments(
	request?: GetMandatoryDocumentsRequest
): Promise<GetMandatoryDocumentsResponse> {
	try {
		const response = await api.get<HTTPSuccessResponse<MandatoryDocuments[]>>(
			"/mandatory-documents",
			{
				params: request,
			}
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
