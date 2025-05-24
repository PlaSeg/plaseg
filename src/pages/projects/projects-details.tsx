import { ProjectAttachments } from "@/components/municipality/projects/details/attachments/project-attachments";
import { ProjectHeading } from "@/components/municipality/projects/details/heading/project-heading";
import { ProjectItems } from "@/components/municipality/projects/details/items/project-items";
import { ProjectTasks } from "@/components/municipality/projects/details/tasks/project-tasks";
import { ProjectsSections } from "@/components/municipality/projects/details/sections/project-sections";
import { ProjectInformation } from "@/components/municipality/projects/details/informations/project-information";
import { unslugfy } from "@/utils/unslugfy";
import { useParams } from "react-router";
import { Tag } from "@/components/ui/tag";

export default function ProjectsDetails() {
	const { slug } = useParams<{ slug: string }>();

	return (
		<main className="flex flex-col gap-6 py-6 h-full box-content">
			<div className="space-y-2">
				<h1 className="text-2xl font-semibold">
					{unslugfy(slug ?? "Projeto", { capitalize: "all" })}
				</h1>

				<div className="flex gap-2">
					<Tag className="bg-black hover:bg-black/90 text-primary-foreground">
						Oportunidade X
					</Tag>

					<Tag className="bg-black hover:bg-black/90 text-primary-foreground">
						Reforço da Guarda Municipal
					</Tag>
				</div>
			</div>

			<ProjectHeading />

			<div className="grid grid-cols-3 gap-6">
				<div className="flex flex-col gap-6 col-span-2">
					<ProjectInformation />
					<ProjectsSections />
					<ProjectItems />
					<ProjectAttachments />
				</div>

				<div className="col-span-1">
					<ProjectTasks />
				</div>
			</div>
		</main>
	);
}
