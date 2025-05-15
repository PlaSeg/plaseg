import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { FormInput } from "@/components/form/form-input";
import { LoaderCircle } from "lucide-react";
import { useCreateMandatoryDocument } from "@/hooks/admin/mandatory-documents/use-create-mandatory-document";

interface MandatoryDocumentFormProps {
	setIsDocumentSheetOpen: (open: boolean) => void;
}

export function MandatoryDocumentForm({
	setIsDocumentSheetOpen,
}: MandatoryDocumentFormProps) {
	const { form, isAddingMandatoryDocument } = useCreateMandatoryDocument();

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmitForm} className="space-y-12">
				<div className="flex flex-col gap-4">
					<FormInput
						form={form}
						entity="name"
						label="Nome"
						placeholder="Digite o nome do documento"
					/>

					<FormInput
						form={form}
						entity="description"
						label="Descrição"
						placeholder="Digite uma descrição"
					/>

					<FormInput
						form={form}
						entity="model"
						label="Modelo"
						placeholder="Insira um modelo do documento"
					/>
				</div>

				<div className="flex justify-end gap-2">
					<Button
						type="button"
						className="w-full max-w-[170px]"
						variant="outline"
						onClick={() => setIsDocumentSheetOpen(false)}
					>
						Cancelar
					</Button>

					<Button
						className="w-full max-w-[170px]"
						type="submit"
						disabled={isAddingMandatoryDocument}
					>
						{isAddingMandatoryDocument && (
							<LoaderCircle className="mr-2 animate-spin" />
						)}
						{!isAddingMandatoryDocument && "Salvar"}
					</Button>
				</div>
			</form>
		</Form>
	);
}
