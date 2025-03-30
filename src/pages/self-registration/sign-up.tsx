import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSignUp } from "@/hooks/use-sign-up";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Combobox } from "@/components/ui/combobox";

const roleOptions = [
	{ label: "Empresa", value: "COMPANY" },
	{ label: "Consultor", value: "CONSULTANT" },
	{ label: "Município", value: "MUNICIPALITY" },
];

export default function SignUp() {
	const { form } = useSignUp();

	return (
		<div className="flex flex-col gap-8 text-center w-[350px] rounded-lg">
			<div className="flex flex-col gap-2">
				<h2 className="text-2xl font-bold">Crie uma conta</h2>
				<span className="text-sm text-muted-foreground">
					Digite suas credenciais para criar uma conta.
				</span>
			</div>

			<div className="flex flex-col gap-4">
				<Form {...form}>
					<form onSubmit={form.handleSubmitForm} className="space-y-3">
						<FormField
							control={form.control}
							name={"document"}
							render={({ field }) => (
								<FormItem className="flex flex-col text-left">
									<FormLabel>CPF/CNPJ</FormLabel>
									<FormControl>
										<Input
											type="text"
											id="document"
											placeholder="Digite seu CPF ou CNPJ"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name={"name"}
							render={({ field }) => (
								<FormItem className="flex flex-col text-left">
									<FormLabel>Nome</FormLabel>
									<FormControl>
										<Input
											type="text"
											id="name"
											placeholder="Digite o seu nome"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name={"email"}
							render={({ field }) => (
								<FormItem className="flex flex-col text-left">
									<FormLabel>Email</FormLabel>
									<FormControl>
										<Input
											type="email"
											id="email"
											placeholder="Digite seu email"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name={"phone"}
							render={({ field }) => (
								<FormItem className="flex flex-col text-left">
									<FormLabel>Telefone</FormLabel>
									<FormControl>
										<Input
											type="text"
											id="phone"
											placeholder="Digite seu telefone"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name={"password"}
							render={({ field }) => (
								<FormItem className="flex flex-col text-left">
									<FormLabel>Senha</FormLabel>
									<FormControl>
										<Input
											type="password"
											id="password"
											placeholder="Digite sua senha"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<Combobox
							form={form}
							entity="role"
							translatedEntity="Cargo"
							placeholder="Selecione o cargo"
							emptyMessage="Nenhum cargo encontrado"
							options={roleOptions}
						/>

						<Button type="submit" className="mt-2 w-full">
							Confirmar
						</Button>
					</form>
				</Form>

				<a href="/entrar" className="text-sm font-medium hover:underline">
					Já possui uma conta? Conecte-se
				</a>
			</div>
		</div>
	);
}
