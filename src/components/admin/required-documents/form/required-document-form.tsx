import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { FormInput } from "@/components/form/form-input";
import { LoaderCircle } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import { CreateRequiredDocumentRequest } from "@/@schemas/required-document";
import { FormTextarea } from "@/components/form/form-textarea";

interface RequiredDocumentFormProps {
	form: UseFormReturn<CreateRequiredDocumentRequest> & {
		handleSubmitForm: () => void;
	};
	setIsFormOpen: (open: boolean) => void;
	isLoading: boolean;
}

export function RequiredDocumentForm({
	form,
	isLoading,
	setIsFormOpen,
}: RequiredDocumentFormProps) {
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

					<FormTextarea
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
						onClick={() => setIsFormOpen(false)}
					>
						Cancelar
					</Button>

					<Button
						className="w-full max-w-[170px]"
						type="submit"
						disabled={isLoading}
					>
						{isLoading && <LoaderCircle className="mr-2 animate-spin" />}
						{!isLoading && "Salvar"}
					</Button>
				</div>
			</form>
		</Form>
	);
}
