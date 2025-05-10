import { useFormMutation } from "../use-form-mutation";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "@/api/auth/sign-in";
import { useAuthStore } from "@/store/auth";
import { toast } from "sonner";
import { signInFormSchema } from "@/@schemas/sign-in";

export function useSignIn() {
	const { authenticate } = useAuthStore();

	const form = useFormMutation({
		schema: signInFormSchema,
		defaultValues: {
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
				authenticate(response.data.accessToken);

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
