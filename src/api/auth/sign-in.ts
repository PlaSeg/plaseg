import { HTTPErrorResponse, HTTPSuccessResponse } from "@/@types/http";
import { api } from "@/lib/axios";
import { AxiosError } from "axios";

interface SignInRequest {
	cpf_cnpj: string;
	password: string;
}

interface SignInSuccessResponse extends HTTPSuccessResponse {
	data: {
		token: string;
		token_type: string;
		exp: number;
	};
}

type SignInResponse = SignInSuccessResponse | HTTPErrorResponse;

export async function signIn(
	credentials: SignInRequest
): Promise<SignInResponse> {
	try {
		const response = await api.post<SignInSuccessResponse>(
			"/auth/sign-in",
			credentials
		);

		return response.data;
	} catch (error) {
		if (error instanceof AxiosError && error.response?.data) {
			return error.response.data;
		}

		return {
			success: false,
			error: "Erro desconhecido",
			data: null,
		};
	}
}
