import { useFormMutation } from "./use-form-mutation";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "@/api/auth/sign-in";
import { useAuthStore } from "@/store/auth";
import { toast } from "sonner";
import { signInFormSchema } from "@/@types/sign-in";
// import { formatDocument } from "@/utils/format-document";

export function useSignIn() {
	const { authenticate } = useAuthStore();

	const form = useFormMutation({
		schema: signInFormSchema,
		defaultValues: {
			// document: "",
			email: "",
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

			toast.warning(response.errors[0]);
		},
	});

	return {
		form,
		isLoadingSignIn,
	};
}
