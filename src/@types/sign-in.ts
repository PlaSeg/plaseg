import { z } from "zod";

export const signInFormSchema = z.object({
	// document: z.coerce
	// 	.string()
	// 	.min(11, "O documento deve ter pelo menos 11 caracteres")
	// 	.max(14, "O documento deve ter no máximo 14 caracteres"),
	email: z.string().email("O e-mail deve ser válido."),
	password: z.string().min(8, "A senha deve ter no mínimo 8 caracteres."),
});
