import { HTTPSuccessResponse, HTTPErrorResponse } from "@/@types/http";
import { AxiosError } from "axios";
import { api } from "@/services/axios";

type DeleteBaseProductResponse = HTTPSuccessResponse<null> | HTTPErrorResponse;

/**
 * @description Deleta um produto base
 * @param id ID do produto base
 * @returns
 */
export async function deleteBaseProduct(
	id: string
): Promise<DeleteBaseProductResponse> {
	try {
		const response = await api.delete<HTTPSuccessResponse<null>>(
			`/base-products/${id}`
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
