import { useQuery } from "@tanstack/react-query";
import { getMunicipality } from "@/api/municipality/get-municipality";

export function useGetMunicipality() {
	const { data: result, isLoading: isLoadingGetMunicipality } = useQuery({
		queryKey: ["get-municipality"],
		queryFn: getMunicipality,
	});

	return {
		municipality: result?.success ? result.data : null,
		isLoadingGetMunicipality,
	};
}
