import { ChevronLeft } from "lucide-react";
import { useStepsStore } from "@/hooks/step";
import { useForm } from "react-hook-form";
import { StepOne } from "./form-steps/step-one";
import { StepTwo } from "./form-steps/step-two";
import { StepThree } from "./form-steps/step-three";
import { useEffect } from "react";
import { StepFour } from "./form-steps/step-four";
import { StepFive } from "./form-steps/step-five";
import { StepSix } from "./form-steps/step-six";
import { useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import {
	municipality,
	qualifiedStaff,
	projectPartnership,
	allocationDepartment,
	management,
	maintenanceContract,
} from "@/@types/municipality/municipality";
import {
	municipalitySchema,
	qualifiedStaffSchema,
} from "@/@schemas/municipality";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider } from "react-hook-form";

export function RegisterMunicipalityForm() {
	const navigate = useNavigate();
	const stepOneForm = useForm<municipality>({
		resolver: zodResolver(municipalitySchema),
		mode: "onTouched",
	});
	const stepTwoForm = useForm<qualifiedStaff>({
		resolver: zodResolver(qualifiedStaffSchema),
		mode: "onTouched",
	});
	const stepThreeForm = useForm<projectPartnership>();
	const stepFourForm = useForm<allocationDepartment>();
	const stepFiveForm = useForm<management>();
	const stepSixForm = useForm<maintenanceContract>();

	const { steps, stepBack, stepForward, currentStep, setUserType } =
		useStepsStore();

	useEffect(() => {
		console.log("Setando userType para municipio...");
		setUserType("municipio");
	}, [setUserType]);

	const onSubmit = () => {
		navigate("/editais");
	};

	return (
		<div className="flex flex-col w-full p-0 m-0 h-full">
			<div className="w-full pl-4 pt-4 flex gap-2 items-center cursor-pointer">
				<Button
					type="button"
					onClick={stepBack}
					variant="secondary"
					className="p-0 w-8 h-8"
				>
					<ChevronLeft />
				</Button>
				<strong>Voltar</strong>
			</div>

			<div className="flex items-center justify-center flex-1">
				<div className="flex flex-col items-center gap-8 text-center w-[500px]">
					<div className="flex flex-col gap-2">
						<h2 className="text-2xl font-bold">
							{steps[currentStep() - 1]?.title}
						</h2>
						<span className="text-sm text-muted-foreground">
							Preencha as informações abaixo para continuar.
						</span>
					</div>

					<div className="w-[400px]">
						{currentStep() === 1 && (
							<FormProvider {...stepOneForm}>
								<StepOne form={stepOneForm} />
							</FormProvider>
						)}
						{currentStep() === 2 && (
							<FormProvider {...stepTwoForm}>
								<StepTwo form={stepTwoForm} />
							</FormProvider>
						)}
						{currentStep() === 3 && (
							<FormProvider {...stepThreeForm}>
								<StepThree form={stepThreeForm} />
							</FormProvider>
						)}
						{currentStep() === 4 && (
							<FormProvider {...stepFourForm}>
								<StepFour form={stepFourForm} />
							</FormProvider>
						)}
						{currentStep() === 5 && (
							<FormProvider {...stepFiveForm}>
								<StepFive form={stepFiveForm} />
							</FormProvider>
						)}
						{currentStep() === 6 && (
							<FormProvider {...stepSixForm}>
								<StepSix form={stepSixForm} />
							</FormProvider>
						)}

						{currentStep() !== steps.length && (
							<Button
								className="mt-4 mb-4 w-full"
								type="button"
								onClick={stepForward}
							>
								Próximo
							</Button>
						)}

						{currentStep() === steps.length && (
							<Button
								className="mt-4 mb-4 w-full"
								type="submit"
								onClick={onSubmit}
							>
								Concluir cadastro
							</Button>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
