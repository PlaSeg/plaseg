import { Checkbox } from "@/components/ui/checkbox";

interface SetHasParentCheckboxProps {
	hasParent: boolean;
	setHasParent: React.Dispatch<React.SetStateAction<boolean>>;
}

export function SetHasParentCheckbox({
	hasParent,
	setHasParent,
}: SetHasParentCheckboxProps) {
	return (
		<div className="flex items-center space-x-2">
			<Checkbox
				id="terms"
				checked={hasParent}
				onCheckedChange={(checked) => setHasParent(!checked)}
			/>
			<label
				htmlFor="terms"
				className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
			>
				Possui um tipo pai?
			</label>
		</div>
	);
}
