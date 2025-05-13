import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteAdministrator } from "@/api/admin/administrators/delete-administrator";
import { toast } from "sonner";

export function useDeleteAdministrator() {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: (id: string) => deleteAdministrator(id),
		onSuccess: () => {
			toast.success("Administrador excluído com sucesso!");
			queryClient.invalidateQueries({ queryKey: ["administrators"] });
		},
		onError: () => {
			toast.error("Erro ao excluir administrador!");
		},
	});
}
