import { useParams } from "react-router";
import { OpportunityDetails } from "@/components/opportunities/details/opportunity-details";
import { OpportunityDetailsInfo } from "@/components/opportunities/details/opportunity-details-info";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetOpportunityById } from "@/hooks/opportunities/use-get-opportunity-by-id";

export default function OpportunityDetailsPage() {
	const { id } = useParams<{ id: string }>();

	const { opportunity, isGetOpportunityByIdLoading } = useGetOpportunityById(
		id || ""
	);

	if (isGetOpportunityByIdLoading) {
		return (
			<div className="w-full h-[520px] my-6 grid grid-cols-4 gap-6">
				<Skeleton className="h-full rounded-xl bg-slate-200" />

				<Skeleton className="col-span-3 h-full rounded-xl bg-slate-200" />
			</div>
		);
	}

	if (!isGetOpportunityByIdLoading && !opportunity) {
		return (
			<div className="w-full h-[500px] flex items-center justify-center">
				<strong className="text-muted-foreground">
					Oportunidade não encontrada.
				</strong>
			</div>
		);
	}

	if (!isGetOpportunityByIdLoading && opportunity)
		return (
			<div className="w-full grid grid-cols-4 gap-6">
				<OpportunityDetailsInfo opportunity={opportunity} />

				<OpportunityDetails opportunity={opportunity} />
			</div>
		);
}
