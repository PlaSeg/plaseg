import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { updateOpportunityStatus } from "@/api/admin/opportunities/update-opportunity-status";
import { queryClient } from "@/services/react-query";

export function useUpdateOpportunityStatus() {
	const {
		mutate: updateOpportunityStatusFn,
		isPending: isLoadingUpdateOpportunityStatus,
	} = useMutation({
		mutationKey: ["update-opportunity-status"],
		mutationFn: ({
			opportunityId,
			status,
		}: {
			opportunityId: string;
			status: boolean;
		}) => updateOpportunityStatus(opportunityId, status),
		onSuccess: (response) => {
			if (response.success) {
				queryClient.invalidateQueries({
					queryKey: ["get-opportunities"],
				});
				toast.success("Status da oportunidade atualizado com sucesso!");
				return;
			}

			response.errors.forEach((error) => {
				toast.error(error);
			});
		},
	});

	return {
		updateOpportunityStatusFn,
		isLoadingUpdateOpportunityStatus,
	};
}
