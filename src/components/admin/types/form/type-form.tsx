import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { FormInput } from "@/components/form/form-input";
import { LoaderCircle } from "lucide-react";
import { useCreateType } from "@/hooks/admin/types/use-create-type";
import { FormSelect } from "@/components/form/form-select";
import { TypeGroup } from "@/@types/type";
import { v4 as uuidv4 } from "uuid";

interface TypeFormProps {
	setIsTypeSheetOpen: (open: boolean) => void;
}

export function TypeForm({ setIsTypeSheetOpen }: TypeFormProps) {
	const { form, isAddingType } = useCreateType();
	const hasParent =
		form.watch("group") === TypeGroup.SUBCATEGORY ||
		form.watch("group") === TypeGroup.SUBSUBCATEGORY;

	const typeGroupOptions = [
		{ label: "Categoria", value: TypeGroup.CATEGORY },
		{ label: "Subcategoria", value: TypeGroup.SUBCATEGORY },
		{ label: "Subsubcategoria", value: TypeGroup.SUBSUBCATEGORY },
		{ label: "Oportunidade", value: TypeGroup.OPPORTUNITY },
	];

	const parentOptions = [
		{ label: "Arma de Fogo", value: uuidv4() },
		{ label: "Sistemas de Vigilância", value: uuidv4() },
		{ label: "Veículos de Patrulha", value: uuidv4() },
	];

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmitForm} className="space-y-12">
				<div className="flex flex-col gap-4">
					<FormInput
						form={form}
						entity="description"
						label="Nome"
						placeholder="Digite o nome do tipo"
					/>

					<FormSelect
						form={form}
						entity="group"
						label="Grupo"
						placeholder="Selecione o grupo"
						options={typeGroupOptions}
					/>

					{hasParent && (
						<FormSelect
							form={form}
							entity="parentId"
							label="Tipo Pai"
							placeholder="Selecione o tipo pai"
							options={parentOptions}
						/>
					)}
				</div>

				<div className="flex justify-end gap-2">
					<Button
						type="button"
						className="w-full max-w-[170px]"
						variant="outline"
						onClick={() => setIsTypeSheetOpen(false)}
					>
						Cancelar
					</Button>

					<Button className="w-full max-w-[170px]" type="submit">
						{isAddingType && <LoaderCircle className="mr-2 animate-spin" />}
						{!isAddingType && "Salvar"}
					</Button>
				</div>
			</form>
		</Form>
	);
}
