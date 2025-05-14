import { Checkbox } from "@/components/ui/checkbox";

export function NoSiteCheckbox() {
	return (
		<div className="flex items-center space-x-2">
			<Checkbox id="no-site" />
			<label
				htmlFor="no-site"
				className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opamunicipality-70"
			>
				Sem website
			</label>
		</div>
	);
}
