import { CopyCheck } from "lucide-react";
import { useReducer } from "react";
import type { Project } from "@/@schemas/project";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";

interface ProjectTasksProps {
	project: Project;
}

export function ProjectTasks({ project }: ProjectTasksProps) {
	function task1() {
		if (
			project.baseValue &&
			project.responsibleCpf &&
			project.responsibleName &&
			project.responsibleEmail &&
			project.responsiblePhone
		) {
			return true;
		}

		return false;
	}

	function task2() {
		for (const document of project.documents) {
			if (document.fields !== document.readyFields) {
				return false;
			}
		}

		return true;
	}

	function task3() {
		if (project.requestedItems.length > 0) {
			return true;
		}

		return false;
	}

	const tasks = [task1(), task2(), task3()];

	const [completedCount] = useReducer(
		() => tasks.reduce((acc, curr) => acc + (curr ? 1 : 0), 0),
		tasks.reduce((acc, curr) => acc + (curr ? 1 : 0), 0)
	);

	return (
		<div className="flex flex-col space-y-4">
			<h2 className="text-xl font-semibold">Tarefas</h2>

			<Separator />

			<div className="w-full max-w-md mx-auto bg-white rounded-lg border border-slate-200 p-6">
				<div className="flex justify-between items-center mb-4">
					<span className="text-sm text-gray-500">
						{completedCount} de {tasks.length} concluídos
					</span>
				</div>

				<div className="w-full h-[300px] flex flex-col gap-4">
					<div className="flex items-center gap-2">
						<Checkbox checked={task1()} />
						Preencher as informações do projeto
					</div>

					<div className="flex items-center gap-2">
						<Checkbox checked={task2()} />
						Preencher os documentos do projeto
					</div>

					<div className="flex items-center gap-2">
						<Checkbox checked={task3()} />
						Definir os itens solicitados
					</div>

					{/* <div>
						<div className="flex flex-col gap-4 items-center text-muted-foreground">
							<CopyCheck className="w-10 h-10" strokeWidth={1} />
							<span>Nenhuma tarefa disponível!</span>
						</div>
					</div> */}
				</div>
			</div>
		</div>
	);
}
