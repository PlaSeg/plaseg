import { HTTPErrorResponse, HTTPSuccessResponse } from "@/@types/http/http";
import { api } from "@/services/axios";
import { AxiosError } from "axios";

type RegisterCompanyRequest = {
	cnpj: string;
	legalName: string;
	tradeName: string;
	address: string;
	email: string;
	phone: string;
	site: string;
	portfolioDescription: string;
};

type RegisterCompanyResponse = HTTPSuccessResponse<null> | HTTPErrorResponse;

export async function registerCompany(request: RegisterCompanyRequest): Promise<RegisterCompanyResponse> {
	try {
		const response = await api.post<HTTPSuccessResponse<null>>(
			"/company",
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
