import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Opportunity } from "@/mocks/opportunities";

interface OpportunityProps {
	opportunity: Opportunity;
}

export function Opportunity({ opportunity }: OpportunityProps) {
	return (
		<div className="overflow-hidden rounded-lg border border-border/50">
			<div className="p-6 flex justify-between items-baseline">
				<div className="space-y-2">
					<h3 className="text-xl font-medium text-foreground">
						{opportunity.title}
					</h3>

					<p className="text-sm text-blue-500">{opportunity.organization}</p>

					<div className="pt-2">
						<p className="text-sm space-x-2">
							<span className="font-semibold">Objetivos:</span>
							<span className="text-muted-foreground">
								{opportunity.objectives}
							</span>
						</p>
					</div>

					<div className="pt-1">
						<Badge
							variant="outline"
							className="px-4 font-medium rounded-full text-xs bg-transparent hover:bg-secondary"
						>
							{opportunity.badgeText}
						</Badge>
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
					<div className="space-y-1">
						<p className="text-xs text-muted-foreground">Valor mínimo</p>

						<p className="font-semibold">{opportunity.minValue}</p>
					</div>

					<div className="space-y-1">
						<p className="text-xs text-muted-foreground">Valor Máximo</p>

						<p className="font-semibold">{opportunity.maxValue}</p>
					</div>
				</div>
			</div>

			<div className="bg-muted/30 border-t border-border/40 p-4 flex items-center justify-between">
				<div className="text-sm">
					<span className="text-muted-foreground font-medium">
						Inscrições:{" "}
					</span>
					<span>{opportunity.registrationPeriod}</span>
				</div>

				<Button className="bg-dark hover:bg-dark/90 text-primary-foreground transition-colors w-[200px]">
					Acessar
				</Button>
			</div>
		</div>
	);
}
