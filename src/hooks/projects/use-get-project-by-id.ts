import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "sonner";
import type { Project } from "@/@schemas/project";
import type {
	HTTPErrorResponse,
	HTTPSuccessResponse,
} from "@/@types/http/http";
import { api } from "@/services/axios";

type GetProjectByIdResponse = HTTPSuccessResponse<Project> | HTTPErrorResponse;

export async function getProjectById(
	id: string
): Promise<GetProjectByIdResponse> {
	try {
		const response = await api.get<HTTPSuccessResponse<Project>>(
			`/v2/projects/${id}`
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

export function useGetProjectById(id: string) {
	const { data: result, isLoading: isLoadingGetProjectById } = useQuery({
		queryKey: ["get-project-by-id", id],
		queryFn: () => getProjectById(id || ""),
		select: (response) => {
			if (response.success) {
				return response.data;
			}

			for (const error of response.errors) {
				toast.error(error);
			}
		},
	});

	return {
		project: result,
		isLoadingGetProjectById,
	};
}
