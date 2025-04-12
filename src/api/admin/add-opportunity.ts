import { HTTPSuccessResponse, HTTPErrorResponse } from "@/@types/http";
import { AxiosError } from "axios";
import { api } from "@/services/axios";
import { Opportunity } from "@/@types/opportunity";
import { AddOpportunityRequestBody } from "@/@schemas/opportunity";

type AddOpportunityResponse =
	| HTTPSuccessResponse<Opportunity>
	| HTTPErrorResponse;

export async function addOpportunity(
	data: AddOpportunityRequestBody
): Promise<AddOpportunityResponse> {
	try {
		const response = await api.post<HTTPSuccessResponse<Opportunity>>(
			"/admin/opportunities",
			{
				...data,
				isActive: true,
			}
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
