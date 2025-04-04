import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LoaderCircle } from "lucide-react";
import { useSignIn } from "@/hooks/use-sign-in";
import {
	Form,
	FormField,
	FormItem,
	FormLabel,
	FormControl,
	FormMessage
} from "@/components/ui/form";

export default function SignIn() {
	const { form, isLoadingSignIn } = useSignIn();

	return (
		<Form {...form}>

			<div className="flex flex-col gap-8 text-center w-[350px] rounded-lg">
				<div className="flex flex-col gap-2">
					<h2 className="text-2xl font-bold">Conecte-se</h2>
					<span className="text-sm text-muted-foreground">
						Digite suas credenciais para acessar sua conta.
					</span>
				</div>


				
				<div className="flex flex-col gap-4">
					<form onSubmit={form.handleSubmitForm} className="space-y-4">

						<div className="flex flex-col gap-2 text-left">
							<FormField
							control={form.control}
							name="cpf_cnpj"
							render={({ field }) => (
							<FormItem>
								<FormLabel>CPF/CNPJ</FormLabel>
								<FormControl>
									<Input type="text" placeholder="Digite seu CPF ou CNPJ" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
							
							)}
							/>
						</div>

						<div className="flex flex-col gap-2 text-left">
							<FormField
								control={form.control}
								name="password"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Senha</FormLabel>
										<FormControl>
											<Input
												type="password"
												placeholder="Digite sua senha"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
						<span className="text-xs mt-1 block text-muted-foreground">
							A senha deve possuir 8 caracteres. Deve conter pelo menos um
							número, uma letra maiúscula e um caractere especial.
						</span>

						<Button type="submit" className="mt-2 w-full">
							{isLoadingSignIn && <LoaderCircle className="animate-spin" />}

							{!isLoadingSignIn && "Entrar"}
						</Button>
					</form>

					<a
						href="/esqueceu-senha"
						className="text-sm font-medium hover:underline"
					>
						Esqueceu sua senha? Clique aqui
					</a>

					<a href="/cadastro" className="text-sm font-medium hover:underline">
						Não possui uma conta? Cadastre-se
					</a>
				</div>
			</div>
		</Form>
	);
}
