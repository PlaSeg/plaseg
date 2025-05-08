import { HTTPSuccessResponse, HTTPErrorResponse } from "@/@types/http";
import { AxiosError } from "axios";
import { api } from "@/services/axios";
import { Category } from "@/@types/category";
import { AddCategoryRequestBody } from "@/@schemas/category";

type AddCategoryResponse =
    | HTTPSuccessResponse<Category>
    | HTTPErrorResponse;

export async function addCategory(
    data: AddCategoryRequestBody
): Promise<AddCategoryResponse> {
    try {
        const response = await api.post<HTTPSuccessResponse<Category>>(
            "/admin/categories",
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
