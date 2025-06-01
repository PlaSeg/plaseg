import { allowUser } from "@/api/users/allow-user";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "@/services/react-query";
import { toast } from "sonner";

export function useAllowUser() {
	const { mutateAsync: allowUserMutation, isPending: isAllowingUser } =
		useMutation({
			mutationKey: ["allow-user"],
			mutationFn: allowUser,
			onSuccess: (response) => {
				if (response.success) {
					queryClient.invalidateQueries({
						queryKey: ["get-users"],
					});

					toast.success("Usuário aprovado com sucesso!");
					return;
				}

				response.errors.forEach((error) => {
					toast.error(error);
				});
			},
		});

	return {
		allowUserMutation,
		isAllowingUser,
	};
}
