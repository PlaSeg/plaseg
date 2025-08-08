import { AxiosError } from "axios";
import type { CreateAdministratorRequest } from "@/@schemas/administrator";
import type {
	HTTPErrorResponse,
	HTTPSuccessResponse,
} from "@/@types/http/http";
import { api } from "@/services/axios";

type CreateAdministratorResponse =
	| HTTPSuccessResponse<null>
	| HTTPErrorResponse;

export async function createAdministrator(
	data: CreateAdministratorRequest
): Promise<CreateAdministratorResponse> {
	try {
		const response = await api.post<HTTPSuccessResponse<null>>(
			"/admin/create",
			data
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
