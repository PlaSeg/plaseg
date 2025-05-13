import { ChevronLeft } from "lucide-react";
import { useStepsStore } from "@/store/step";
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
import { Form } from "react-hook-form";
import { completeData } from "@/@types/municipality-sign-up/sign-up";
import { FormProvider } from "react-hook-form";

export function RegisterMunicipalityForm() {
	const navigate = useNavigate();
	const form = useForm<completeData>();

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
		<FormProvider {...form}>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)}>
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
									{currentStep() === 1 && <StepOne form={form} />}
									{currentStep() === 2 && <StepTwo form={form} />}
									{currentStep() === 3 && <StepThree form={form} />}
									{currentStep() === 4 && <StepFour form={form} />}
									{currentStep() === 5 && <StepFive form={form} />}
									{currentStep() === 6 && <StepSix form={form} />}

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
											onClick={() => navigate("/editais")}
										>
											Concluir cadastro
										</Button>
									)}
								</div>
							</div>
						</div>
					</div>
				</form>
			</Form>
		</FormProvider>
	);
}
