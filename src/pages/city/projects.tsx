import { KanbanSquare } from "lucide-react";

export default function Projects() {
	return (
		<div className="flex flex-col p-4 min-h-full">
			<div
				className="flex-1 flex flex-col gap-2 items-center justify-center w-full border rounded-lg
			border-dashed"
			>
				<div className="w-20 h-20 flex items-center justify-center rounded-full bg-muted">
					<KanbanSquare size={48} strokeWidth={1} />
				</div>

				<h2 className="text-xl font-semibold">Projetos</h2>

				<span className="text-muted-foreground">Página não disponível</span>
			</div>
		</div>
	);
}
