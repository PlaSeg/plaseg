import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { FormInput } from "@/components/form/form-input";
import { LoaderCircle } from "lucide-react";
import { useCreateType } from "@/hooks/admin/types/use-create-type";
import { FormSelect } from "@/components/form/form-select";
import { TypeGroup } from "@/@types/admin/type";
import { useGetTypes } from "@/hooks/admin/types/use-get-types";
import { useState } from "react";
import { SetHasParentCheckbox } from "./set-has-parent-checkbox";

interface TypeFormProps {
	setIsTypeSheetOpen: (open: boolean) => void;
}

export function TypeForm({ setIsTypeSheetOpen }: TypeFormProps) {
	const [hasParent, setHasParent] = useState(false);
	const { form, isAddingType } = useCreateType();
	const { types } = useGetTypes({
		group: TypeGroup.CATEGORY,
	});

	const typeGroupOptions = [
		{ label: "Oportunidade", value: TypeGroup.OPPORTUNITY },
		{ label: "Serviço", value: TypeGroup.SERVICE },
		{ label: "Categoria", value: TypeGroup.CATEGORY },
	];

	const parentOptions = types
		.filter((type) => type.group === TypeGroup.CATEGORY)
		.map((type) => ({
			label: type.description,
			value: type.id,
		}));

	const isButtonDisabled = hasParent && !form.watch("parentId");

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

					{form.watch("group") === TypeGroup.CATEGORY && (
						<>
							<SetHasParentCheckbox
								hasParent={hasParent}
								setHasParent={setHasParent}
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
						</>
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

					<Button
						className="w-full max-w-[170px]"
						type="submit"
						disabled={isAddingType || isButtonDisabled}
					>
						{isAddingType && <LoaderCircle className="mr-2 animate-spin" />}
						{!isAddingType && "Salvar"}
					</Button>
				</div>
			</form>
		</Form>
	);
}
