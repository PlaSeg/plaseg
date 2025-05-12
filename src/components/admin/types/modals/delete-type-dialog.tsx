import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Trash2, TriangleAlert } from "lucide-react";

interface DeleteTypeDialogProps {
	typeName: string;
	typeId: string;
}

export function DeleteTypeDialog({ typeName }: DeleteTypeDialogProps) {
	return (
		<Dialog>
			<DialogTrigger>
				<Button
					size="icon"
					variant="outline"
					className="text-red-500 hover:bg-red-500 hover:!text-white"
				>
					<Trash2 />
				</Button>
			</DialogTrigger>

			<DialogContent className="w-[400px]">
				<div className="flex flex-col gap-2 w-full items-center text-center">
					<div className="p-3 rounded-full bg-red-50 dark:bg-red-900 max-w-max flex ">
						<TriangleAlert className="w-8 h-8 text-red-500 dark:text-red-300" />
					</div>

					<h2 className="text-xl font-bold">Você tem certeza?</h2>

					<span className="text-muted-foreground text-sm">
						Tem certeza que quer excluir o tipo{" "}
						<span className="font-bold">{typeName}</span>? Essa ação não pode
						ser desfeita.
					</span>

					<Button variant="destructive" className="w-full mt-4 !outline-none">
						Excluir tipo
					</Button>
				</div>
			</DialogContent>
		</Dialog>
	);
}
