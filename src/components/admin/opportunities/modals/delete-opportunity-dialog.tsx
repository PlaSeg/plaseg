import { useDeleteOpportunity } from "@/hooks/admin/use-delete-opportunity";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { LoaderCircle, Trash2, TriangleAlert } from "lucide-react";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

interface DeleteOpportunityDialogProps {
	opportunityName: string;
	opportunityId: string;
}

export function DeleteOpportunityDialog({
	opportunityName,
	opportunityId,
}: DeleteOpportunityDialogProps) {
	const { deleteOpportunityFn, isLoadingDeleteOpportunity } =
		useDeleteOpportunity();

	return (
		<Dialog>
			<DialogTrigger className="w-full">
				<DropdownMenuItem
					className="text-red-500 focus:text-red-500 hover:text-red-500"
					onSelect={(e) => e.preventDefault()}
				>
					<Trash2 className="text-red-500 h-4 w-4" />
					Excluir
				</DropdownMenuItem>
			</DialogTrigger>

			<DialogContent className="w-[400px]">
				<div className="flex flex-col gap-2 w-full items-center text-center">
					<div className="p-3 rounded-full bg-red-50 dark:bg-red-900 max-w-max flex ">
						<TriangleAlert className="w-8 h-8 text-red-500 dark:text-red-300" />
					</div>

					<h2 className="text-xl font-bold">Você tem certeza?</h2>

					<span className="text-muted-foreground text-sm">
						Tem certeza que quer excluir a oportunidade{" "}
						<span className="font-bold">{opportunityName}</span>? Essa ação não
						pode ser desfeita.
					</span>

					<Button
						onClick={() => deleteOpportunityFn(opportunityId)}
						disabled={isLoadingDeleteOpportunity}
						variant="destructive"
						className="w-full mt-4 !outline-none"
					>
						{isLoadingDeleteOpportunity && (
							<LoaderCircle className="animate-spin" />
						)}
						Excluir oportunidade
					</Button>
				</div>
			</DialogContent>
		</Dialog>
	);
}
