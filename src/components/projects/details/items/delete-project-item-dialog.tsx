import { AlertCircle, LoaderCircle, Trash } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { useDeleteProjectItem } from "@/hooks/projects/use-delete-project-item";

interface DeleteItemDialogProps {
	projectId: string;
	requestedItemName: string;
	requestedItemId: string;
}

export function DeleteItemDialog({
	projectId,
	requestedItemId,
	requestedItemName,
}: DeleteItemDialogProps) {
	const [isOpen, setIsOpen] = useState(false);
	const { deleteProjectItemFn, isLoadingDeleteProjectItem } =
		useDeleteProjectItem();

	const handleDelete = async () => {
		try {
			await deleteProjectItemFn({ projectId, requestedItemId });
			setIsOpen(false);
		} catch (error) {
			console.error("Erro ao excluir item:", error);
		}
	};

	return (
		<Dialog open={isOpen} onOpenChange={setIsOpen}>
			<DialogTrigger asChild>
				<Button size="icon" variant="outline">
					<Trash />
				</Button>
			</DialogTrigger>

			<DialogContent className="w-[400px] space-y-4">
				<DialogHeader>
					<div className="flex flex-col text-center items-center gap-3">
						<div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
							<AlertCircle className="h-8 w-8 text-red-600" />
						</div>

						<div className="space-y-2">
							<DialogTitle>Você tem certeza?</DialogTitle>

							<DialogDescription>
								Tem certeza que deseja excluir o item <b>{requestedItemName}</b>{" "}
								do projeto?
							</DialogDescription>
						</div>
					</div>
				</DialogHeader>

				<DialogFooter className="grid grid-cols-2">
					<Button
						variant="secondary"
						onClick={() => setIsOpen(false)}
						disabled={isLoadingDeleteProjectItem}
					>
						Cancelar
					</Button>

					<Button
						variant="destructive"
						onClick={handleDelete}
						disabled={isLoadingDeleteProjectItem}
					>
						{isLoadingDeleteProjectItem && (
							<LoaderCircle className="animate-spin" />
						)}
						Excluir
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
