import { Link } from "react-router";
import { Button } from "../ui/button";

export function Main() {

	return (
		<div className="bg-dark text-white w-full py-36">
			<div className="mx-auto w-[1200px] text-center flex flex-col gap-4 items-center justify-center">
				<h1 className="text-4xl leading-tight font-bold">
					PlaSeg - Plataforma de Apoio <br /> à Segurança Pública
				</h1>
				<p className="text-lg text-muted-foreground text-paragraph">
					Soluções Inteligentes para Municípios e Empresas no Setor de Segurança
				</p>

				<div className="flex items-center gap-4 p-6">
					<Button className="font-bold px-8 rounded-full">Contratar</Button>

					<Button
						className="bg-[#1A202C] hover:bg-[#1A202C]/50 text-paragraph rounded-full
					px-8 font-bold"
					>
						Ver mais
					</Button>
				</div>
			</div>
		</div>
	);
}
