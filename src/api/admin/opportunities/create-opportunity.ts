import { AxiosError } from "axios";
import type { OpportunityRequest } from "@/@schemas/opportunity";
import type { Opportunity } from "@/@types/common/opportunity";
import type {
	HTTPErrorResponse,
	HTTPSuccessResponse,
} from "@/@types/http/http";
import { api } from "@/services/axios";

type CreateOpportunityResponse =
	| HTTPSuccessResponse<Opportunity>
	| HTTPErrorResponse;

/**
 * @description Adiciona uma oportunidade
 * @param request
 * @returns
 */
export async function createOpportunity(
	request: OpportunityRequest
): Promise<CreateOpportunityResponse> {
	try {
		const response = await api.post<HTTPSuccessResponse<Opportunity>>(
			"/opportunities",
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
