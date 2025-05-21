import { Opportunity } from "@/@types/common/opportunity";
import { formatDate } from "@/utils/format-date";
import { Banknote, Calendar, Tag } from "lucide-react";

interface OpportunityDetailsOverviewProps {
	opportunity: Opportunity;
}

export function OpportunityDetailsOverview({
	opportunity,
}: OpportunityDetailsOverviewProps) {
	return (
		<div className="py-6">
			<div className="p-6 w-[350px] space-y-6 rounded-2xl border border-muted bg-white">
				<div>
					<span className="font-medium">Detalhes</span>
				</div>

				<div className="flex gap-4 text-sm">
					<div className="bg-muted/50 border rounded-full w-10 h-10 flex items-center justify-center">
						<Tag size={18} />
					</div>

					<div className="flex flex-col">
						<span className="text-muted-foreground">Categoria</span>
						<span className="font-medium">{opportunity.typeDescription}</span>
					</div>
				</div>

				<div className="flex gap-4 text-sm">
					<div className="bg-muted/50 border rounded-full w-10 h-10 flex items-center justify-center">
						<Calendar size={18} />
					</div>

					<div className="flex flex-col">
						<span className="text-muted-foreground">Período de Inscrição</span>
						<span className="font-medium">
							{formatDate(opportunity.initialDeadline)}
						</span>
					</div>
				</div>

				<div className="flex gap-4 text-sm">
					<div className="bg-muted/50 border rounded-full w-10 h-10 flex items-center justify-center">
						<Banknote size={18} />
					</div>

					<div className="flex flex-col">
						<span className="text-muted-foreground">Valor Máximo</span>
						<span className="font-medium">{opportunity.maxValue}</span>
					</div>
				</div>

				<div className="flex gap-4 text-sm">
					<div className="bg-muted/50 border rounded-full w-10 h-10 flex items-center justify-center">
						<Banknote size={18} />
					</div>

					<div className="flex flex-col">
						<span className="text-muted-foreground">Valor Mínimo</span>
						<span className="font-medium">{opportunity.minValue}</span>
					</div>
				</div>
			</div>
		</div>
	);
}
