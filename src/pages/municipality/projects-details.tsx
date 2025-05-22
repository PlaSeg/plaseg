import { ProjectHeading } from "@/components/municipality/projects/details/heading/project-heading";
import { ProjectTasks } from "@/components/municipality/projects/details/project-tasks";
import { ProjectsSections } from "@/components/municipality/projects/details/sections/project-sections";
import { unslugfy } from "@/utils/unslugfy";
import { useParams } from "react-router";

export default function ProjectsDetails() {
	const { slug } = useParams<{ slug: string }>();

	return (
		<main className="flex flex-col gap-6 py-6 h-full box-content">
			<h1 className="text-2xl font-semibold">
				{unslugfy(slug ?? "Projeto", { capitalize: "all" })}
			</h1>

			<ProjectHeading />

			<div className="grid grid-cols-3 gap-6">
				<div className="col-span-2">
					<ProjectsSections />
				</div>

				<div className="col-span-1">
					<ProjectTasks />
				</div>
			</div>
		</main>
	);
}
