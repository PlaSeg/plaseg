import { RequiredDocument } from "@/@types/common/opportunity";
import { Button } from "@/components/ui/button";

interface OpportunityDetailsDocumentProps {
	document: RequiredDocument;
}

export function OpportunityDetailsDocument({
	document,
}: OpportunityDetailsDocumentProps) {
	return (
		<div
			key={document.id}
			className="flex justify-between items-center p-4 rounded-lg border border-muted"
		>
			<div className="flex flex-col">
				<span>{document.name}</span>
				<p className="text-muted-foreground text-sm">{document.description}</p>
			</div>

			<Button variant="secondary">Ver modelo</Button>
		</div>
	);
}
