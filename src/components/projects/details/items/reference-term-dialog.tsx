import { LoaderCircle } from "lucide-react";
import type { Project } from "@/@schemas/project";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { useGenerateExecutionScheduleDocument } from "@/hooks/projects/use-generate-execution-schedule";
import { useGenerateTermsOfReferenceDocument } from "@/hooks/projects/use-generate-terms-of-reference";

interface CompleteItemSelectionDialogProps {
	project: Project;
}

export function CompleteItemSelectionDialog({
	project,
}: CompleteItemSelectionDialogProps) {
	const {
		generateTermsOfReferenceDocumentFn,
		isLoadingGenerateTermsOfReferenceDocument,
	} = useGenerateTermsOfReferenceDocument(project.id);
	const {
		generateExecutionScheduleDocumentFn,
		isLoadingGenerateExecutionScheduleDocument,
		isConfirmationDialogOpen,
		setIsConfirmationDialogOpen,
	} = useGenerateExecutionScheduleDocument(project.id);

	function handleConfirm() {
		generateTermsOfReferenceDocumentFn({ projectId: project.id });
		generateExecutionScheduleDocumentFn({ projectId: project.id });
	}

	return (
		<Dialog
			open={isConfirmationDialogOpen}
			onOpenChange={setIsConfirmationDialogOpen}
		>
			<DialogTrigger asChild>
				<Button
					variant="outline"
					disabled={project.requestedItems.length === 0}
				>
					Concluir seleção de itens
				</Button>
			</DialogTrigger>

			<DialogContent className="sm:max-w-[425px] space-y-4">
				<DialogHeader>
					<DialogTitle>Concluir seleção de itens</DialogTitle>
				</DialogHeader>

				<span className="text-zinc-600">
					Você confirma que adicionou corretamente todos os itens que serão
					solicitados no projeto?
				</span>

				<DialogFooter className="flex gap-2">
					<DialogClose asChild>
						<Button variant="outline">Cancelar</Button>
					</DialogClose>

					<Button
						className="bg-slate-950 hover:bg-slate-950/90 outline-none"
						onClick={handleConfirm}
						disabled={
							isLoadingGenerateTermsOfReferenceDocument ||
							isLoadingGenerateExecutionScheduleDocument ||
							project.requestedItems.length === 0
						}
					>
						{isLoadingGenerateTermsOfReferenceDocument ||
							(isLoadingGenerateExecutionScheduleDocument && (
								<LoaderCircle className="animate-spin" />
							))}
						Confirmar e Gerar
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
