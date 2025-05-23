import { Button } from "@/components/ui/button";
import { SquarePen } from "lucide-react";

export function ProjectSectionTopic3() {
	return (
		<div className="flex flex-col gap-4">
			<div className="flex items-center justify-between">
				<div className="flex flex-col gap-4">
					<h2 className="text-xl font-semibold">Indicação do público alvo</h2>
				</div>

				<Button variant="outline" size="icon">
					<SquarePen />
				</Button>
			</div>

			<p>
				O público alvo direto é a população feminina do Município de Caxias, já
				o indireto é a População da cidade e a guarda Municipal Civil de Caxias
			</p>
		</div>
	);
}
