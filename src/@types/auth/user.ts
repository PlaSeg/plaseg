export enum Role {
	ADMIN = "ADMIN",
	MUNICIPALITY = "MUNICIPALITY",
}

export interface User {
	id: string;
	name: string;
	email: string;
	document: string;
	phone: string;
	password: string;
	allowed: boolean;
	role: Role;
	createdAt: Date;
	updatedAt: Date | null;
}
