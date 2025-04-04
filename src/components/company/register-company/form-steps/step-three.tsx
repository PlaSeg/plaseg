import { FormField } from "../form-field";
import { NoSiteCheckbox } from "../no-site-checkbox";
import { NoSocialMediaCheckbox } from "../no-social-media-checkbox";

export function StepThree() {
	return (
		<div className="flex flex-col gap-6">
			<div className="space-y-4">
				<FormField
					type="text"
					id="site"
					placeholder="Digite a url do site da empresa"
					label="Site"
				/>

				<NoSiteCheckbox />
			</div>

			<FormField
				type="text"
				id="rede-social"
				placeholder="Link para rede social"
				label="Rede Social"
			/>

			<FormField
				type="text"
				id="rede-social"
				placeholder="Link para rede social"
				label="Rede Social"
			/>

			<div className="space-y-4">
				<FormField
					type="text"
					id="rede-social"
					placeholder="Link para rede social"
					label="Rede Social"
				/>

				<NoSocialMediaCheckbox />
			</div>
		</div>
	);
}
