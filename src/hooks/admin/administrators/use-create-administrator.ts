import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createAdministrator } from "@/api/admin/administrators/create-administrator";
import { CreateAdministratorRequest } from "@/@schemas/administrator";
import { toast } from "sonner";

export function useCreateAdministrator() {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: (data: CreateAdministratorRequest) => createAdministrator(data),
		onSuccess: () => {
			toast.success("Administrador criado com sucesso!");
			queryClient.invalidateQueries({ queryKey: ["administrators"] });
		},
		onError: () => {
			toast.error("Erro ao criar administrador!");
		},
	});
}
