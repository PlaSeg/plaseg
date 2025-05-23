import { ProjectSectionTopics } from "./project-section-topics";
import { ProjectSectionTopic } from "./project-section-topic";
import { ProjectSectionTopic2 } from "./project-section-topic2";
import { ProjectSectionTopic3 } from "./project-section-topic3";

export function ProjectSection() {
	return (
		<div className="w-full">
			<h1 className="text-2xl font-semibold mb-6">
				Justificativa Completa do Projeto
			</h1>

			<div className="grid grid-cols-3 gap-8">
				<ProjectSectionTopics />

				<div className="col-span-2 flex flex-col gap-6">
					<ProjectSectionTopic />
					<ProjectSectionTopic2 />
					<ProjectSectionTopic3 />
				</div>
			</div>
		</div>
	);
}
