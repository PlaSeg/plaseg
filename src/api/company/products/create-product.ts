import { HTTPSuccessResponse, HTTPErrorResponse } from "@/@types/http";
import { AxiosError } from "axios";
import { api } from "@/services/axios";
import { CreateProductRequest, Product } from "@/@types/company/product";

type CreateProductResponse = HTTPSuccessResponse<Product> | HTTPErrorResponse;

/**
 * Creates a new product
 * @param createProductRequest The product data to create
 * @returns Promise with the created product or error
 */
export async function createProduct(
	createProductRequest: CreateProductRequest
): Promise<CreateProductResponse> {
	try {
		const response = await api.post<HTTPSuccessResponse<Product>>(
			"/company/products",
			createProductRequest
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
