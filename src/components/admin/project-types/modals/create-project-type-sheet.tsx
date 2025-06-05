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
import { CreateProjectTypeForm } from "../form/create-project-type-form";
import { useCreateProjectType } from "@/hooks/admin/project-types/use-create-project-type";

interface CreateProjectTypeSheetProps {
	className?: string;
}

export function CreateProjectTypeSheet({
	className,
}: CreateProjectTypeSheetProps) {
	const { isCreateProjectTypeSheetOpen, setIsCreateProjectTypeSheetOpen } =
		useCreateProjectType();

	return (
		<Sheet
			open={isCreateProjectTypeSheetOpen}
			onOpenChange={setIsCreateProjectTypeSheetOpen}
		>
			<SheetTrigger asChild>
				<Button className={className}>
					<Plus />
					Adicionar Tipo de Projeto
				</Button>
			</SheetTrigger>

			<SheetContent className="w-full md:max-w-[600px] outline-none overflow-y-auto flex flex-col gap-6">
				<SheetHeader>
					<SheetTitle>Novo Tipo de Projeto</SheetTitle>
					<SheetDescription>Adicione um novo tipo de projeto.</SheetDescription>
				</SheetHeader>

				<CreateProjectTypeForm
					setIsCreateProjectTypeSheetOpen={setIsCreateProjectTypeSheetOpen}
				/>
			</SheetContent>
		</Sheet>
	);
}
