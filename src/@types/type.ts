export enum TypeGroup {
	OPPORTUNITY = "OPPORTUNITY",
	CATEGORY = "CATEGORY",
	SUBCATEGORY = "SUBCATEGORY",
	SUBSUBCATEGORY = "SUBSUBCATEGORY",
}

export interface Type {
	id: string;
	description: string;
	group: TypeGroup;
	parent: string | null;
	createdAt: string;
	updatedAt: string | null;
}
