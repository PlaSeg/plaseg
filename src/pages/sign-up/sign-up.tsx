import { SignUpForm } from "@/components/sign-up/sign-up-form";

export default function SignUp() {
	return (
		<div className="flex flex-col gap-8 text-center w-[350px] rounded-lg">
			<div className="flex flex-col gap-2">
				<h2 className="text-2xl font-bold">Crie uma conta</h2>
				<span className="text-sm text-muted-foreground">
					Digite suas credenciais para criar uma conta.
				</span>
			</div>

			<div className="flex flex-col gap-4">
				<SignUpForm />

				<a href="/entrar" className="text-sm font-medium hover:underline">
					Já possui uma conta? Conecte-se
				</a>
			</div>
		</div>
	);
}
