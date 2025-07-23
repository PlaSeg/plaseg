import { SquarePen } from "lucide-react";
import { Link } from "react-router";
import type { Document } from "@/@schemas/project";
import { Button } from "@/components/ui/button";
import { CircleProgressIcon } from "@/components/ui/circle-progress-icon";

interface ProjectDocumentCardProps {
	projectId: string;
	document: Document;
}

export function ProjectDocumentCard({
	projectId,
	document,
}: ProjectDocumentCardProps) {
	return (
		<div
			className="bg-white rounded-lg border border-slate-200 p-6
					flex justify-between items-center gap-4"
		>
			<div className="flex items-center gap-4">
				<CircleProgressIcon
					percentage={(document.readyFields / document.fields) * 100}
				/>

				<div className="flex flex-col">
					<strong className="font-medium">{document.name}</strong>

					<span className="text-muted-foreground text-sm">
						{document.readyFields} de {document.fields} concluídos
					</span>
				</div>
			</div>

			<Button variant="outline" size="icon" asChild>
				<Link to={`/projetos/${projectId}/documentos/${document.id}`}>
					<SquarePen />
				</Link>
			</Button>
		</div>
	);
}
