import { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useFormStore } from "@/hooks/municipality/use-municipality-form";
import {
	municipalityFormSchema,
	type MunicipalityFormData,
} from "@/@schemas/municipality-schema";
import { StepIndicator } from "./steps-indicator";
import { GeneralDataStep } from "./steps/general-data-step";
import { QualifiedStaffStep } from "./steps/qualified-staff-step";
import { ProjectsPartnershipsStep } from "./steps/projects-partnerships-step";
import { AllocationDepartmentsStep } from "./steps/allocation-department-step";
import { ManagementStep } from "./steps/management-step";
import { MaintenanceContractsStep } from "./steps/maintenance-contracts-step";

const TOTAL_STEPS = 6;

export function MunicipalityForm() {
	const { currentStep, formData, setCurrentStep, updateFormData } =
		useFormStore();
	const [isSubmitting, setIsSubmitting] = useState(false);

	const form = useForm<MunicipalityFormData>({
		resolver: zodResolver(municipalityFormSchema),
		defaultValues: {
			name: formData.name || "",
			guardInitialDate: formData.guardInitialDate || new Date(),
			guardCount: formData.guardCount || 0,
			trafficInitialDate: formData.trafficInitialDate || new Date(),
			trafficCount: formData.trafficCount || 0,
			federativeUnit: formData.federativeUnit || "",
			unitType: formData.unitType || "UF",
			qualifiedStaff: formData.qualifiedStaff || [
				{
					name: "",
					sector: "",
					education: "",
					experience: "",
					employmentType: "CLT",
					document: "",
					isResponsible: false,
				},
			],
			projectsPartnerships: formData.projectsPartnerships || [],
			allocationDepartments: formData.allocationDepartments || [],
			managements: formData.managements || [
				{
					initialDate: new Date(),
					endDate: new Date(),
					managerName: "",
					managerCpf: "",
					managerEmail: "",
					managerAddress: "",
					managerPhone: "",
					adminManagerName: "",
					adminManagerCpf: "",
					adminManagerEmail: "",
					adminManagerAddress: "",
					adminManagerPhone: "",
					legislationName: "",
					legislationCpf: "",
					legislationEmail: "",
					legislationAddress: "",
					legislationPhone: "",
				},
			],
			maintenanceContracts: formData.maintenanceContracts || [],
		},
		mode: "onChange",
	});

	const staffFieldArray = useFieldArray({
		control: form.control,
		name: "qualifiedStaff",
	});

	const projectsFieldArray = useFieldArray({
		control: form.control,
		name: "projectsPartnerships",
	});

	const departmentsFieldArray = useFieldArray({
		control: form.control,
		name: "allocationDepartments",
	});

	const managementFieldArray = useFieldArray({
		control: form.control,
		name: "managements",
	});

	const contractsFieldArray = useFieldArray({
		control: form.control,
		name: "maintenanceContracts",
	});

	const getStepFields = (step: number): (keyof MunicipalityFormData)[] => {
		switch (step) {
			case 0:
				return [
					"name",
					"guardInitialDate",
					"guardCount",
					"trafficInitialDate",
					"trafficCount",
					"federativeUnit",
					"unitType",
				];
			case 1:
				return ["qualifiedStaff"];
			case 2:
				return ["projectsPartnerships"];
			case 3:
				return ["allocationDepartments"];
			case 4:
				return ["managements"];
			case 5:
				return ["maintenanceContracts"];
			default:
				return [];
		}
	};

	const validateCurrentStep = async () => {
		const stepFields = getStepFields(currentStep);
		const isValid = await form.trigger(stepFields);
		return isValid;
	};

	const handleNext = async () => {
		const isValid = await validateCurrentStep();

		if (isValid) {
			const currentFormData = form.getValues();
			updateFormData(currentFormData);

			if (currentStep < TOTAL_STEPS - 1) {
				setCurrentStep(currentStep + 1);
			}
		}
	};

	const handlePrevious = () => {
		if (currentStep > 0) {
			const currentFormData = form.getValues();
			updateFormData(currentFormData);
			setCurrentStep(currentStep - 1);
		}
	};

	const handleSubmit = async (data: MunicipalityFormData) => {
		setIsSubmitting(true);

		try {
			// Format the data to match the expected payload structure
			const formattedData = {
				...data,
				guardInitialDate: data.guardInitialDate.toISOString(),
				trafficInitialDate: data.trafficInitialDate.toISOString(),
				managements: data.managements.map((management) => ({
					...management,
					initialDate: management.initialDate.toISOString(),
					endDate: management.endDate.toISOString(),
				})),
			};

			console.log("Dados do formulário:", formattedData);

			// Here you would typically send the data to your API
			// await submitMunicipalityData(formattedData)

			alert(
				"Formulário enviado com sucesso! Verifique o console para ver os dados."
			);
		} catch (error) {
			console.error("Erro ao enviar formulário:", error);
			alert("Erro ao enviar formulário. Tente novamente.");
		} finally {
			setIsSubmitting(false);
		}
	};

	const renderCurrentStep = () => {
		switch (currentStep) {
			case 0:
				return <GeneralDataStep form={form} />;
			case 1:
				return (
					<QualifiedStaffStep form={form} staffFieldArray={staffFieldArray} />
				);
			case 2:
				return (
					<ProjectsPartnershipsStep
						form={form}
						projectsFieldArray={projectsFieldArray}
					/>
				);
			case 3:
				return (
					<AllocationDepartmentsStep
						form={form}
						departmentsFieldArray={departmentsFieldArray}
					/>
				);
			case 4:
				return (
					<ManagementStep
						form={form}
						managementFieldArray={managementFieldArray}
					/>
				);
			case 5:
				return (
					<MaintenanceContractsStep
						form={form}
						contractsFieldArray={contractsFieldArray}
					/>
				);
			default:
				return null;
		}
	};

	const isLastStep = currentStep === TOTAL_STEPS - 1;

	return (
		<div className="min-h-screen bg-gray-50 flex">
			<StepIndicator currentStep={currentStep} totalSteps={TOTAL_STEPS} />

			<div className="flex-1 p-8">
				<div className="max-w-4xl mx-auto">
					<div className="mb-6">
						<Button
							variant="ghost"
							onClick={() => window.history.back()}
							className="text-gray-600 hover:text-gray-900"
						>
							<ArrowLeft className="w-4 h-4 mr-2" />
							Voltar
						</Button>
					</div>

					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(handleSubmit)}
							className="space-y-8"
						>
							{renderCurrentStep()}

							<div className="flex justify-between pt-6 border-t">
								<Button
									type="button"
									variant="outline"
									onClick={handlePrevious}
									disabled={currentStep === 0}
								>
									<ArrowLeft className="w-4 h-4 mr-2" />
									Anterior
								</Button>

								{isLastStep ? (
									<Button
										type="submit"
										disabled={isSubmitting}
										className="bg-blue-600 hover:bg-blue-700"
									>
										{isSubmitting ? "Enviando..." : "Finalizar Cadastro"}
									</Button>
								) : (
									<Button
										type="button"
										onClick={handleNext}
										className="bg-blue-600 hover:bg-blue-700"
									>
										Próximo
										<ArrowRight className="w-4 h-4 ml-2" />
									</Button>
								)}
							</div>
						</form>
					</Form>
				</div>
			</div>
		</div>
	);
}
