import { HTTPSuccessResponse, HTTPErrorResponse } from "@/@types/http/http";
import { AxiosError } from "axios";
import { api } from "@/services/axios";
import { GetMunipality } from "@/@types/municipality/municipality"; //mudar esse nome

type GetMunicipalityResponse =
	| HTTPSuccessResponse<GetMunipality>
	| HTTPErrorResponse;

export async function getMunicipality(): Promise<GetMunicipalityResponse> {
	try {
		const response =
			await api.get<HTTPSuccessResponse<GetMunipality>>("/municipality");

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
