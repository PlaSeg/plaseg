import { HTTPSuccessResponse, HTTPErrorResponse } from "@/@types/http/http";
import { AxiosError } from "axios";
import { api } from "@/services/axios";
import { PriceRegistrationRecordData } from "@/@types/company/price-registration-record";

type GetPriceRegistrationRecordsResponse =
	| HTTPSuccessResponse<PriceRegistrationRecordData[]>
	| HTTPErrorResponse;

export async function getPriceRegistrationRecords(): Promise<GetPriceRegistrationRecordsResponse> {
	try {
		const response = await api.get<GetPriceRegistrationRecordsResponse>(
			"/company/price_registration_records"
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
