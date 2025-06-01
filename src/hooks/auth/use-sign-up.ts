import { useFormMutation } from "../common/use-form-mutation";
import { useMutation } from "@tanstack/react-query";
import { signUp } from "@/api/auth/sign-up";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { SignUpFormSchema, signUpFormSchema } from "@/@schemas/sign-up";

export function useSignUp() {
	const navigate = useNavigate();

	const form = useFormMutation<SignUpFormSchema>({
		schema: signUpFormSchema,
		defaultValues: {
			name: "",
			document: "",
			email: "",
			password: "",
			phone: "",
			role: "MUNICIPALITY",
		},
		onSubmit(data) {
			if (data.role === "COMPANY") {
				toast.info("O cadastro de empresa não está disponível.");
				return;
			}

			signUpFn(data);
		},
	});

	const { mutateAsync: signUpFn, isPending: isLoadingSignUp } = useMutation({
		mutationKey: ["sign-up"],
		mutationFn: signUp,
		onSuccess: (response) => {
			if (response.success) {
				navigate(`/entrar?email=${form.watch("email")}`);
				return;
			}

			for (const error of response.errors) {
				toast.error(error);
			}
		},
	});

	return { form, isLoadingSignUp };
}
