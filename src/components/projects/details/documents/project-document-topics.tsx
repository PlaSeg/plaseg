import { CircleProgressIcon } from "@/components/ui/circle-progress-icon";
import type { ProjectDocument } from "@/hooks/projects/use-get-project-document-by-id";

interface ProjectDocumentTopicsProps {
	document: ProjectDocument;
}

export function ProjectDocumentTopics({
	document,
}: ProjectDocumentTopicsProps) {
	return (
		<div className="flex flex-col gap-4 text-sm">
			{document.fields.map((field) => {
				if (field.isTitle || !field.parentId) {
					return (
						<div key={field.id} className="flex items-center gap-2">
							<div className="min-w-5 min-h-5">
								<CircleProgressIcon
									percentage={field.ready ? 100 : 0}
									size={18}
								/>
							</div>
							<strong>{field.name}</strong>
						</div>
					);
				}

				return (
					<div key={field.id} className="flex items-center gap-2 ml-4">
						<div className="min-w-5 min-h-5">
							<CircleProgressIcon
								percentage={field.ready ? 100 : 0}
								size={18}
							/>
						</div>
						<span className="text-muted-foreground">{field.name}</span>
					</div>
				);
			})}
		</div>
	);
}
