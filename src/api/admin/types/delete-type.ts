import { HTTPSuccessResponse, HTTPErrorResponse } from "@/@types/http";
import { AxiosError } from "axios";
import { api } from "@/services/axios";

type DeleteTypeResponse = HTTPSuccessResponse<null> | HTTPErrorResponse;

export async function deleteType(id: string): Promise<DeleteTypeResponse> {
	try {
		const response = await api.delete<HTTPSuccessResponse<null>>(
			`/types/${id}`
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
