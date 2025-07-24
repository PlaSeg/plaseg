import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderCircle, SquarePen } from "lucide-react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FormInput } from "@/components/form/form-input";
import { FormSelect } from "@/components/form/form-select";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import { useEditProjectItem } from "@/hooks/projects/use-edit-project-item";
import { useGetAllocationDepartments } from "@/hooks/projects/use-get-allocation-departments";
import { useGetMaintenanceContracts } from "@/hooks/projects/use-get-maintenance-contracts";
import { FormInputSkeleton } from "./form-input-skeleton";

const editProjectItemSchema = z.object({
	quantity: z.coerce.number().min(1, "Quantidade deve ser maior que 0"),
	allocationDepartmentId: z
		.string()
		.min(1, "Departamento de alocação é obrigatório"),
	maintenanceContractId: z
		.string()
		.min(1, "Contrato de manutenção é obrigatório"),
});

type EditProjectItemRequest = z.infer<typeof editProjectItemSchema>;

interface EditProjectItemDialogProps {
	projectId: string;
	requestedItemId: string;
	initialData: {
		quantity: number;
		allocationDepartmentId: string;
		maintenanceContractId: string;
	};
}

export function EditProjectItemDialog({
	projectId,
	requestedItemId,
	initialData,
}: EditProjectItemDialogProps) {
	const {
		editProjectItemFn,
		isLoadingEditProjectItem,
		isEditProjectItemDialogOpen,
		setIsEditProjectItemDialogOpen,
	} = useEditProjectItem();

	const { maintenanceContracts, isLoadingGetMaintenanceContracts } =
		useGetMaintenanceContracts();
	const { allocationDepartments, isLoadingGetAllocationDepartments } =
		useGetAllocationDepartments();

	const form = useForm<EditProjectItemRequest>({
		resolver: zodResolver(editProjectItemSchema),
		defaultValues: {
			quantity: initialData.quantity,
			allocationDepartmentId: initialData.allocationDepartmentId,
			maintenanceContractId: initialData.maintenanceContractId,
		},
	});

	const handleSubmitForm = async (data: EditProjectItemRequest) => {
		try {
			await editProjectItemFn({
				projectId,
				requestedItemId,
				...data,
			});
			setIsEditProjectItemDialogOpen(false);
			form.reset();
		} catch (error) {
			console.error("Erro ao editar item:", error);
		}
	};

	useEffect(() => {
		if (isEditProjectItemDialogOpen) {
			form.reset({
				quantity: initialData.quantity,
				allocationDepartmentId: initialData.allocationDepartmentId,
				maintenanceContractId: initialData.maintenanceContractId,
			});
		}
	}, [isEditProjectItemDialogOpen, initialData, form]);

	return (
		<Dialog
			open={isEditProjectItemDialogOpen}
			onOpenChange={setIsEditProjectItemDialogOpen}
		>
			<DialogTrigger asChild>
				<Button size="icon" variant="outline">
					<SquarePen />
				</Button>
			</DialogTrigger>

			<DialogContent>
				<DialogHeader>
					<DialogTitle>Editar Item</DialogTitle>
					<DialogDescription>
						Edite as informações do item do projeto.
					</DialogDescription>
				</DialogHeader>

				<Form {...form}>
					<div className="shadow-none border-muted rounded-lg flex flex-col gap-6">
						<form
							onSubmit={form.handleSubmit(handleSubmitForm)}
							className="space-y-8"
						>
							<div className="space-y-4">
								<FormInput
									form={form}
									type="number"
									entity="quantity"
									label="Quantidade"
									placeholder="Digite a quantidade do item"
								/>

								{isLoadingGetAllocationDepartments && (
									<FormInputSkeleton
										label="Departamento de alocação"
										message="Carregando departamentos de alocação..."
									/>
								)}

								{!isLoadingGetAllocationDepartments && (
									<FormSelect
										form={form}
										entity="allocationDepartmentId"
										label="Departamento de alocação"
										placeholder="Selecione o departamento de alocação"
										options={allocationDepartments.map((department) => ({
											label: department.description,
											value: department.id,
										}))}
									/>
								)}

								{isLoadingGetMaintenanceContracts && (
									<FormInputSkeleton
										label="Contrato de manutenção"
										message="Carregando contratos de manutenção..."
									/>
								)}

								{!isLoadingGetMaintenanceContracts && (
									<FormSelect
										form={form}
										entity="maintenanceContractId"
										label="Contrato de manutenção"
										placeholder="Selecione o contrato de manutenção"
										options={maintenanceContracts.map((contract) => ({
											label: contract.description,
											value: contract.id,
										}))}
									/>
								)}
							</div>

							<div className="flex justify-end gap-2">
								<Button
									type="button"
									className="w-full max-w-[170px]"
									variant="outline"
									onClick={() => setIsEditProjectItemDialogOpen(false)}
									disabled={isLoadingEditProjectItem}
								>
									Cancelar
								</Button>

								<Button
									className="w-full max-w-[170px] bg-slate-950 hover:bg-slate-950/90"
									type="submit"
									disabled={isLoadingEditProjectItem}
								>
									{isLoadingEditProjectItem && (
										<LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
									)}
									{!isLoadingEditProjectItem && "Salvar Alterações"}
								</Button>
							</div>
						</form>
					</div>
				</Form>
			</DialogContent>
		</Dialog>
	);
}
