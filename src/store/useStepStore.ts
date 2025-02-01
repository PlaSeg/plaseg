import { create } from "zustand";

interface Step {
	title: string;
	status: "completed" | "progress" | "pending";
}

interface StepsStore {
	steps: Step[];
	stepForward: () => void;
	stepBack: () => void;
	currentStep: () => number;
}

const stepsData: Step[] = [
	{ title: "Informações Cadastrais da Empresa", status: "progress" },
	{ title: "Endereço da Empresa", status: "pending" },
	{ title: "Redes Sociais", status: "pending" },
	{ title: "Informações do Representante Legal", status: "pending" },
	{ title: "Informações Comerciais", status: "pending" },
	{ title: "Documentação Obrigatória", status: "pending" },
	{ title: "Certificações e Qualificações", status: "pending" },
];

export const useStepsStore = create<StepsStore>((set, get) => ({
	steps: stepsData,

	stepForward: () =>
		set((state) => {
			const currentIndex = state.steps.findIndex(
				(step) => step.status === "progress"
			);
			if (currentIndex === -1 || currentIndex === state.steps.length - 1)
				return state;

			const newSteps = [...state.steps];
			newSteps[currentIndex].status = "completed";
			newSteps[currentIndex + 1].status = "progress";

			return { steps: newSteps };
		}),

	stepBack: () =>
		set((state) => {
			const currentIndex = state.steps.findIndex(
				(step) => step.status === "progress"
			);
			if (currentIndex <= 0) return state;

			const newSteps = [...state.steps];
			newSteps[currentIndex].status = "pending";
			newSteps[currentIndex - 1].status = "progress";

			return { steps: newSteps };
		}),

	currentStep: () => {
		return get().steps.findIndex((step) => step.status === "progress") + 1;
	},
}));
