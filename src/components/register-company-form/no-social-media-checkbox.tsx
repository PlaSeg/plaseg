import { Checkbox } from "@/components/ui/checkbox";

export function NoSocialMediaCheckbox() {
	return (
		<div className="flex items-center space-x-2">
			<Checkbox id="no-social-media" />
			<label
				htmlFor="no-social-media"
				className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
			>
				Sem redes sociais
			</label>
		</div>
	);
}
