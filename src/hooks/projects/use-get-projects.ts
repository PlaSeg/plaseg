import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { z } from "zod";
import type {
	HTTPErrorResponse,
	HTTPSuccessResponse,
} from "@/@types/http/http";
import { api } from "@/services/axios";

export const getProjectsResponseSchema = z.object({
	id: z.string(),
	title: z.string(),
	opportunity: z.string(),
	responsibleName: z.string(),
	isActive: z.boolean(),
	createdAt: z.string(),
});

export type Project = z.infer<typeof getProjectsResponseSchema>;

type GetProjectsResponse = HTTPSuccessResponse<Project[]> | HTTPErrorResponse;

export async function getProjects(): Promise<GetProjectsResponse> {
	try {
		const response = await api.get<HTTPSuccessResponse<Project[]>>("/projects");

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

export function useGetProjects() {
	const { data: result, isLoading: isLoadingGetProjects } = useQuery({
		queryKey: ["get-projects"],
		queryFn: getProjects,
	});

	return {
		projects: result?.success ? result.data : [],
		isLoadingGetProjects,
	};
}
