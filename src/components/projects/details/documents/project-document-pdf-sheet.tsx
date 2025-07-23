import { Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import type { ProjectDocument } from "@/hooks/projects/use-get-project-document-by-id";
import { DefaultDocument } from "../pdfs/default-document";

interface ProjectDocumentPdfSheetProps {
	document: ProjectDocument;
}

export function ProjectDocumentPdfSheet({
	document,
}: ProjectDocumentPdfSheetProps) {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant="outline" className="ml-auto">
					<Eye />
					Visualizar Documento
				</Button>
			</SheetTrigger>

			<SheetContent
				className="!max-w-max outline-none overflow-y-scroll py-6"
				side="right"
			>
				{document.name === "Justificativa Completa do Projeto" && (
					<DefaultDocument document={document} />
				)}

				{document.name ===
					"Sustentabilidade e Localização de Bens do Projeto" && (
					<DefaultDocument document={document} />
				)}

				{document.name === "Declaração de Contrapartida" && (
					<DefaultDocument document={document} />
				)}
			</SheetContent>
		</Sheet>
	);
}
