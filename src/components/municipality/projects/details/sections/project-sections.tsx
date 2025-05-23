import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ProjectSectionCard } from "./project-section-card";

const sections = [
	{
		title: "Declaração de capacidade técnica e gerencial",
		done: 0,
		total: 10,
	},
	{
		title: "Justificativa completa do projeto",
		done: 2,
		total: 6,
	},
	{
		title: "Termo de referência",
		done: 8,
		total: 8,
	},
	{
		title: "Declaração de contrapartida",
		done: 0,
		total: 10,
	},
	{
		title: "Cronograma de execução",
		done: 0,
		total: 10,
	},
	{
		title: "Sustentabilidade e localização de bens do projeto",
		done: 0,
		total: 10,
	},
];

export function ProjectsSections() {
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
					{sections.map((section) => (
						<ProjectSectionCard
							key={section.title}
							title={section.title}
							done={section.done}
							total={section.total}
						/>
					))}
				</CollapsibleContent>
			</Collapsible>
		</div>
	);
}
