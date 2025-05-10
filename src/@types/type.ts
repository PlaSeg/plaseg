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
	parentId: string | null;

	createdAt: Date;
	updatedAt: Date | null;
}
