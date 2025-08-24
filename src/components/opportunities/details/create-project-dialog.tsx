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
import { Progress } from "@/components/ui/progress";
import { useCreateProject } from "@/hooks/projects/use-create-project";
import { useState, useEffect } from "react";

interface CreateProjectDialogProps {
	opportunityId: string;
}

export function CreateProjectDialog({
	opportunityId,
}: CreateProjectDialogProps) {
	const { form, isLoadingCreateProject } = useCreateProject({
		opportunityId,
	});

	const [progress, setProgress] = useState(0);

	// Simulação do progresso durante 30 segundos
	useEffect(() => {
		if (isLoadingCreateProject) {
			setProgress(0);
			const interval = setInterval(() => {
				setProgress((prevProgress) => {
					if (prevProgress >= 100) {
						clearInterval(interval);
						return 100;
					}
					// Incrementa aproximadamente 3.33% a cada segundo (100% / 30s = 3.33%)
					return Math.min(prevProgress + 3.33, 100);
				});
			}, 1000);

			return () => clearInterval(interval);
		}
	}, [isLoadingCreateProject]);

	// Completa o progresso quando o projeto é criado
	useEffect(() => {
		if (!isLoadingCreateProject && progress > 0) {
			setProgress(100);
		}
	}, [isLoadingCreateProject, progress]);

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
				{!isLoadingCreateProject ? (
					<>
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
									>
										Criar Projeto
									</Button>
								</div>
							</form>
						</Form>
					</>
				) : (
					<div className="py-8 px-4 space-y-6">
						<strong className="text-lg font-semibold block text-center">
							Criando projeto...
						</strong>

						<Progress value={progress} className="w-full h-6" />
					</div>
				)}
			</DialogContent>
		</Dialog>
	);
}
