import { getRequiredDocuments } from "@/api/admin/mandatory-documents/get-required-documents";
import { useQuery } from "@tanstack/react-query";

export function useGetRequiredDocuments() {
	const { data: result, isLoading: isLoadingGetRequiredDocuments } = useQuery({
		queryKey: ["get-required-documents"],
		queryFn: getRequiredDocuments,
	});

	return {
		documents: result?.success ? result.data : [],
		isLoadingGetRequiredDocuments,
	};
}
