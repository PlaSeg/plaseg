import { getMandatoryDocuments } from "@/api/admin/mandatory-documents/get-mandatory-documents";
import { useQuery } from "@tanstack/react-query";

export function useGetMandatoryDocuments(name?: string, id?: string) {
	const { data: result, isLoading: isLoadingGetMandatoryDocuments } = useQuery({
		queryKey: ["mandatory-documents", name, id],
		queryFn: () => getMandatoryDocuments({ name, id }),
	});

	return {
		documents: result?.success ? result.data : [],
		isLoadingGetMandatoryDocuments,
	};
}
