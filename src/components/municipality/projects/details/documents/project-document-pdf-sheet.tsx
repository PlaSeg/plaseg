import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Eye } from "lucide-react";
import { Document } from "@/@schemas/project";
import ProjectDocumentPdf from "./project-document-pdf";

export function ProjectDocumentPdfSheet({ document }: { document: Document }) {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant="outline" className="ml-auto">
					<Eye />
					Vizualizar Documento
				</Button>
			</SheetTrigger>

			<SheetContent
				className="!max-w-max outline-none overflow-y-scroll py-6"
				side="right"
			>
				<ProjectDocumentPdf document={document} />
			</SheetContent>
		</Sheet>
	);
}
