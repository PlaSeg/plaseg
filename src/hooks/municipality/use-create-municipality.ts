import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
	useForm,
	useFieldArray,
	UseFormReturn,
	UseFieldArrayReturn,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
	municipalityFormSchema,
	type MunicipalityFormData,
} from "@/@schemas/municipality-schema";
import { toast } from "sonner";

interface FormStore {
	currentStep: number;
	formData: Partial<MunicipalityFormData>;
	isSubmitting: boolean;
	setCurrentStep: (step: number) => void;
	updateFormData: (data: Partial<MunicipalityFormData>) => void;
	setIsSubmitting: (value: boolean) => void;
	resetForm: () => void;
}

const initialFormData: Partial<MunicipalityFormData> = {
	name: "",
	guardCount: 0,
	trafficCount: 0,
	federativeUnit: "",
	unitType: "MUNICIPIO",
	qualifiedStaff: [
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
	projectsPartnerships: [],
	allocationDepartments: [],
	managements: [
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
	maintenanceContracts: [],
};

const useFormStore = create<FormStore>()(
	persist(
		(set) => ({
			currentStep: 0,
			formData: initialFormData,
			isSubmitting: false,
			setCurrentStep: (step) => set({ currentStep: step }),
			updateFormData: (data) =>
				set((state) => ({
					formData: { ...state.formData, ...data },
				})),
			setIsSubmitting: (value) => set({ isSubmitting: value }),
			resetForm: () =>
				set({
					currentStep: 0,
					formData: initialFormData,
					isSubmitting: false,
				}),
		}),
		{
			name: "municipality-form-storage",
			partialize: (state) => ({
				currentStep: state.currentStep,
				formData: state.formData,
			}),
		}
	)
);

interface UseCreateFormReturn {
	form: UseFormReturn<MunicipalityFormData>;
	currentStep: number;
	isSubmitting: boolean;
	staffFieldArray: UseFieldArrayReturn<MunicipalityFormData, "qualifiedStaff">;
	projectsFieldArray: UseFieldArrayReturn<
		MunicipalityFormData,
		"projectsPartnerships"
	>;
	departmentsFieldArray: UseFieldArrayReturn<
		MunicipalityFormData,
		"allocationDepartments"
	>;
	managementFieldArray: UseFieldArrayReturn<
		MunicipalityFormData,
		"managements"
	>;
	contractsFieldArray: UseFieldArrayReturn<
		MunicipalityFormData,
		"maintenanceContracts"
	>;
	handleNext: () => Promise<void>;
	handlePrevious: () => void;
	handleSubmit: (data: MunicipalityFormData) => Promise<void>;
	validateCurrentStep: () => Promise<boolean>;
	getStepFields: (step: number) => (keyof MunicipalityFormData)[];
}

export function useCreateForm(): UseCreateFormReturn {
	const {
		currentStep,
		formData,
		isSubmitting,
		setCurrentStep,
		updateFormData,
		setIsSubmitting,
	} = useFormStore();

	const form = useForm<MunicipalityFormData>({
		resolver: zodResolver(municipalityFormSchema),
		defaultValues: {
			name: formData.name || "",
			guardInitialDate: formData.guardInitialDate || new Date(),
			guardCount: formData.guardCount || 0,
			trafficInitialDate: formData.trafficInitialDate || new Date(),
			trafficCount: formData.trafficCount || 0,
			federativeUnit: formData.federativeUnit || "",
			unitType: formData.unitType || "MUNICIPIO",
			qualifiedStaff: formData.qualifiedStaff || initialFormData.qualifiedStaff,
			projectsPartnerships: formData.projectsPartnerships || [],
			allocationDepartments: formData.allocationDepartments || [],
			managements: formData.managements || initialFormData.managements,
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

			if (currentStep < 5) {
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

			toast.success(
				"Formulário enviado com sucesso! Verifique o console para ver os dados."
			);

			// resetForm();
			// form.reset();
		} catch (error) {
			console.error("Erro ao enviar formulário:", error);
			alert("Erro ao enviar formulário. Tente novamente.");
		} finally {
			setIsSubmitting(false);
		}
	};

	return {
		form,
		currentStep,
		isSubmitting,
		staffFieldArray,
		projectsFieldArray,
		departmentsFieldArray,
		managementFieldArray,
		contractsFieldArray,
		handleNext,
		handlePrevious,
		handleSubmit,
		validateCurrentStep,
		getStepFields,
	};
}
