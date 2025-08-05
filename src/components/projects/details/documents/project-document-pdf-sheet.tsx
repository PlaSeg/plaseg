import { Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import type { ProjectDocument } from "@/hooks/projects/use-get-project-document-by-id";
import { JustificationPDF } from "../pdfs/justification/justification-pdf";
import { PDFPreview } from "./pdf-preview";

const projectDocuments = [
	"Justificativa Completa do Projeto",
	"Sustentabilidade e Localização de Bens do Projeto",
	"Declaração de Contrapartida",
	"Cronograma de Execução",
	"Termo de Referência",
	"Relatório Detalhado de Monitoramento e Avaliação",
	"Planilha de Pesquisa de Preços",
];

interface ProjectDocumentPdfSheetProps {
	document: ProjectDocument;
}

export function ProjectDocumentPdfSheet({
	document,
}: ProjectDocumentPdfSheetProps) {
	return (
		<Sheet open={true}>
			<SheetTrigger asChild>
				<Button variant="outline" className="ml-auto">
					<Eye />
					Visualizar Documento
				</Button>
			</SheetTrigger>

			<SheetContent
				className="!max-w-[800px] !w-[800px] outline-none overflow-y-scroll py-6"
				side="right"
			>
				{document.name === projectDocuments[0] && (
					<PDFPreview
						pdfName={projectDocuments[0]}
						pdfPath={<JustificationPDF document={document} />}
					/>
				)}
			</SheetContent>
		</Sheet>
	);
}
