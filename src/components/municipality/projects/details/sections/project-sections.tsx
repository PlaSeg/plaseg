import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ProjectSectionCard } from "./project-section-card";
import { Project } from "@/@schemas/project";

interface ProjectsSectionsProps {
	project: Project;
}

export function ProjectsSections({ project }: ProjectsSectionsProps) {
	const [isOpen, setIsOpen] = useState(true);

	return (
		<div className="w-full">
			<Collapsible open={isOpen} onOpenChange={setIsOpen} className="space-y-4">
				<CollapsibleTrigger className="flex items-center gap-2 w-full border-b border-slate-200 pb-4">
					{!isOpen && <ChevronDown className="animate-in spin-in-90" />}

					{isOpen && <ChevronUp className="animate-in spin-in-90" />}

					<h2 className="text-xl font-semibold">Seções</h2>
				</CollapsibleTrigger>

				<CollapsibleContent className="space-y-4">
					{project.documents.map((document) => (
						<ProjectSectionCard
							key={document.name}
							projectId={project.id}
							title={document.name}
						/>
					))}
				</CollapsibleContent>
			</Collapsible>
		</div>
	);
}
