import { ProjectHeading } from "@/components/municipality/projects/details/heading/project-heading";
import { ProjectTasks } from "@/components/municipality/projects/details/tasks/project-tasks";
import { ProjectInformation } from "@/components/municipality/projects/details/informations/project-information";
import { useParams } from "react-router";
import { Tag } from "@/components/ui/tag";
import { useGetProjectById } from "@/hooks/municipalities/projects/use-get-project-by-id";
import { ProjectsDetailsSkeleton } from "./project-details-skeleton";
import { ProjectsSections } from "@/components/municipality/projects/details/sections/project-sections";
import { ProjectItems } from "@/components/municipality/projects/details/items/project-items";

export default function ProjectDetails() {
	const { id } = useParams<{ id: string }>();

	const { project, isLoadingGetProjectById } = useGetProjectById(id!);

	if (isLoadingGetProjectById) return <ProjectsDetailsSkeleton />;

	if (project)
		return (
			<main className="flex flex-col gap-6 py-6 h-full box-content">
				<div className="space-y-2">
					<h1 className="text-2xl font-semibold">{project.title}</h1>

					<div className="flex gap-2">
						<Tag className="bg-black hover:bg-black/90 text-primary-foreground">
							Oportunidade
						</Tag>

						<Tag className="bg-black hover:bg-black/90 text-primary-foreground">
							Tipo de Projeto
						</Tag>
					</div>
				</div>

				<ProjectHeading project={project} />

				<div className="grid grid-cols-3 gap-6">
					<div className="flex flex-col gap-6 col-span-2">
						<ProjectInformation project={project} />
						<ProjectsSections project={project} />
						<ProjectItems project={project} />
						{/* <ProjectAttachments /> */}
					</div>

					<div className="col-span-1">
						<ProjectTasks />
					</div>
				</div>
			</main>
		);
}
