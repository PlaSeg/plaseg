import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { Plus } from "lucide-react";
import { RequiredDocumentForm } from "../form/required-document-form";
import { useCreateRequiredDocument } from "@/hooks/admin/mandatory-documents/use-create-required-document";

interface CreateDocumentSheetProps {
	className?: string;
}

export function CreateRequiredDocumentSheet({
	className,
}: CreateDocumentSheetProps) {
	const {
		form,
		isAddingRequiredDocument,
		isCreateRequiredDocumentSheetOpen,
		setIsCreateRequiredDocumentSheetOpen,
	} = useCreateRequiredDocument();

	return (
		<Sheet
			open={isCreateRequiredDocumentSheetOpen}
			onOpenChange={setIsCreateRequiredDocumentSheetOpen}
		>
			<SheetTrigger asChild>
				<Button className={className}>
					<Plus />
					Adicionar Documento
				</Button>
			</SheetTrigger>

			<SheetContent className="w-full md:max-w-[500px] outline-none overflow-y-auto flex flex-col gap-6">
				<SheetHeader>
					<SheetTitle>Novo Documento obrigatório</SheetTitle>
					<SheetDescription>
						Adicione um novo documento obrigatório.
					</SheetDescription>
				</SheetHeader>

				<RequiredDocumentForm
					form={form}
					isLoading={isAddingRequiredDocument}
					setIsFormOpen={setIsCreateRequiredDocumentSheetOpen}
				/>
			</SheetContent>
		</Sheet>
	);
}
