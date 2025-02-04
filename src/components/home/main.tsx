import { useNavigate } from "react-router";
import { Button } from "../ui/button";

export function Main() {
	const navigate = useNavigate();

	return (
		<div className="bg-dark text-white w-full">
			<div className="py-32 mx-auto w-[1200px] flex flex-col gap-4 items-center justify-center">
				<h1 className="text-4xl font-bold">
					PlaSeg – Plataforma de Apoio à Segurança Pública
				</h1>
				<p className="text-muted-foreground text-paragraph">
					Soluções Inteligentes para Municípios e Empresas no Setor de Segurança
				</p>

				<div className="flex items-center gap-4 p-6">
					<Button
						className="bg-button hover:bg-button/90 rounded-full w-[150px]"
						onClick={() => navigate("/entrar")}
					>
						Contratar
					</Button>

					<Button className="bg-[#1A202C] hover:bg-[#1A202C]/50 text-paragraph rounded-full w-[150px]">
						Ver mais
					</Button>
				</div>
			</div>
		</div>
	);
}
