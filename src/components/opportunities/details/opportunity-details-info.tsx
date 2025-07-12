import {
	Banknote,
	Calendar,
	CalendarCheck,
	HandCoins,
	Percent,
	Tag,
} from "lucide-react";
import type { OpportunityById } from "@/hooks/opportunities/use-get-opportunity-by-id";
import { formatCurrency } from "@/utils/format-currency";
import { formatDate } from "@/utils/format-date";
import { OpportunityDetailsInfoCard } from "./opportunity-details-info-card";

interface OpportunityDetailsInfoProps {
	opportunity: OpportunityById;
}

export function OpportunityDetailsInfo({
	opportunity,
}: OpportunityDetailsInfoProps) {
	return (
		<div className="py-6">
			<div className="p-6 space-y-4 rounded-2xl border border-muted bg-white">
				<span className="text-lg font-medium">Detalhes</span>

				<div className="space-y-6">
					<OpportunityDetailsInfoCard
						icon={Tag}
						label="Categoria"
						value={opportunity.type}
					/>

					<OpportunityDetailsInfoCard
						icon={Calendar}
						label="Data de Início"
						value={formatDate(opportunity.initialDeadline)}
					/>

					<OpportunityDetailsInfoCard
						icon={CalendarCheck}
						label="Data de Término"
						value={formatDate(opportunity.finalDeadline)}
					/>

					<OpportunityDetailsInfoCard
						icon={Banknote}
						label="Valor Disponível"
						value={formatCurrency(opportunity.availableValue)}
					/>

					<OpportunityDetailsInfoCard
						icon={Banknote}
						label="Valor Máximo"
						value={formatCurrency(opportunity.maxValue)}
					/>

					<OpportunityDetailsInfoCard
						icon={Banknote}
						label="Valor Mínimo"
						value={formatCurrency(opportunity.minValue)}
					/>

					<OpportunityDetailsInfoCard
						icon={HandCoins}
						label="Requer Contrapartida"
						value={opportunity.requiresCounterpart ? "Sim" : "Não"}
					/>

					{opportunity.requiresCounterpart && (
						<OpportunityDetailsInfoCard
							icon={Percent}
							label="Percentual de Contrapartida"
							value={`${opportunity.counterpartPercentage}%`}
						/>
					)}
				</div>
			</div>
		</div>
	);
}
