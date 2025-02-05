import { useNavigate } from "react-router";
import { Button } from "../ui/button";

export function PublicSecurity() {
	const navigate = useNavigate();

	return (
		<div className="w-full py-24">
			<div className="flex w-[1200px] mx-auto items-center justify-center">
				<div className="flex flex-col items-center justify-center gap-4 text-center w-[1000px]">
					<h1 className="text-4xl font-bold leading-tight">
						Transforme a Segurança Pública <br /> na sua Cidade!
					</h1>

					<p className="text-muted-foreground leading-6">
						A PlaSeg é a primeira plataforma digital do Brasil voltada para
						ajudar municípios a captarem recursos via projetos. Ela gera esboços
						de projetos de forma automática, incluindo textos, orçamentos,
						valores e tudo que é necessário para concorrer em um edital de
						financiamento. Além disso, permite encontrar consultores para
						auxiliar em projetos e conecta empresas e fornecedores de serviços
						de segurança.
					</p>

					<div
						className="mt-12 max-w-max flex items-center gap-12 p-4 rounded-full border
					font-medium text-sm"
					>
						Cadastre-se agora e simplifique a captação e gestão de recursos para
						segurança pública!
						<Button
							className="bg-button hover:bg-button/90 rounded-full w-[150px]"
							onClick={() => navigate("/cadastrar")}
						>
							Cadastre-se
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
