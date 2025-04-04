import { useFormMutation } from "./use-form-mutation";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "@/api/auth/sign-in";
import { useAuthStore } from "@/store/auth";
import { toast } from "sonner";
import { z } from "zod";

const signInFormSchema = z.object({
	cpf_cnpj: z.string().min(11, "Digite um CPF/CNPJ válido.").max(14,"Digite um CPF/CNPJ válido."),
	password: z.string().length(8, "Digite uma senha válida."),
});

export function useSignIn() {
	const { authenticate } = useAuthStore();

	const form = useFormMutation({
		schema: signInFormSchema,
		defaultValues: {
			cpf_cnpj: "",
			password: "",
		},
		onSubmit: (data) => {
			signInFn({
				...data,
			});
		},
	});

	const { mutate: signInFn, isPending: isLoadingSignIn } = useMutation({
		mutationFn: signIn,
		onSuccess: (response) => {
			if (response.success) {
				authenticate(response.data.token);
				return;
			}

			toast.error(response.error);
		},
	});

	return {
		form,
		isLoadingSignIn,
	};
}
