import { z } from "zod";

export const signUpFormSchema = z.object({
	name: z.string().min(3, "O nome deve ter pelo menos 3 caracteres"),
	email: z.string().email("Email inválido"),
	document: z
		.string()
		.min(11, "O documento deve ter pelo menos 11 caracteres")
		.max(14, "O documento deve ter no máximo 14 caracteres"),
	role: z.enum(["COMPANY", "CONSULTANT", "MUNICIPALITY"]),
	phone: z
		.string()
		.min(10, "O telefone deve ter pelo menos 10 caracteres")
		.max(11, "O telefone deve ter no máximo 11 caracteres"),
	password: z
		.string()
		.min(8, "A senha deve ter no mínimo 8 caracteres.")
		.regex(/[A-Z]/, "A senha deve conter pelo menos uma letra maiúscula.")
		.regex(/\d/, "A senha deve conter pelo menos um número.")
		.regex(
			/[^A-Za-z0-9]/,
			"A senha deve conter pelo menos um caractere especial."
		),
});

export type SignUpFormSchema = z.infer<typeof signUpFormSchema>;
