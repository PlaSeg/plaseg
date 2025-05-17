import { HTTPSuccessResponse, HTTPErrorResponse } from "@/@types/http/http";
import { AxiosError } from "axios";
import { api } from "@/services/axios";
import { ProductApi } from "@/@types/company/product";

type GetProductsResponse =
	| HTTPSuccessResponse<ProductApi[]>
	| HTTPErrorResponse;

export async function getProducts(): Promise<GetProductsResponse> {
	try {
		// await new Promise((resolve) => setTimeout(resolve, 2000));

		const response =
			await api.get<HTTPSuccessResponse<ProductApi[]>>("/company/products");

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
