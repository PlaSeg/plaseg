import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { z } from "zod";
import type {
	HTTPErrorResponse,
	HTTPSuccessResponse,
} from "@/@types/http/http";
import { api } from "@/services/axios";

export const getProjectDocumentByIdResponseSchema = z.object({
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
			type: z.enum(["STRING", "TABLE"]),
			tableType: z.string(),
			parentId: z.string().nullable(),
		})
	),
});

export type ProjectDocument = z.infer<
	typeof getProjectDocumentByIdResponseSchema
>;

type GetProjectDocumentByIdResponse =
	| HTTPSuccessResponse<ProjectDocument>
	| HTTPErrorResponse;

export async function getProjectDocumentById(
	projectId: string,
	documentId: string
): Promise<GetProjectDocumentByIdResponse> {
	try {
		const response = await api.get<HTTPSuccessResponse<ProjectDocument>>(
			`/v2/projects/${projectId}/documents/${documentId}`
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

export function useGetProjectDocumentById(
	projectId: string,
	documentId: string
) {
	const { data: result, isLoading: isLoadingGetProjectDocumentById } = useQuery(
		{
			queryKey: ["get-project-document-by-id", projectId, documentId],
			queryFn: () => getProjectDocumentById(projectId, documentId),
			enabled: !!projectId && !!documentId,
		}
	);

	return {
		projectDocument: result?.success ? result.data : null,
		isLoadingGetProjectDocumentById,
	};
}
