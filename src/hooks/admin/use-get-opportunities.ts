import { getOpportunities } from "@/api/admin/get-opportunities";
import { useQuery } from "@tanstack/react-query";

export function useGetOpportunities() {
	const { data: result, isLoading: isLoadingGetOpportunities } = useQuery({
		queryKey: ["opportunities"],
		queryFn: getOpportunities,
	});

	return {
		opportunities: result?.data ?? [],
		isLoadingGetOpportunities,
	};
}
