import { Checkbox } from "@/components/ui/checkbox";

export function NoDocumentationCheckbox() {
	return (
		<div className="flex items-center space-x-2">
			<Checkbox id="no-documentation" />
			<label
				htmlFor="no-documentation"
				className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opamunicipality-70"
			>
				Sem Documentação Obrigatória
			</label>
		</div>
	);
}
