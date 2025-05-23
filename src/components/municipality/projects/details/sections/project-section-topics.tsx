import { CircleProgressIcon } from "@/components/ui/circle-progress-icon";

export function ProjectSectionTopics() {
	return (
		<div className="flex flex-col gap-6">
			<div className="flex items-center justify-between">
				<h2 className="text-xl font-semibold">Tópicos</h2>

				<span className="text-muted-foreground text-sm">3 de 6 concluídos</span>
			</div>

			<div className="flex flex-col gap-4">
				<div className="flex items-center gap-2">
					<CircleProgressIcon percentage={0} size={20} />
					<span className="text-sm font-medium">Informações gerais</span>
				</div>

				<span className="text-sm font-medium text-muted-foreground">Justificativa</span>

				<div className="flex items-center gap-2">
					<CircleProgressIcon percentage={100} size={20} />
					<span className="text-sm font-medium">
						Caracterização dos interesses recíprocos
					</span>
				</div>

				<div className="flex items-center gap-2">
					<CircleProgressIcon percentage={100} size={20} />
					<span className="text-sm font-medium">Indicação do público alvo</span>
				</div>
			</div>
		</div>
	);
}
