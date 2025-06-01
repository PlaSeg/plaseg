export enum Role {
	ADMIN = "ADMIN",
	MUNICIPALITY = "MUNICIPALITY",
	COMPANY = "COMPANY",
}

export interface User {
	id: string;
	name: string;
	email: string;
	document: string;
	phone: string;
	role: Role;
	allowed: boolean;
	createdAt: Date;
	updatedAt: Date | null;
}
