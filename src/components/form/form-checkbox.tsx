import { Checkbox } from "@/components/ui/checkbox";

interface FormCheckboxProps {
	label: string;
}

export function FormCheckbox({ label }: FormCheckboxProps) {
	return (
		<div className="flex items-center space-x-2">
			<Checkbox id="no-documentation" />
			<label
				htmlFor="no-documentation"
				className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
			>
				{label}
			</label>
		</div>
	);
}
