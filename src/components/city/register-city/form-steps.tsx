import { FormStep } from "./form-step";

export function FormSteps() {
	return (
		<div className="flex flex-col">
			{Array.from({ length: 6 }).map((_, index) => (
				<FormStep step={index + 1} key={index} />
			))}
		</div>
	);
}
