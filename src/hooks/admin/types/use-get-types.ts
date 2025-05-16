import { getTypes } from "@/api/admin/types/get-types";
import { useQuery } from "@tanstack/react-query";
import { TypeGroup } from "@/@types/admin/type";

export function useGetTypes(group?: TypeGroup, parentId?: string) {
	const { data: result, isLoading: isLoadingGetTypes } = useQuery({
		queryKey: ["types", group, parentId],
		queryFn: () => getTypes({ group, parentId }),
	});

	return {
		types: result?.success ? result.data : [],
		isLoadingGetTypes,
	};
}
