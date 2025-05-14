import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { AdministratorForm } from "../form/administrator-form";
import { useUpdateAdministrator } from "@/hooks/admin/administrators/use-update-administrator";
import { useGetAdministrators } from "@/hooks/admin/administrators/use-get-administrators";
import { UpdateAdministratorRequest } from "@/@schemas/administrator";

interface UpdateAdministratorModalProps {
	administratorId: string | null;
	open: boolean;
	onOpenChange: (open: boolean) => void;
}

export function UpdateAdministratorModal({
	administratorId,
	open,
	onOpenChange,
}: UpdateAdministratorModalProps) {
	const { data: administrators } = useGetAdministrators();
	const { mutate: updateAdministrator, isPending } = useUpdateAdministrator();

	const administrator = administrators?.find(
		(administrator) => administrator.id === administratorId
	);

	function handleSubmit(data: UpdateAdministratorRequest) {
		if (!administratorId) return;

		updateAdministrator(
			{
				id: administratorId,
				data,
			},
			{
				onSuccess: () => onOpenChange(false),
			}
		);
	}

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Atualizar administrador</DialogTitle>
				</DialogHeader>

				{administrator && (
					<AdministratorForm
						onSubmit={handleSubmit}
						isLoading={isPending}
						defaultValues={{
							name: administrator.name,
							email: administrator.email,
							document: administrator.document,
							phone: administrator.phone,
							role: administrator.role,
						}}
					/>
				)}
			</DialogContent>
		</Dialog>
	);
}
