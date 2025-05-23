import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { SquarePen } from "lucide-react";

const text = `O objeto da presente proposta está em consonância com preceitos	constitucionais e demais normativos vigentes que preconizam a integração e a atuação coordenada dos órgãos de segurança pública na prevenção e no combate à violência, especialmente violência contra a mulher.`;

export function ProjectSectionTopic2() {
	return (
		<div className="flex flex-col gap-4">
			<div className="flex items-center justify-between">
				<div className="flex flex-col gap-4">
					<h2 className="text-xl font-semibold">Justificativa</h2>

					<h2 className="text-xl font-semibold">
						Caracterização dos interesses recíprocos
					</h2>
				</div>

				<Button variant="outline" size="icon">
					<SquarePen />
				</Button>
			</div>

			<p>
				<Textarea className="bg-white" value={text} />
			</p>

			<div className="flex items-center gap-2 self-end">
				<Button variant="outline">Descartar alterações</Button>

				<Button
					variant="outline"
					className="bg-black hover:bg-black/90 text-white
				hover:text-white"
				>
					Salvar
				</Button>
			</div>
		</div>
	);
}
