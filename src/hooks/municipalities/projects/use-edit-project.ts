import { projectGeneralInfoSchema } from "@/@schemas/project";
import { useFormMutation } from "@/hooks/common/use-form-mutation";

export function useEditProject() {
	const form = useFormMutation({
		schema: projectGeneralInfoSchema,
		defaultValues: {
			responsibleCpf: "",
			responsibleName: "",
			responsibleEmail: "",
			responsiblePhone: "",
			totalValue: undefined,
			requestedValue: undefined,
			baseValue: undefined,
		},
		onSubmit: async (data) => {
			console.log(data);
		},
	});

	return {
		form,
	};
}
