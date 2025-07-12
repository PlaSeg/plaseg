import { Link, useParams } from "react-router";
import { ProjectDocuments } from "@/components/projects/details/documents/project-documents";
import { ProjectHeading } from "@/components/projects/details/heading/project-heading";
import { ProjectInformation } from "@/components/projects/details/informations/project-information";
import { ProjectItems } from "@/components/projects/details/items/project-items";
import { ProjectTasks } from "@/components/projects/details/tasks/project-tasks";
import { Tag } from "@/components/ui/tag";
import { useGetProjectById } from "@/hooks/projects/use-get-project-by-id";
import { slugfy } from "@/utils/slugfy";
import { ProjectsDetailsSkeleton } from "./project-details-skeleton";

export default function ProjectDetails() {
	const { projectId } = useParams<{ projectId: string }>();

	const { project, isLoadingGetProjectById } = useGetProjectById(projectId!);

	if (isLoadingGetProjectById) return <ProjectsDetailsSkeleton />;

	if (project)
		return (
			<main className="flex flex-col gap-6 py-6 h-full box-content pb-24">
				<div className="space-y-2">
					<h1 className="text-2xl font-semibold">{project.title}</h1>

					<div className="flex gap-2">
						<Tag className="bg-black hover:bg-black/90 text-primary-foreground">
							<Link to={`/oportunidades/${slugfy(project.opportunity.title)}`}>
								{project.opportunity.title}
							</Link>
						</Tag>

						<Tag className="bg-black hover:bg-black/90 text-primary-foreground">
							{project.municipality.name}
						</Tag>
					</div>
				</div>

				<ProjectHeading project={project} />

				<div className="grid grid-cols-3 gap-6">
					<div className="flex flex-col gap-6 col-span-2">
						<ProjectInformation project={project} />
						<ProjectDocuments project={project} />
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
