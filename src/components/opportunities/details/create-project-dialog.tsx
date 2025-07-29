import { LoaderCircle } from "lucide-react";
import { FormInput } from "@/components/form/form-input";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import { useCreateProject } from "@/hooks/projects/use-create-project";

interface CreateProjectDialogProps {
	opportunityId: string;
}

export function CreateProjectDialog({
	opportunityId,
}: CreateProjectDialogProps) {
	const { form, isLoadingCreateProject } = useCreateProject({
		opportunityId,
	});

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button
					className="bg-dark hover:bg-dark/90 text-primary-foreground
				transition-colors	w-[100px]"
				>
					Participar
				</Button>
			</DialogTrigger>

			<DialogContent className="sm:max-w-[500px]">
				<DialogHeader>
					<DialogTitle>Criar Projeto</DialogTitle>

					<DialogDescription>
						Defina o nome e o tipo do seu projeto.
					</DialogDescription>
				</DialogHeader>

				<Form {...form}>
					<form onSubmit={form.handleSubmitForm} className="space-y-4">
						<FormInput
							form={form}
							entity="title"
							label="Nome do Projeto"
							placeholder="Digite o nome do projeto"
						/>

						<div className="flex items-center justify-end gap-4">
							<Button variant="outline" asChild>
								<DialogClose>Cancelar</DialogClose>
							</Button>

							<Button
								type="submit"
								className="bg-dark hover:bg-dark/90 text-primary-foreground
								transition-colors w-[150px]"
								disabled={isLoadingCreateProject}
							>
								{isLoadingCreateProject && (
									<LoaderCircle className="animate-spin" />
								)}

								{!isLoadingCreateProject && "Criar Projeto"}
							</Button>
						</div>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	);
}
