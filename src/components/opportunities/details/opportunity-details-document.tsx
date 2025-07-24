import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import type { OpportunityById } from "@/hooks/opportunities/use-get-opportunity-by-id";

interface OpportunityDetailsAttachmentProps {
	attachment: OpportunityById["attachments"][number];
}

export function OpportunityDetailsAttachment({
	attachment,
}: OpportunityDetailsAttachmentProps) {
	return (
		<div
			key={attachment.id}
			className="flex justify-between items-center p-4 rounded-lg border border-slate-200
			gap-6"
		>
			<div className="flex flex-col gap-2">
				<span>{attachment.name}</span>
				<p className="text-muted-foreground text-sm">
					{attachment.description}
				</p>
			</div>

			<Button variant="secondary" asChild>
				<Link to={attachment.model} target="_blank">
					Ver modelo
				</Link>
			</Button>
		</div>
	);
}
