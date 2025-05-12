import { getTypes } from "@/api/admin/types/get-types";
import { useQuery } from "@tanstack/react-query";

export function useGetTypes() {
	const { data: result, isLoading: isLoadingGetTypes } = useQuery({
		queryKey: ["types"],
		queryFn: () => getTypes(),
	});

	return {
		types: result?.success ? result.data : [],
		isLoadingGetTypes,
	};
}
