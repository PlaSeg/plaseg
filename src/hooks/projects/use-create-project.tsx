import { createProjectSchema } from "@/@schemas/project";
import { useFormMutation } from "../use-form-mutation";

export function useCreateProject() {
	const form = useFormMutation({
		schema: createProjectSchema,
		defaultValues: {
			name: "",
			totalValue: undefined,
			requestedValue: undefined,
			baseValue: undefined,
			responsibleDocument: "",
			responsibleName: "",
			responsibleEmail: "",
			responsiblePhone: "",
			responsibleTelephone: "",
			counterpartCapitalInitials: "",
			counterpartCapitalAmount: undefined,
			counterpartCostInitials: "",
			counterpartCostAmount: undefined,
			counterpartDescription: "",
			counterpartAttachedFile: "",
		},
		onSubmit: async (data) => {
			console.log(data);
		},
	});

	return {
		form,
	};
}
