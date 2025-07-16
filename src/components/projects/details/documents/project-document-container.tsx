import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";
import type { ProjectDocument } from "@/hooks/projects/use-get-project-document-by-id";
import { ProjectDocumentField } from "./project-document-field";
import { ProjectDocumentPdfSheet } from "./project-document-pdf-sheet";
import { ProjectDocumentTopics } from "./project-document-topics";

interface ProjectDocumentProps {
	document: ProjectDocument;
	projectId: string;
}

export function ProjectDocumentContainer({
	document,
	projectId,
}: ProjectDocumentProps) {
	console.log(document);

	return (
		<div className="w-full flex flex-col gap-6">
			<div className="w-full flex items-center gap-2">
				<div className="cursor-pointer">
					<Link to={`/projetos/${projectId}`}>
						<ArrowLeft size={20} />
					</Link>
				</div>

				<h1 className="text-2xl font-semibold">{document.name}</h1>

				<ProjectDocumentPdfSheet document={document} />
			</div>

			<div className="grid grid-cols-3 gap-8">
				<ProjectDocumentTopics document={document} />

				<div className="col-span-2 flex flex-col">
					{document.fields.map((field) => (
						<ProjectDocumentField
							key={field.id}
							field={field}
							projectId={projectId}
							documentId={document.id}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
