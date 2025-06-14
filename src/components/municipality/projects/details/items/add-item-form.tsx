import { AddRequestedItemRequest } from "@/@schemas/project";
import { FormInput } from "@/components/form/form-input";
import { FormSelect } from "@/components/form/form-select";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { LoaderCircle } from "lucide-react";
import { UseFormReturn } from "react-hook-form";

interface AddItemFormProps {
	form: UseFormReturn<AddRequestedItemRequest> & {
		handleSubmitForm: () => void;
	};
	setIsFormOpen: (open: boolean) => void;
	isLoading: boolean;
}

export function AddItemForm({
	setIsFormOpen,
	form,
	isLoading,
}: AddItemFormProps) {
	return (
		<Form {...form}>
			<div className="shadow-none border-muted rounded-lg flex flex-col gap-6">
				<form onSubmit={form.handleSubmitForm} className="space-y-8">
					<div className="space-y-4">
						<FormInput
							form={form}
							entity="quantity"
							label="Quantidade"
							placeholder="Digite a quantidade do item"
						/>

						<FormSelect
							form={form}
							entity="baseProductId"
							label="Produto"
							placeholder="Selecione o produto"
							options={[]}
						/>

						<FormSelect
							form={form}
							entity="allocationDepartmentId"
							label="Departamento de alocação"
							placeholder="Selecione o departamento de alocação"
							options={[]}
						/>

						<FormSelect
							form={form}
							entity="maintenanceContractId"
							label="Contrato de manutenção"
							placeholder="Selecione o contrato de manutenção"
							options={[]}
						/>
					</div>

					<div className="flex justify-end gap-2">
						<Button
							type="button"
							className="w-full max-w-[170px]"
							variant="outline"
							onClick={() => setIsFormOpen(false)}
							disabled={isLoading}
						>
							Cancelar
						</Button>

						<Button
							className="w-full max-w-[170px] bg-slate-950 hover:bg-slate-950/90"
							type="submit"
							disabled={isLoading}
						>
							{isLoading && (
								<LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
							)}

							{!isLoading && "Adicionar Item"}
						</Button>
					</div>
				</form>
			</div>
		</Form>
	);
}
