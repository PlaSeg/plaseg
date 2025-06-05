import { Opportunity } from "@/@types/common/opportunity";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { OpportunityDetailsDocument } from "./opportunity-details-document";
import { CreateProjectDialog } from "./create-project-dialog";

interface OpportunityDetailsOverviewProps {
  opportunity: Opportunity;
}

export function OpportunityDetailsOverview({
  opportunity,
}: OpportunityDetailsOverviewProps) {
  return (
    <div className="p-6 w-full">
      <div className="p-6 flex flex-col gap-6 rounded-2xl border border-muted bg-white">
        <div className="w-full flex items-start justify-between">
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl leading-snug font-medium">
              {opportunity.title}
            </h1>

            <span className="text-muted-foreground">
              {opportunity.responsibleAgency}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="outline" className="w-[100px]">
              <Link to="/oportunidades">Cancelar</Link>
            </Button>

            <CreateProjectDialog opportunityId={opportunity.id} />
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <h2 className="text-lg font-medium">Descrição</h2>
          <p className="text-muted-foreground">{opportunity.description}</p>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-medium">Documentação Obrigatória</h2>

          {opportunity.requiredDocuments.map((document) => (
            <OpportunityDetailsDocument key={document.id} document={document} />
          ))}
        </div>
      </div>
    </div>
  );
}
