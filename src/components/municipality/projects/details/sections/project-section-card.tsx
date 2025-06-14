import { Button } from "@/components/ui/button";
import { CircleProgressIcon } from "@/components/ui/circle-progress-icon";
import { slugfy } from "@/utils/slugfy";
import { SquarePen } from "lucide-react";
import { Link } from "react-router";

interface ProjectSectionCardProps {
	projectId: string;
	title: string;
}

export function ProjectSectionCard({
	projectId,
	title,
}: ProjectSectionCardProps) {
	return (
		<div
			className="bg-white rounded-lg border border-slate-200 p-6
					flex justify-between items-center gap-4"
		>
			<div className="flex items-center gap-4">
				<CircleProgressIcon percentage={(0 / 1) * 100} />

				<div className="flex flex-col">
					<strong className="font-medium">{title}</strong>

					<span className="text-muted-foreground text-sm">
						{0} de {0} concluídos
					</span>
				</div>
			</div>

			<Button variant="outline" size="icon" asChild>
				<Link to={`/projetos/${projectId}/${slugfy(title)}`}>
					<SquarePen />
				</Link>
			</Button>
		</div>
	);
}
