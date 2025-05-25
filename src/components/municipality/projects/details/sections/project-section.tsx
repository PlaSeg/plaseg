import { fields } from "@/mocks/project/fields";
import { ProjectSectionTopic } from "./project-section-topic";
import { ProjectSectionTopics } from "./project-section-topics";

export function ProjectSection() {
	return (
		<div className="w-full">
			<h1 className="text-2xl font-semibold mb-6">
				Justificativa Completa do Projeto
			</h1>

			<div className="grid grid-cols-3 gap-8">
				<ProjectSectionTopics />

				<div className="col-span-2 flex flex-col gap-6">
					{fields.map((field) => (
						<ProjectSectionTopic key={field.id} field={field} />
					))}
				</div>
			</div>
		</div>
	);
}
