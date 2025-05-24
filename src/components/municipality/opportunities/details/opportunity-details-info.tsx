import { Opportunity } from "@/@types/common/opportunity";
import { formatCurrency } from "@/utils/format-currency";
import { formatDate } from "@/utils/format-date";
import {
	Banknote,
	Calendar,
	CalendarCheck,
	HandCoins,
	Percent,
	Tag,
} from "lucide-react";

interface OpportunityDetailsInfoProps {
	opportunity: Opportunity;
}

export function OpportunityDetailsInfo({
	opportunity,
}: OpportunityDetailsInfoProps) {
	return (
		<div className="py-6">
			<div className="p-6 w-[300px] space-y-4 rounded-2xl border border-muted bg-white">
				<span className="text-lg font-medium">Detalhes</span>

				<div className="space-y-6">
					<div className="flex gap-4 text-sm">
						<div className="bg-muted/50 border rounded-full w-10 h-10 flex items-center justify-center">
							<Tag size={20} />
						</div>

						<div className="flex flex-col">
							<span className="text-muted-foreground">Categoria</span>
							<span className="font-medium">{opportunity.type}</span>
						</div>
					</div>

					<div className="flex gap-4 text-sm">
						<div className="bg-muted/50 border rounded-full w-10 h-10 flex items-center justify-center">
							<Calendar size={20} />
						</div>

						<div className="flex flex-col">
							<span className="text-muted-foreground">Data de Início</span>
							<span className="font-medium">
								{formatDate(opportunity.initialDeadline)}
							</span>
						</div>
					</div>

					<div className="flex gap-4 text-sm">
						<div className="bg-muted/50 border rounded-full w-10 h-10 flex items-center justify-center">
							<CalendarCheck size={20} />
						</div>

						<div className="flex flex-col">
							<span className="text-muted-foreground">Data de Término</span>
							<span className="font-medium">
								{formatDate(opportunity.finalDeadline)}
							</span>
						</div>
					</div>

					<div className="flex gap-4 text-sm">
						<div className="bg-muted/50 border rounded-full w-10 h-10 flex items-center justify-center">
							<Banknote size={20} />
						</div>

						<div className="flex flex-col">
							<span className="text-muted-foreground">Valor Disponível</span>
							<span className="font-medium">
								{formatCurrency(opportunity.availableValue)}
							</span>
						</div>
					</div>

					<div className="flex gap-4 text-sm">
						<div className="bg-muted/50 border rounded-full w-10 h-10 flex items-center justify-center">
							<Banknote size={20} />
						</div>

						<div className="flex flex-col">
							<span className="text-muted-foreground">Valor Máximo</span>
							<span className="font-medium">
								{formatCurrency(opportunity.maxValue)}
							</span>
						</div>
					</div>

					<div className="flex gap-4 text-sm">
						<div className="bg-muted/50 border rounded-full w-10 h-10 flex items-center justify-center">
							<Banknote size={20} />
						</div>

						<div className="flex flex-col">
							<span className="text-muted-foreground">Valor Mínimo</span>
							<span className="font-medium">
								{formatCurrency(opportunity.minValue)}
							</span>
						</div>
					</div>

					<div className="flex gap-4 text-sm">
						<div className="bg-muted/50 border rounded-full w-10 h-10 flex items-center justify-center">
							<HandCoins size={20} />
						</div>

						<div className="flex flex-col">
							<span className="text-muted-foreground">
								Requer Contrapartida
							</span>
							<span className="font-medium">
								{opportunity.requiresCounterpart ? "Sim" : "Não"}
							</span>
						</div>
					</div>

					{opportunity.requiresCounterpart && (
						<div className="flex gap-4 text-sm">
							<div className="bg-muted/50 border rounded-full w-10 h-10 flex items-center justify-center">
								<Percent size={20} />
							</div>

							<div className="flex flex-col">
								<span className="text-muted-foreground">
									Percentual de Contrapartida
								</span>
								<span className="font-medium">
									{opportunity.counterpartPercentage}%
								</span>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
