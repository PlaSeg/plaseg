import { HTTPSuccessResponse, HTTPErrorResponse } from "@/@types/http";
import { AxiosError } from "axios";
import { api } from "@/services/axios";

type DeleteOpportunityResponse = HTTPSuccessResponse<null> | HTTPErrorResponse;

export async function deleteOpportunity(
	id: string
): Promise<DeleteOpportunityResponse> {
	try {
		const response = await api.delete<HTTPSuccessResponse<null>>(
			`/admin/opportunities/${id}`
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
