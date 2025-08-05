import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { z } from "zod";
import type {
	HTTPErrorResponse,
	HTTPSuccessResponse,
} from "@/@types/http/http";
import { api } from "@/services/axios";

export const getProjectDocumentsResponseSchema = z.array(
	z.object({
		id: z.string(),
		name: z.string(),
		fields: z.array(
			z.object({
				id: z.string(),
				name: z.string(),
				description: z.string(),
				value: z.union([z.string(), z.array(z.record(z.unknown()))]),
				isTitle: z.boolean(),
				ready: z.boolean(),
				section: z.string(),
				type: z.string(),
				tableType: z.string(),
				parentId: z.string().nullable(),
			})
		),
	})
);

export type ProjectDocuments = z.infer<
	typeof getProjectDocumentsResponseSchema
>;

type GetProjectDocumentsResponse =
	| HTTPSuccessResponse<ProjectDocuments>
	| HTTPErrorResponse;

export async function getProjectDocuments(
	projectId: string
): Promise<GetProjectDocumentsResponse> {
	try {
		const response = await api.get<HTTPSuccessResponse<ProjectDocuments>>(
			`/projects/${projectId}/documents`
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

export function useGetProjectDocuments(projectId: string) {
	const { data: result, isLoading: isLoadingGetProjectDocuments } = useQuery({
		queryKey: ["get-project-documents", projectId],
		queryFn: () => getProjectDocuments(projectId),
		enabled: !!projectId,
	});

	return {
		projectDocuments: result?.success ? result.data : null,
		isLoadingGetProjectDocuments,
	};
}
