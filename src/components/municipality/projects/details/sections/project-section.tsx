import { Button } from "@/components/ui/button";
import { CircleProgressIcon } from "@/components/ui/circle-progress-icon";
import { SquarePen } from "lucide-react";

interface ProjectSectionProps {
	title: string;
	done: number;
	total: number;
}

export function ProjectSection({ title, done, total }: ProjectSectionProps) {
	return (
		<div
			className="bg-white rounded-lg border border-slate-200 p-6
					flex justify-between items-center gap-4"
		>
			<div className="flex items-center gap-4">
				<CircleProgressIcon percentage={(done / total) * 100} />

				<div className="flex flex-col">
					<strong className="font-medium">{title}</strong>

					<span className="text-muted-foreground text-sm">
						{done} de {total} concluídos
					</span>
				</div>
			</div>

			<Button variant="outline" size="icon">
				<SquarePen />
			</Button>
		</div>
	);
}
