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
import { RequiredDocumentForm } from "../form/required-document-form";
import { useEditRequiredDocument } from "@/hooks/admin/mandatory-documents/use-edit-required-document";
import { RequiredDocument } from "@/@types/admin/required-document";

interface EditRequiredDocumentSheetProps {
	requiredDocument: RequiredDocument;
}

export function EditRequiredDocumentSheet({
	requiredDocument,
}: EditRequiredDocumentSheetProps) {
	const {
		form,
		isEditingRequiredDocument,
		isEditRequiredDocumentSheetOpen,
		setIsEditRequiredDocumentSheetOpen,
	} = useEditRequiredDocument(requiredDocument);

	return (
		<Sheet
			open={isEditRequiredDocumentSheetOpen}
			onOpenChange={setIsEditRequiredDocumentSheetOpen}
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

				<RequiredDocumentForm
					form={form}
					setIsFormOpen={setIsEditRequiredDocumentSheetOpen}
					isLoading={isEditingRequiredDocument}
				/>
			</SheetContent>
		</Sheet>
	);
}
