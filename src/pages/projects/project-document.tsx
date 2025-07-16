import { useParams } from "react-router";
import { ProjectDocumentContainer } from "@/components/projects/details/documents/project-document-container";
import { useGetProjectDocumentById } from "@/hooks/projects/use-get-project-document-by-id";
import { ProjectDocumentSkeleton } from "./project-document-skeleton";

export default function ProjectDocument() {
	const { projectId } = useParams<{ projectId: string }>();
	const { documentId } = useParams<{ documentId: string }>();

	const { projectDocument, isLoadingGetProjectDocumentById } =
		useGetProjectDocumentById(projectId ?? "", documentId ?? "");

	if (!projectId || !documentId) {
		return (
			<div className="w-full h-[300px] flex items-center justify-center">
				<span className="text-muted-foreground">Documento não encontrado</span>
			</div>
		);
	}

	if (isLoadingGetProjectDocumentById) return <ProjectDocumentSkeleton />;

	if (!projectDocument) {
		return (
			<div className="w-full h-[300px] flex items-center justify-center">
				<span className="text-muted-foreground">Documento não encontrado</span>
			</div>
		);
	}

	return (
		<main className="flex flex-col gap-6 py-6 h-full box-content">
			<ProjectDocumentContainer
				document={projectDocument}
				projectId={projectId}
			/>
		</main>
	);
}
