import { useQuery } from "@tanstack/react-query";
import { getAdministrators } from "@/api/admin/administrators/get-administrators";

export function useGetAdministrators() {
	return useQuery({
		queryKey: ["administrators"],
		queryFn: getAdministrators,
	});
}
