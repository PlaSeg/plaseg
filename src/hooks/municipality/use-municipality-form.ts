import { create } from "zustand";
import type { MunicipalityFormData } from "@/@schemas/municipality-schema";

interface FormStore {
	currentStep: number;
	formData: Partial<MunicipalityFormData>;
	setCurrentStep: (step: number) => void;
	updateFormData: (data: Partial<MunicipalityFormData>) => void;
	resetForm: () => void;
}

const initialFormData: Partial<MunicipalityFormData> = {
	name: "",
	guardCount: 0,
	trafficCount: 0,
	federativeUnit: "",
	unitType: "UF",
	qualifiedStaff: [],
	projectsPartnerships: [],
	allocationDepartments: [],
	managements: [],
	maintenanceContracts: [],
};

export const useFormStore = create<FormStore>((set) => ({
	currentStep: 0,
	formData: initialFormData,
	setCurrentStep: (step) => set({ currentStep: step }),
	updateFormData: (data) =>
		set((state) => ({
			formData: { ...state.formData, ...data },
		})),
	resetForm: () =>
		set({
			currentStep: 0,
			formData: initialFormData,
		}),
}));
