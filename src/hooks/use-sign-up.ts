import { useFormMutation } from "./use-form-mutation";
import { formatDocument } from "@/utils/format-document";
import { useMutation } from "@tanstack/react-query";
import { signUp } from "@/api/auth/sign-up";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { SignUpFormSchema, signUpFormSchema } from "@/@types/sign-up";

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
			role: "COMPANY",
		},
		onSubmit(data) {
			console.log(data);

			signUpFn({
				...data,
				document: formatDocument(data.document),
			});
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

			toast.error(response.errors[0]);
		},
	});

	return { form, isLoadingSignUp };
}
