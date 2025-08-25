import { ArrowLeft, Check, CheckCheck, LoaderCircle } from "lucide-react";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { useAcceptFieldValueSuggestion } from "@/hooks/projects/use-accept-field-value-suggestion";
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
	const { acceptFieldValueSuggestionFn, isLoadingAcceptFieldValueSuggestion } =
		useAcceptFieldValueSuggestion();

	const fieldsWithPendingSuggestions = document.fields.filter(
		(field) => field.value && !field.ready
	);

	const hasFieldsWithSuggestions = fieldsWithPendingSuggestions.length > 0;

	const handleAcceptAllSuggestions = async () => {
		try {
			for (const field of fieldsWithPendingSuggestions) {
				await acceptFieldValueSuggestionFn({
					projectId,
					fieldId: field.id,
					documentId: document.id,
				});
			}
		} catch (error) {
			console.error("Error accepting all suggestions:", error);
		}
	};

	return (
		<div className="w-full flex flex-col gap-6">
			<div className="w-full flex items-center gap-2">
				<div className="cursor-pointer">
					<Link to={`/projetos/${projectId}`}>
						<ArrowLeft size={20} />
					</Link>
				</div>

				<h1 className="text-2xl font-semibold">{document.name}</h1>

				<div className="flex items-center gap-2 ml-auto">
					{hasFieldsWithSuggestions && (
						<Button
							variant="outline"
							onClick={handleAcceptAllSuggestions}
							disabled={isLoadingAcceptFieldValueSuggestion}
							className="ml-auto mr-2"
						>
							{isLoadingAcceptFieldValueSuggestion ? (
								<LoaderCircle className="animate-spin mr-2" size={16} />
							) : (
								<CheckCheck className="mr-2" size={16} />
							)}
							Aceitar Tudo
						</Button>
					)}

					<ProjectDocumentPdfSheet document={document} />
				</div>
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
