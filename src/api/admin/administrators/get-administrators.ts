import { HTTPSuccessResponse, HTTPErrorResponse } from "@/@types/http";
import { AxiosError } from "axios";
import { api } from "@/services/axios";
import { User } from "@/@types/user";

type GetAdministratorsResponse =
	| HTTPSuccessResponse<{ administrators: User[] }>
	| HTTPErrorResponse;

export async function getAdministrators(): Promise<GetAdministratorsResponse> {
	try {
		const response =
			await api.get<HTTPSuccessResponse<{ administrators: User[] }>>(
				"/administrators"
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
