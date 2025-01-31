import { Label } from "@/components/ui/label";
import { Input } from "../components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

export function SignUp() {
	const navigate = useNavigate();

	return (
		<div className="flex flex-col gap-8 text-center w-[350px] rounded-lg">
			<div className="flex flex-col gap-2">
				<h2 className="text-2xl font-bold">Crie uma conta</h2>
				<span className="text-sm text-gray-400">
					Digite seu CPF/CPNJ, nome, email, senha e telefone para criar sua conta
				</span>
			</div>

			<div className="flex flex-col gap-2">
				<div className="flex flex-col gap-2 text-left">
					<Label>CPF/CNPJ</Label>

					<Input
						type="text"
						id="cpf_cnpj"
						name="cpf_cnpj"
						placeholder="Digite seu CPF ou CNPJ"
					/>
				</div>

				<div className="flex flex-col gap-2 text-left">
					<Label>Nome</Label>

					<Input
						type="text"
						id="name"
						name="name"
						placeholder="Digite o nome do titular"
					/>
				</div>

				<div className="flex flex-col gap-2 text-left">
					<Label>Email</Label>

					<Input
						type="email"
						id="email"
						name="email"
						placeholder="Digite seu email"
					/>
				</div>

				<div className="flex flex-col gap-2 text-left">
					<Label>Senha</Label>

					<Input
						type="password"
						id="password"
						name="password"
						placeholder="Digite sua senha"
					/>
				</div>

				<div className="flex flex-col gap-2 text-left">
					<Label>Telefone</Label>

					<Input
						type="text"
						id="phone"
						name="phone"
						placeholder="Digite seu telefone"
					/>
				</div>

				<Button className="mt-2" onClick={() => navigate("/")}>Confirmar</Button>

				<a href="/entrar" className="text-sm font-medium hover:underline">
					Já possui uma conta? Conecte-se
				</a>
			</div>
		</div>
	);
}
