import { addOpportunitySchema } from "@/@schemas/opportunity";
import { useFormMutation } from "../use-form-mutation";
import { addOpportunity } from "@/api/admin/add-opportunity";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "@/services/react-query";
import { toast } from "sonner";
import { useNavigate } from "react-router";

export function useAddOpportunity() {
	const navigate = useNavigate();

	const form = useFormMutation({
		schema: addOpportunitySchema,
		defaultValues: {
			title: "",
			category: "",
			responsibleAgency: "",
			description: "",
			executionPeriod: 0,
			minFundingAmount: 0,
			maxFundingAmount: 0,
			startDate: "",
			endDate: "",
			documentation: [],
		},
		onSubmit: (data) => {
			if (!data.documentation || data.documentation.length === 0) {
				form.setError("documentation", {
					type: "min",
					message: "A documentação obrigatória deve conter pelo menos um item",
				});
				return;
			}

			addOpportunityFn({
				...data,
				documentation: (data.documentation || []).map((doc) => ({
					...doc,
					code: doc.code ?? Math.floor(Math.random() * 1000),
				})),
				startDate: data.startDate.replace(".000Z", ""),
				endDate: data.endDate.replace(".000Z", ""),
			});
		},
	});

	const { mutate: addOpportunityFn, isPending: isAddingOpportunity } =
		useMutation({
			mutationKey: ["add-opportunity"],
			mutationFn: addOpportunity,
			onSuccess: (response) => {
				if (response.success) {
					queryClient.invalidateQueries({
						queryKey: ["opportunities"],
					});
					navigate("/admin/oportunidades");
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
	};
}
