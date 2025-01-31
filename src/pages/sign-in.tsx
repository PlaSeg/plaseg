import { Label } from "@/components/ui/label";
import { Input } from "../components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

export function SignIn() {
	const navigate = useNavigate();

	return (
		<div className="flex flex-col gap-8 text-center w-[350px] rounded-lg">
			<div className="flex flex-col gap-2">
				<h2 className="text-2xl font-bold">Conecte-se</h2>
				<span className="text-sm text-gray-400">
					Digite seu email e senha abaixo para entrar
				</span>
			</div>

			<div className="flex flex-col gap-4">
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

				<Button className="mt-2" onClick={() => navigate("/")}>
					Entrar
				</Button>

				<a href="/cadastro" className="text-sm font-medium hover:underline">
					Não possui uma conta? Cadastre-se
				</a>
			</div>
		</div>
	);
}
