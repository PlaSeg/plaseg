import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateAdministrator } from "@/api/admin/administrators/update-administrator";
import { UpdateAdministratorRequest } from "@/@schemas/administrator";
import { toast } from "sonner";

export function useUpdateAdministrator() {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: ({
			id,
			data,
		}: {
			id: string;
			data: UpdateAdministratorRequest;
		}) => updateAdministrator(id, data),
		onSuccess: () => {
			toast.success("Administrador atualizado com sucesso!");
			queryClient.invalidateQueries({ queryKey: ["administrators"] });
		},
		onError: () => {
			toast.error("Erro ao atualizar administrador!");
		},
	});
}
