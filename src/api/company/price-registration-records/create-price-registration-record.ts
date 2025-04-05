import { HTTPSuccessResponse, HTTPErrorResponse } from "@/@types/http";
import { AxiosError } from "axios";
import { api } from "@/services/axios";
import { PriceRegistrationRecordData } from "@/@types/price-registration-record";
import { CreatePriceRegistrationRecordRequest } from "@/validators/company/price-registration-record";

type CreatePriceRegistrationRecordResponse =
	| HTTPSuccessResponse<PriceRegistrationRecordData>
	| HTTPErrorResponse;

/**
 * Creates a new price registration record
 * @param createPriceRegistrationRecordRequest The price registration record data to create
 * @returns Promise with the created price registration record or error
 */
export async function createPriceRegistrationRecord(
	createPriceRegistrationRecordRequest: CreatePriceRegistrationRecordRequest
): Promise<CreatePriceRegistrationRecordResponse> {
	try {
		const response = await api.post<
			HTTPSuccessResponse<PriceRegistrationRecordData>
		>(
			"/company/price-registration-records",
			createPriceRegistrationRecordRequest
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
