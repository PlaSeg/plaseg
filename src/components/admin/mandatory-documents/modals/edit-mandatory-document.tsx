import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { SquarePen } from "lucide-react";
import { MandatoryDocumentForm } from "../form/mandatory-document-form";
import { useEditMandatoryDocument } from "@/hooks/admin/mandatory-documents/use-edit-mandatory-document";

export function EditMandatoryDocumentSheet() {
	const { isEditDocumentSheetOpen, setIsEditDocumentSheetOpen } =
		useEditMandatoryDocument();

	return (
		<Sheet
			open={isEditDocumentSheetOpen}
			onOpenChange={setIsEditDocumentSheetOpen}
		>
			<SheetTrigger asChild>
				<Button variant="outline" size="icon" disabled>
					<SquarePen />
					<span className="sr-only">Editar</span>
				</Button>
			</SheetTrigger>

			<SheetContent className="w-full md:max-w-[500px] outline-none overflow-y-auto flex flex-col gap-6">
				<SheetHeader>
					<SheetTitle>Editar Documento Obrigatório</SheetTitle>
					<SheetDescription>Faça alterações no documento </SheetDescription>
				</SheetHeader>

				<MandatoryDocumentForm
					setIsDocumentSheetOpen={setIsEditDocumentSheetOpen}
				/>
			</SheetContent>
		</Sheet>
	);
}
