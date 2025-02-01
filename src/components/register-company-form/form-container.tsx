import { ChevronLeft } from "lucide-react";
import { useStepsStore } from "@/store/useStepStore";
import { StepOne } from "./form-steps/step-one";
import { StepTwo } from "./form-steps/step-two";
import { StepFive } from "./form-steps/step-five";
import { StepFour } from "./form-steps/step-four";
import { StepSix } from "./form-steps/step-six";
import { StepThree } from "./form-steps/step-three";
import { Button } from "../ui/button";
import { StepSeven } from "./form-steps/step-seven";

export function RegisterCompanyForm() {
	const { steps, stepBack, stepForward, currentStep } = useStepsStore();

	return (
		<div className="flex flex-col w-full p-0 m-0 h-full">
			<div className="w-full pl-4 pt-4 flex gap-2 items-center cursor-pointer">
				<Button onClick={stepBack} variant="secondary" className="p-0 w-8 h-8">
					<ChevronLeft />
				</Button>

				<strong>Voltar</strong>
			</div>

			<div className="flex items-center justify-center flex-1">
				<div className="flex flex-col items-center gap-8 text-center w-[500px]">
					<div className="flex flex-col gap-2">
						<h2 className="text-2xl font-bold">
							{steps[currentStep() - 1].title}
						</h2>
						<span className="text-sm text-muted-foreground">
							Preencha as informações abaixo para continuar.
						</span>
					</div>

					<div className="w-[400px]">
						{currentStep() === 1 && <StepOne />}
						{currentStep() === 2 && <StepTwo />}
						{currentStep() === 3 && <StepThree />}
						{currentStep() === 4 && <StepFour />}
						{currentStep() === 5 && <StepFive />}
						{currentStep() === 6 && <StepSix />}
						{currentStep() === 7 && <StepSeven />}

						<Button className="mt-4 w-full" onClick={stepForward}>
							{currentStep() === steps.length ? "Concluir cadastro" : "Próximo"}
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
