import { HTTPSuccessResponse, HTTPErrorResponse } from "@/@types/http";
import { AxiosError } from "axios";
import { api } from "@/services/axios";
import { Type } from "@/@types/admin/type";
import { GetTypesRequest } from "@/@schemas/type";

type GetTypesResponse = HTTPSuccessResponse<Type[]> | HTTPErrorResponse;

export async function getTypes(
	request?: GetTypesRequest
): Promise<GetTypesResponse> {
	try {
		const response = await api.get<HTTPSuccessResponse<Type[]>>("/types", {
			params: request,
		});

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
