import { z } from "zod";
import { useFormMutation } from "./use-form-mutation";
import { formatDocument } from "@/utils/format-document";
import { useMutation } from "@tanstack/react-query";
import { signUp } from "@/api/auth/sign-up";

export const signUpFormSchema = z.object({
	name: z.string().min(3, "O nome deve ter pelo menos 3 caracteres"),
	document: z.string().min(11, "O documento deve ter pelo menos 11 caracteres"),
	email: z.string().email("Email inválido"),
	password: z.string().min(8, "A senha deve ter pelo menos 8 caracteres"),
	phone: z.string().min(11, "O telefone deve ter pelo menos 10 caracteres"),
	role: z.enum(["COMPANY", "CONSULTANT", "MUNICIPALITY"]),
});

export type SignUpFormSchema = z.infer<typeof signUpFormSchema>;

export function useSignUp() {
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
			signUpFn({
				...data,
				document: formatDocument(data.document),
			});
		},
	});

	const { mutateAsync: signUpFn } = useMutation({
		mutationKey: ["sign-up"],
		mutationFn: signUp,
	});

	return { form };
}
