import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { z } from "zod";
import type {
	HTTPErrorResponse,
	HTTPSuccessResponse,
} from "@/@types/http/http";
import { api } from "@/services/axios";

const documentFieldSchema = z.object({
	id: z.string(),
	name: z.string(),
	isTitle: z.boolean(),
	value: z.string(),
	section: z.string(),
	level: z.number(),
	parentId: z.string(),
	order: z.number(),
});

const documentSchema = z.object({
	name: z.string(),
	fields: z.array(documentFieldSchema),
});

const requiredDocumentSchema = z.object({
	id: z.string(),
	name: z.string(),
	description: z.string(),
	model: z.string(),
	createdAt: z.string(),
	updatedAt: z.string(),
});

export const opportunityByIdSchema = z.object({
	id: z.string(),
	title: z.string(),
	slug: z.string(),
	responsibleAgency: z.string(),
	description: z.string(),
	availableValue: z.number(),
	minValue: z.number(),
	maxValue: z.number(),
	initialDeadline: z.string(),
	finalDeadline: z.string(),
	requiresCounterpart: z.boolean(),
	counterpartPercentage: z.number(),
	type: z.string(),
	typeId: z.string(),
	isActive: z.boolean(),
	createdAt: z.string(),
	updatedAt: z.string(),
	requiredDocuments: z.array(requiredDocumentSchema),
	documents: z.array(documentSchema),
});

export type OpportunityById = z.infer<typeof opportunityByIdSchema>;
export type DocumentField = z.infer<typeof documentFieldSchema>;
export type Document = z.infer<typeof documentSchema>;
export type RequiredDocument = z.infer<typeof requiredDocumentSchema>;

type GetOpportunityByIdResponse =
	| HTTPSuccessResponse<OpportunityById>
	| HTTPErrorResponse;

const getOpportunityById = async (
	id: string
): Promise<GetOpportunityByIdResponse> => {
	try {
		const response = await api.get<GetOpportunityByIdResponse>(
			`/opportunities/${id}`
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
};

export const useGetOpportunityById = (id: string) => {
	const {
		data: opportunity,
		isLoading: isGetOpportunityByIdLoading,
		error: getOpportunityByIdError,
	} = useQuery({
		queryKey: ["get-opportunity-by-id", id],
		queryFn: () => getOpportunityById(id),
		enabled: !!id,
	});

	return {
		opportunity: opportunity?.data,
		isGetOpportunityByIdLoading,
		getOpportunityByIdError,
	};
};
