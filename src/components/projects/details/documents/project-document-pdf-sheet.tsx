import { Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import type { ProjectDocument } from "@/hooks/projects/use-get-project-document-by-id";
import { CounterpartPDF } from "../pdfs/counterpart/counterpart-pdf";
import { JustificationPDF } from "../pdfs/justification/justification-pdf";
import { MonitoringReportPDF } from "../pdfs/monitoring-report/monitoring-report-pdf";
import { SustainabilityPDF } from "../pdfs/sustentability/sustentability-pdf";
import { TermsOfReferencePDF } from "../pdfs/terms-of-reference/terms-of-reference-pdf";
import { PDFPreview } from "./pdf-preview";

const projectDocuments = [
	{
		name: "Justificativa Completa do Projeto",
		pdf: JustificationPDF,
	},
	{
		name: "Sustentabilidade e Localização de Bens do Projeto",
		pdf: SustainabilityPDF,
	},
	{
		name: "Declaração de Contrapartida",
		pdf: CounterpartPDF,
	},
	{
		name: "Termo de Referência",
		pdf: TermsOfReferencePDF,
	},
	{
		name: "Cronograma de Execução",
	},
	{
		name: "Relatório Detalhado de Monitoramento e Avaliação",
		pdf: MonitoringReportPDF,
	},
	{
		name: "Planilha de Pesquisa de Preços",
	},
];

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
				className="!max-w-[800px] !w-[800px] outline-none overflow-y-scroll py-6"
				side="right"
			>
				{projectDocuments.map((projectDocument) => {
					if (projectDocument.pdf) {
						if (projectDocument.name === document.name) {
							return (
								<PDFPreview
									key={projectDocument.name}
									pdfName={projectDocument.name}
									pdfPath={<JustificationPDF document={document} />}
								/>
							);
						}
					}
				})}
			</SheetContent>
		</Sheet>
	);
}
