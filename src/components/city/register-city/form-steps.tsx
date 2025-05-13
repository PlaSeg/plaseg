import { FormStep } from "./form-step";

export function FormSteps() {
	return (
		<div className="flex flex-col">
			{Array.from({ length: 4 }).map((_, index) => (
				<FormStep key={index} step={index + 1} />
			))}
		</div>
	);
}
