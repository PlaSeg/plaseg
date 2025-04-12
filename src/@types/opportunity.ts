export type Documentation = {
	id: string;
	code: number;
	title: string;
	description: string;
};

export type Opportunity = {
	id: string;
	title: string;
	category: string;
	responsibleAgency: string;
	description: string;
	startDate: Date;
	endDate: Date;
	executionPeriod: number;
	minFundingAmount: number;
	maxFundingAmount: number;
	documentation: Documentation[];
	isActive: boolean;
	createdAt: Date;
	updatedAt: Date;
};
