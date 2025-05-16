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
import { MandatoryDocumentForm } from "../form/mandatory-document-form";
import { useCreateType } from "@/hooks/admin/types/use-create-type"; //

interface CreateDocumentSheetProps {
	className?: string;
}

export function CreateMandatoryDocumentSheet({
	className,
}: CreateDocumentSheetProps) {
	const { isCreateTypeSheetOpen, setIsCreateTypeSheetOpen } = useCreateType(); //

	return (
		<Sheet open={isCreateTypeSheetOpen} onOpenChange={setIsCreateTypeSheetOpen}>
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

				<MandatoryDocumentForm
					setIsDocumentSheetOpen={setIsCreateTypeSheetOpen}
				/>
			</SheetContent>
		</Sheet>
	);
}
