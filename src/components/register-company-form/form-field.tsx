import { Input } from "../ui/input";
import { Label } from "../ui/label";

interface FormInputProps {
	type: React.HTMLInputTypeAttribute;
	id: string;
	label: string;
	placeholder: string;
}

export function FormField({ type, id, label, placeholder }: FormInputProps) {
	return (
		<div className="flex flex-col gap-2 text-left">
			<Label htmlFor={id}>{label}</Label>
			<Input type={type} id={id} name={id} placeholder={placeholder} />
		</div>
	);
}
