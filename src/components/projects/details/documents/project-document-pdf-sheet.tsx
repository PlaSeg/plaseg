import { Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import type { ProjectDocument } from "@/hooks/projects/use-get-project-document-by-id";
import { CounterpartPDF } from "../pdfs/counterpart";
import { JustificationPDF } from "../pdfs/justification";
import { SustainabilityPDF } from "../pdfs/sustainability";
import { TermsOfReferencePDF } from "../pdfs/terms-of-reference";
import { ExecutionSchedulePDF } from "../pdfs/execution-schedule";

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
					<JustificationPDF document={document} />
				)}

				{document.name ===
					"Sustentabilidade e Localização de Bens do Projeto" && (
					<SustainabilityPDF document={document} />
				)}

				{document.name === "Declaração de Contrapartida" && (
					<CounterpartPDF document={document} />
				)}

				{document.name === "Termo de Referência" && (
					<TermsOfReferencePDF document={document} />
				)}

				{document.name === "Cronograma de Execução" && (
					<ExecutionSchedulePDF document={document} />
				)}
			</SheetContent>
		</Sheet>
	);
}
