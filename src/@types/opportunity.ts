export interface RequiredDocument {
	id: string;
	name: string;
	description: string;
	model: string;
	createdAt: Date;
	updatedAt?: Date | null;
}

export type Opportunity = {
	id: string;
	title: string;
	description: string;
	availableValue: number;
	minValue: number;
	maxValue: number;
	initialDeadline: Date;
	finalDeadline: Date;
	requiresCounterpart: boolean;
	counterpartPercentage: number;
	requiredDocuments: RequiredDocument[];

	createdAt: Date;
	updatedAt?: Date | null;
};
