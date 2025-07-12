import { useQuery } from "@tanstack/react-query";
import { z } from "zod";
import type {
	HTTPErrorResponse,
	HTTPSuccessResponse,
} from "@/@types/http/http";
import { api } from "@/services/axios";

const opportunitySchema = z.object({
	id: z.string(),
	title: z.string(),
	slug: z.string(),
	responsibleAgency: z.string(),
	description: z.string(),
	minValue: z.number(),
	maxValue: z.number(),
	initialDeadline: z.string(),
	finalDeadline: z.string(),
	type: z.string(),
	isActive: z.boolean(),
});

export type Opportunity = z.infer<typeof opportunitySchema>;

const getOpportunitiesResponseSchema = z.object({
	success: z.literal(true),
	errors: z.null(),
	data: z.array(opportunitySchema),
});

type GetOpportunitiesResponse =
	| HTTPSuccessResponse<Opportunity[]>
	| HTTPErrorResponse;

const getOpportunities = async (): Promise<Opportunity[]> => {
	const response = await api.get<GetOpportunitiesResponse>("/opportunities");
	const validatedResponse = getOpportunitiesResponseSchema.parse(response.data);
	return validatedResponse.data;
};

export const useGetOpportunities = () => {
	const { data: opportunities = [], isLoading: isLoadingGetOpportunities } =
		useQuery({
			queryKey: ["get-opportunities"],
			queryFn: getOpportunities,
		});

	return {
		opportunities,
		isLoadingGetOpportunities,
	};
};
