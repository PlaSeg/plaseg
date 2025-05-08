import { HTTPSuccessResponse, HTTPErrorResponse } from "@/@types/http";
import { AxiosError } from "axios";
import { api } from "@/services/axios";

type DeleteCategoryResponse = HTTPSuccessResponse<null> | HTTPErrorResponse;

export async function deleteCategory(
    id: string
): Promise<DeleteCategoryResponse> {
    try {
        const response = await api.delete<HTTPSuccessResponse<null>>(
            `/admin/categories/${id}`
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
