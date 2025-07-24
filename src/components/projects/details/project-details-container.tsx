import { Link } from "react-router";
import type { Project } from "@/@schemas/project";
import { Tag } from "@/components/ui/tag";
import { slugfy } from "@/utils/slugfy";
import { ProjectDocuments } from "./documents/project-documents";
import { ProjectHeading } from "./heading/project-heading";
import { ProjectInformation } from "./informations/project-information";
import { ProjectItems } from "./items/project-items";
import { ProjectTasks } from "./tasks/project-tasks";

export function ProjectDetailsContainer({ project }: { project: Project }) {
	return (
		<main className="flex flex-col gap-6 py-6 h-full box-content pb-24">
			<div className="space-y-2">
				<h1 className="text-2xl font-semibold">{project.title}</h1>

				<div className="flex gap-2">
					<Tag className="bg-black hover:bg-black/90 text-primary-foreground">
						<Link to={`/oportunidades/${project.opportunity.id}`}>
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
					<ProjectTasks project={project} />
				</div>
			</div>
		</main>
	);
}
