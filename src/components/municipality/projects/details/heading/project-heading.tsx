import { Copy, DollarSign, Download } from "lucide-react";
import { ProjectProgress } from "./project-progress";
import { Button } from "@/components/ui/button";
import { ProjectResponsibles } from "./project-responsibles";

export function ProjectHeading() {
	return (
		<div className="w-full p-6">
			<div className="flex justify-between">
				<div className="flex items-center gap-8">
					<ProjectProgress />

					<div className="flex flex-col gap-2">
						<span className="text-sm text-muted-foreground">
							Valor Solicitado
						</span>

						<div className="flex items-center gap-2">
							<div className="w-10 h-10 border border-slate-200 rounded-full flex items-center justify-center">
								<DollarSign size={18} />
							</div>

							<span className="font-medium">R$ 1.500.000,00</span>
						</div>
					</div>

					<div className="flex flex-col gap-2">
						<span className="text-sm text-muted-foreground">
							Contrapartida (30%)
						</span>

						<div className="flex items-center gap-2">
							<div className="w-10 h-10 border border-slate-200 rounded-full flex items-center justify-center">
								<DollarSign size={18}/>
							</div>

							<span className="font-medium">R$ 45.000,00</span>
						</div>
					</div>

					<div className="flex flex-col gap-2">
						<span className="text-sm text-muted-foreground">Responsáveis</span>

						<div className="flex items-center gap-2">
							<ProjectResponsibles />
						</div>
					</div>
				</div>

				<div className="flex flex-col gap-2">
					<span className="text-muted-foreground text-sm">Ações</span>

					<div className="flex items-center gap-4">
						<Button variant="outline">
							<Copy />
							Duplicar
						</Button>

						<Button className="bg-slate-950 hover:bg-slate-950/90">
							<Download />
							Exportar
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
