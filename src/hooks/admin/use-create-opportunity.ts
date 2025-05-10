import { useFormMutation } from "../use-form-mutation";
import { createOpportunity } from "@/api/admin/create-opportunity";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "@/services/react-query";
import { toast } from "sonner";
import { useNavigate } from "react-router";
import { useState } from "react";
import { createOpportunityRequestSchema } from "@/@schemas/opportunity";

export function useCreateOpportunity() {
	const [isCreateOpportunitySheetOpen, setIsCreateOpportunitySheetOpen] =
		useState(false);

	const navigate = useNavigate();

	const form = useFormMutation({
		schema: createOpportunityRequestSchema,
		defaultValues: {
			title: "",
			description: "",
			availableValue: 0,
			minValue: 0,
			maxValue: 0,
			initialDeadline: new Date(),
			finalDeadline: new Date(),
			requiresCounterpart: false,
			counterpartPercentage: 0,
			requiredDocuments: [],
			isActive: true,
		},
		onSubmit: (data) => {
			console.log(data);
		},
	});

	const { isPending: isAddingOpportunity } = useMutation({
		mutationKey: ["create-opportunity"],
		mutationFn: createOpportunity,
		onSuccess: (response) => {
			if (response.success) {
				queryClient.invalidateQueries({
					queryKey: ["opportunities"],
				});
				navigate("/admin/oportunidades");
				toast.success("Oportunidade criada com sucesso!");
				return;
			}

			response.errors.forEach((error) => {
				toast.error(error);
			});
		},
	});

	return {
		form,
		isAddingOpportunity,
		isCreateOpportunitySheetOpen,
		setIsCreateOpportunitySheetOpen,
	};
}
