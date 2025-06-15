import { CircleProgressIcon } from "@/components/ui/circle-progress-icon";
import { Document } from "@/@schemas/project";

interface ProjectDocumentTopicsProps {
	document: Document;
}

export function ProjectDocumentTopics({
	document,
}: ProjectDocumentTopicsProps) {
	return (
		<div className="flex flex-col gap-6">
			<div className="flex items-center justify-between">
				<h2 className="text-xl font-semibold">Tópicos</h2>

				<span className="text-muted-foreground text-sm">
					0 de {document.fields.length} concluídos
				</span>
			</div>

			<div className="flex flex-col gap-4">
				{document.fields.map((field) => (
					<div key={field.id}>
						{!field.value && (
							<span

								className="text-sm font-medium text-muted-foreground"
							>
								{field.name}
							</span>
						)}

						{field.value && (
							<div  className="flex items-center gap-2">
								<CircleProgressIcon percentage={100} size={20} />

								<span className="text-sm font-medium">{field.name}</span>
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	);
}
