import { Opportunity } from "./opportunity";
import { opportunities } from "@/mocks/opportunities";

export function OpportunitiesList() {
	return (
		<div className="flex-1 p-6 space-y-6 overflow-y-auto max-h-[calc(100vh-8rem)]">
			{opportunities.map((opportunity) => (
				<Opportunity opportunity={opportunity} />
			))}
		</div>
	);
}
