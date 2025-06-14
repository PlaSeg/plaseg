import { useParams } from "react-router";
import { OpportunityDetailsInfo } from "@/components/municipality/opportunities/details/opportunity-details-info";
import { useGetOpportunities } from "@/hooks/admin/opportunities/use-get-opportunities";
import { OpportunityDetails } from "@/components/municipality/opportunities/details/opportunity-details";

export default function OpportunityDetailsPage() {
	const { slug } = useParams<{ slug: string }>();

	const { opportunities } = useGetOpportunities();

	const opportunity = opportunities.find((opp) => opp.slug === slug);

	if (!opportunity) {
		return (
			<div className="w-full flex h-screen items-center justify-center container mx-auto py-8">
				<h1 className="text-2xl text-muted-foreground">
					Oportunidade não encontrada
				</h1>
			</div>
		);
	}

	return (
		<div className="w-full flex">
			<OpportunityDetailsInfo opportunity={opportunity} />

			<OpportunityDetails opportunity={opportunity} />
		</div>
	);
}
