import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { AdministratorForm } from "../form/administrator-form";
import { useCreateAdministrator } from "@/hooks/admin/administrators/use-create-administrator";
import { CreateAdministratorRequest } from "@/@schemas/administrator";

interface CreateAdministratorModalProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
}

export function CreateAdministratorModal({
	open,
	onOpenChange,
}: CreateAdministratorModalProps) {
	const { mutate: createAdministrator, isPending } = useCreateAdministrator();

	function handleSubmit(data: CreateAdministratorRequest) {
		createAdministrator(data, {
			onSuccess: () => onOpenChange(false),
		});
	}

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Criar administrador</DialogTitle>
				</DialogHeader>

				<AdministratorForm onSubmit={handleSubmit} isLoading={isPending} />
			</DialogContent>
		</Dialog>
	);
}
