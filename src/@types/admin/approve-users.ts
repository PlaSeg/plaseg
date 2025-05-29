export enum Role {
	ADMIN = "ADMIN",
	MUNICIPALITY = "MUNICIPALITY",
	COMPANY = "COMPANY",
}


export interface ApproveUser {
	id: string;
	name: string;
	email: string;
	document: string;
	phone: string;
	role: Role;
	createdAt: Date;
	updatedAt: Date | null;
}
