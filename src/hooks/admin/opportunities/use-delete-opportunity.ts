import { deleteOpportunity } from "@/api/admin/opportunities/delete-opportunity";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "@/services/react-query";
import { toast } from "sonner";

export function useDeleteOpportunity() {
	const { mutate: deleteOpportunityFn, isPending: isLoadingDeleteOpportunity } =
		useMutation({
			mutationKey: ["delete-opportunity"],
			mutationFn: deleteOpportunity,
			onSuccess: (response) => {
				if (response.success) {
					queryClient.invalidateQueries({
						queryKey: ["opportunities"],
					});
					toast.success("Oportunidade excluída com sucesso!");
					return;
				}

				response.errors.forEach((error) => {
					toast.error(error);
				});
			},
		});

	return {
		deleteOpportunityFn,
		isLoadingDeleteOpportunity,
	};
}
