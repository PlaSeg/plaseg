import { HTTPSuccessResponse, HTTPErrorResponse } from "@/@types/http";
import { AxiosError } from "axios";
import { api } from "@/services/axios";
import { Type } from "@/@types/type";

type GetTypesResponse = HTTPSuccessResponse<Type[]> | HTTPErrorResponse;

export async function getTypes(): Promise<GetTypesResponse> {
	try {
		const response = await api.get<HTTPSuccessResponse<Type[]>>("/types");

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
