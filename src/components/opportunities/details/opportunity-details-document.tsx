import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import type { RequiredDocument } from "@/hooks/opportunities/use-get-opportunity-by-id";

interface OpportunityDetailsDocumentProps {
	requiredDocument: RequiredDocument;
}

export function OpportunityDetailsDocument({
	requiredDocument,
}: OpportunityDetailsDocumentProps) {
	return (
		<div
			key={requiredDocument.id}
			className="flex justify-between items-center p-4 rounded-lg border border-slate-200
			gap-6"
		>
			<div className="flex flex-col gap-2">
				<span>{requiredDocument.name}</span>
				<p className="text-muted-foreground text-sm">
					{requiredDocument.description}
				</p>
			</div>

			<Button variant="secondary" asChild>
				<Link to={requiredDocument.model} target="_blank">
					Ver modelo
				</Link>
			</Button>
		</div>
	);
}
