import { HTTPErrorResponse, HTTPSuccessResponse } from "@/@types/http";
import { api } from "@/services/axios";
import { AxiosError } from "axios";

interface SignInRequest {
	// document: string;
	email: string;
	password: string;
}

interface SignInResponseData {
	token: string;
	token_type: string;
	exp: number;
}

type SignInResponse =
	| HTTPSuccessResponse<SignInResponseData>
	| HTTPErrorResponse;

export async function signIn(
	credentials: SignInRequest
): Promise<SignInResponse> {
	try {
		const response = await api.post<SignInResponse>(
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
			errors: ["Erro desconhecido"],
			data: null,
		};
	}
}
