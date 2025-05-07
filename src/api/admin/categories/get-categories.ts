import { HTTPSuccessResponse, HTTPErrorResponse } from "@/@types/http";
import { AxiosError } from "axios";
import { api } from "@/services/axios";
import { Category } from "@/@types/category";

type GetCategoriesResponse =
    | HTTPSuccessResponse<Category[]>
    | HTTPErrorResponse;

export async function getCategories(): Promise<GetCategoriesResponse> {
    try {
        const response = await api.get<HTTPSuccessResponse<Category[]>>(
            "/categories"
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
