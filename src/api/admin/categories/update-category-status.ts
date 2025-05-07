import { HTTPSuccessResponse, HTTPErrorResponse } from "@/@types/http";
import { AxiosError } from "axios";
import { api } from "@/services/axios";
import { Category } from "@/@types/category";

type UpdateCategoryStatusResponse =
    | HTTPSuccessResponse<Category>
    | HTTPErrorResponse;

export async function updateCategoryStatus(
    categoryId: string,
    status: boolean
): Promise<UpdateCategoryStatusResponse> {
    try {
        const response = await api.patch<HTTPSuccessResponse<Category>>(
            `/admin/categories/${categoryId}/status/${status}`
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
