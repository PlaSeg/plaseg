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
import { Link } from "react-router";
import { LoaderCircle } from "lucide-react";
import { useGetProjectTypesByOpportunity } from "@/hooks/admin/project-types/use-get-project-types-by-opportunity";

interface CreateProjectDialogProps {
  opportunityId: string;
}

export function CreateProjectDialog({
  opportunityId,
}: CreateProjectDialogProps) {
  const { projectTypes, isLoadingGetProjectTypesByOpportunity, error } =
    useGetProjectTypesByOpportunity({ opportunityId });

  const projectTypeOptions =
    projectTypes?.map((projectType) => ({
      label: projectType.name,
      value: projectType.id,
    })) ?? [];

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

            {isLoadingGetProjectTypesByOpportunity ? (
              <div className="flex items-center justify-center py-4">
                <LoaderCircle className="h-4 w-4 animate-spin mr-2" />
                <span className="text-sm text-muted-foreground">
                  Carregando tipos de projeto...
                </span>
              </div>
            ) : error ? (
              <div className="text-sm text-red-500 py-2">
                Erro ao carregar tipos de projeto. Tente novamente.
              </div>
            ) : (
              <TableSelect
                className="!w-full"
                placeholder="Selecione o tipo de projeto"
                options={projectTypeOptions}
              />
            )}
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" asChild>
            <DialogClose>Cancelar</DialogClose>
          </Button>

          <Button
            className="bg-dark hover:bg-dark/90 text-primary-foreground transition-colors"
            asChild
            disabled={isLoadingGetProjectTypesByOpportunity || !!error}
          >
            <Link to="/projetos/projeto-x">Criar Projeto</Link>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
