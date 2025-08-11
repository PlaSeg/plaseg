import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import {
	type CreateProjectRequest,
	createProjectSchema,
} from "@/@schemas/project";
import type {
	HTTPErrorResponse,
	HTTPSuccessResponse,
} from "@/@types/http/http";
import { useFormMutation } from "@/hooks/common/use-form-mutation";
import { api } from "@/services/axios";
import { queryClient } from "@/services/react-query";

type CreateProjectResponseBody = {
	projectId: string;
};

type CreateProjectResponse =
	| HTTPSuccessResponse<CreateProjectResponseBody>
	| HTTPErrorResponse;

export async function createProject(
	request: CreateProjectRequest
): Promise<CreateProjectResponse> {
	try {
		const response = await api.post<
			HTTPSuccessResponse<CreateProjectResponseBody>
		>("/projects", request);

		return response.data;
	} catch (error) {
		if (error instanceof AxiosError && error.response?.data) {
			return error.response.data;
		}

		return {
			success: false,
			errors: ["Erro desconhecido"],
			data: null,
		};
	}
}

export function useCreateProject({ opportunityId }: { opportunityId: string }) {
	const navigate = useNavigate();

	const [isCreateProjectSheetOpen, setIsCreateProjectSheetOpen] =
		useState(false);

	const form = useFormMutation({
		schema: createProjectSchema,
		defaultValues: {
			title: "",
			opportunityId: opportunityId,
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
