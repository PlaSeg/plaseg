import { useMutation } from "@tanstack/react-query";
import { updateProjectGeneralInfo } from "@/api/projects/update-project-general-info";
import { useFormMutation } from "@/hooks/common/use-form-mutation";
import {
	projectGeneralInfoSchema,
	ProjectGeneralInfoRequest,
	Project,
} from "@/@schemas/project";
import { toast } from "sonner";
import { queryClient } from "@/services/react-query";

interface UseUpdateProjectGeneralInfoProps {
	project: Project;
}

export function useUpdateProjectGeneralInfo({
	project,
}: UseUpdateProjectGeneralInfoProps) {
	const form = useFormMutation({
		schema: projectGeneralInfoSchema,
		defaultValues: {
			responsibleCpf: project.responsibleCpf,
			responsibleName: project.responsibleName,
			responsibleEmail: project.responsibleEmail,
			responsiblePhone: project.responsiblePhone,
			baseValue: project.baseValue,
		},
		onSubmit: (data) => {
			updateProjectGeneralInfoFn({ projectId: project.id, data });
		},
	});

	const {
		mutateAsync: updateProjectGeneralInfoFn,
		isPending: isLoadingUpdateProjectGeneralInfo,
	} = useMutation({
		mutationFn: ({
			projectId,
			data,
		}: {
			projectId: string;
			data: ProjectGeneralInfoRequest;
		}) => updateProjectGeneralInfo(projectId, data),
		onSuccess: (response) => {
			if (response.success) {
				toast.success("Informações atualizadas com sucesso!");
				queryClient.invalidateQueries({
					queryKey: ["get-project-by-id"],
				});
				return;
			}

			response.errors.forEach((error) => {
				toast.error(error);
			});
		},
	});

	return {
		form,
		isLoadingUpdateProjectGeneralInfo,
	};
}
