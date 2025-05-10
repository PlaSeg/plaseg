import { useQuery } from "@tanstack/react-query";
import { getBaseProducts } from "@/api/admin/base-products/get-base-products";

export function useGetBaseProducts() {
	const { data: result, isLoading: isLoadingGetBaseProducts } = useQuery({
		queryKey: ["baseProducts"],
		queryFn: getBaseProducts,
	});

	return {
		baseProducts: result?.success ? result.data : [],
		isLoadingGetBaseProducts,
	};
}
