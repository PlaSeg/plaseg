import { Building2, House, Users } from "lucide-react";
import { Who } from "./for-who-card";

export function ForWho() {
	return (
		<div className="w-full py-36">
			<div className="flex w-[1200px] mx-auto items-center justify-center">
				<div className="flex flex-col items-center justify-center gap-4 text-center">
					<h1 className="text-4xl font-bold leading-tight">
						Para quem é a PlaSeg?
					</h1>

					<div className="flex items-center justify-between gap-4 mt-4">
						<Who
							title="Municípios"
							text="Gere projetos de forma automática e amplie a segurança do seu município. Encontre atas de registro de preço, consultores especializados e empresas para auxiliar na melhoria da segurança do seu município."
						>
							<House className="text-[#3294F4]" size={32} />
						</Who>

						<Who
							title="Empresas"
							text="Divulgue seus produtos e serviços na área de segurança pública e amplie seu faturamento."
						>
							<Building2 className="text-[#3294F4]" size={32} />
						</Who>

						<Who
							title="Consultores"
							text="Ofereça seu conhecimento para ajudar municípios a elaborarem e executarem projetos de segurança."
						>
							<Users className="text-[#3294F4]" size={32} />
						</Who>
					</div>
				</div>
			</div>
		</div>
	);
}
