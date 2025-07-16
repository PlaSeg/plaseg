import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { createProjectSchema } from "@/@schemas/project";
import { createProject } from "@/api/projects/create-project";
import { useFormMutation } from "@/hooks/common/use-form-mutation";
import { queryClient } from "@/services/react-query";

interface UseCreateProjectProps {
	opportunityId: string;
}

export function useCreateProject({ opportunityId }: UseCreateProjectProps) {
	const navigate = useNavigate();

	const [isCreateProjectSheetOpen, setIsCreateProjectSheetOpen] =
		useState(false);

	const form = useFormMutation({
		schema: createProjectSchema,
		defaultValues: {
			title: "",
			opportunityId: opportunityId,
			projectTypeId: "",
		},
		onSubmit: (data) => {
			createProjectFn(data);
		},
	});

	const { mutateAsync: createProjectFn, isPending: isLoadingCreateProject } =
		useMutation({
			mutationFn: createProject,
			onSuccess: (response) => {
				if (response.success) {
					queryClient.invalidateQueries({ queryKey: ["get-projects"] });
					form.reset();
					setIsCreateProjectSheetOpen(false);
					toast.success("Projeto criado com sucesso!");
					navigate(`/projetos/${response.data.projectId}`);
					return;
				}

				response.errors.forEach((error) => {
					toast.error(error);
				});
			},
		});

	return {
		form,
		isLoadingCreateProject,
		isCreateProjectSheetOpen,
		setIsCreateProjectSheetOpen,
	};
}
