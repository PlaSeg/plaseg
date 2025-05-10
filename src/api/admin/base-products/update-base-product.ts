import { HTTPSuccessResponse, HTTPErrorResponse } from "@/@types/http";
import { AxiosError } from "axios";
import { api } from "@/services/axios";
import { UpdateBaseProductRequestSchema } from "@/@schemas/base-product";
import { BaseProduct } from "@/@types/base-product";

type UpdateBaseProductResponse =
	| HTTPSuccessResponse<BaseProduct>
	| HTTPErrorResponse;

/**
 * @description Atualiza um produto base
 * @param id ID do produto base
 * @param request Dados para atualização
 * @returns
 */
export async function updateBaseProduct(
	id: string,
	request: UpdateBaseProductRequestSchema
): Promise<UpdateBaseProductResponse> {
	try {
		const response = await api.put<HTTPSuccessResponse<BaseProduct>>(
			`/products/base-products/${id}`,
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
