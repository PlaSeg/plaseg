import { OpportunitiesFilter } from "@/components/opportunities/list/opportunities-filter";
import { OpportunitiesList } from "@/components/opportunities/list/opportunities-list";

export default function Opportunities() {
	return (
		<main className="flex gap-6 h-full box-content">
			<OpportunitiesFilter />

			<OpportunitiesList />
		</main>
	);
}
