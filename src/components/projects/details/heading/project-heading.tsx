import type { Project } from "@/@schemas/project";
import { Button } from "@/components/ui/button";
import { ProjectPdfSheet } from "./project-pdf-sheet";
import { ProjectProgress } from "./project-progress";
import { ProjectValue } from "./project-value";

interface ProjectHeadingProps {
	project: Project;
}

export function ProjectHeading({ project }: ProjectHeadingProps) {
	const requestedValue = project.requestedItems.reduce(
		(acc, item) => acc + item.baseProduct.unitValue * item.quantity,
		0
	);

	const counterpartValue = () => {
		if (project.opportunity.counterpartPercentage === 0) return 0;

		return (requestedValue * project.opportunity.counterpartPercentage) / 100;
	};

	const totalValue = () => {
		return requestedValue + counterpartValue();
	};

	function projectProgress() {
		if (project.progress === 33.33) return 33;
		if (project.progress === 66.66) return 66;
		if (project.progress > 66.66) return 100;
		return 0;
	}

	return (
		<div className="w-full py-6">
			<div className="flex justify-between">
				<div className="flex items-center gap-10">
					<ProjectProgress percentage={projectProgress()} />

					<ProjectValue
						title="Valor Base"
						tooltipText="Uma estimativa do valor do projeto"
						value={project.baseValue ?? 0}
					/>

					<ProjectValue
						title="Valor Solicitado"
						tooltipText="Soma dos valores totais dos itens solicitados
						(não pode ultrapassar o valor base do projeto)"
						value={requestedValue}
					/>

					<ProjectValue
						title="Valor da Contrapartida"
						tooltipText="% da contrapartida calculado em cima do valor solicitado"
						value={counterpartValue()}
					/>

					<ProjectValue
						title="Valor Total"
						tooltipText="Valor total do projeto, somando o valor soloicitado e o valor de contrapartida"
						value={totalValue()}
					/>
				</div>

				<div className="flex flex-col gap-2">
					<span className="text-muted-foreground text-sm">Ações</span>

					<div className="flex items-center gap-4">
						<ProjectPdfSheet projectId={project.id} />
						
						<Button className="bg-dark hover:bg-dark/90" disabled>
							Exportar PDF
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
