import { TableSelect } from "@/components/table/table-select";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function CreateProjectDialog() {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button className="bg-dark hover:bg-dark/90 text-primary-foreground transition-colors	w-[100px]">
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

				<div className="grid gap-4 py-4">
					<div className="space-y-2">
						<Label htmlFor="name" className="text-right">
							Nome do Projeto
						</Label>

						<Input id="name" placeholder="Digite o nome do projeto" />
					</div>

					<div className="space-y-2">
						<Label htmlFor="type" className="text-right">
							Tipo de Projeto
						</Label>

						<TableSelect
							className="!w-full"
							placeholder="Selecione o tipo de projeto"
							options={[
								{
									label: "Central Inteligente de Segurança Municipal",
									value: "28b9fd94-9847-4c32-bed3-779d1e99175f",
								},
								{
									label: "Rede Colaborativa de Segurança Pública",
									value: "e927a69f-7a48-428c-8b7c-4f061aa99a4e",
								},
								{
									label: "Sistema Integrado de Resposta Rápidaal",
									value: "3019d735-15ea-47b4-a8ff-76762bcf9ba3",
								},
							]}
						/>
					</div>
				</div>

				<DialogFooter>
					<Button variant="outline" asChild>
						<DialogClose>Cancelar</DialogClose>
					</Button>

					<Button className="bg-dark hover:bg-dark/90 text-primary-foreground transition-colors">
						Criar Projeto
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
