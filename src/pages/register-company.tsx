import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

export function RegisterCompany() {
	const navigate = useNavigate();

	return (
		<div className="flex flex-col gap-8 text-center w-[400px] rounded-lg">
			<div className="flex flex-col gap-2">
				<h2 className="text-2xl font-bold">Cadastro da Empresa</h2>
				<span className="text-sm text-muted-foreground">
					Preencha as informações da empresa para concluir o cadastro.
				</span>
			</div>

			<div className="flex flex-col gap-4">
				<div className="flex flex-col gap-2 text-left">
					<Label>Razão Social</Label>
					<Input
						type="text"
						id="razao_social"
						name="razao_social"
						placeholder="Digite a razão social"
					/>
				</div>

				<div className="flex flex-col gap-2 text-left">
					<Label>Nome Fantasia</Label>
					<Input
						type="text"
						id="nome_fantasia"
						name="nome_fantasia"
						placeholder="Digite o nome fantasia"
					/>
				</div>

				<div className="flex flex-col gap-2 text-left">
					<Label>CNPJ</Label>
					<Input
						type="text"
						id="cnpj"
						name="cnpj"
						placeholder="Digite o CNPJ"
					/>
				</div>

				<div className="flex flex-col gap-2 text-left">
					<Label>Inscrição Estadual</Label>
					<Input
						type="text"
						id="inscricao_estadual"
						name="inscricao_estadual"
						placeholder="Digite a inscrição estadual"
					/>
				</div>

				<div className="flex flex-col gap-2 text-left">
					<Label>Inscrição Municipal</Label>
					<Input
						type="text"
						id="inscricao_municipal"
						name="inscricao_municipal"
						placeholder="Digite a inscrição municipal"
					/>
				</div>

				<div className="flex flex-col gap-2 text-left">
					<Label>Endereço Completo</Label>
					<Input
						type="text"
						id="endereco"
						name="endereco"
						placeholder="Rua, Número, Bairro, Cidade, Estado, CEP"
					/>
				</div>

				<div className="flex flex-col gap-2 text-left">
					<Label>Telefone para Contato</Label>
					<Input
						type="text"
						id="telefone"
						name="telefone"
						placeholder="Digite o telefone de contato"
					/>
				</div>

				<div className="flex flex-col gap-2 text-left">
					<Label>E-mail Corporativo</Label>
					<Input
						type="email"
						id="email_corporativo"
						name="email_corporativo"
						placeholder="Digite o e-mail corporativo"
					/>
				</div>

				<div className="flex flex-col gap-2 text-left">
					<Label>Site e Redes Sociais</Label>
					<Input
						type="text"
						id="site_redes"
						name="site_redes"
						placeholder="Digite o site ou redes sociais"
					/>
				</div>

				<Button className="mt-2" onClick={() => navigate("/dashboard")}>
					Confirmar
				</Button>
			</div>
		</div>
	);
}
