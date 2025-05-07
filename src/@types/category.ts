export type subCategory = {
	id: string;
	code: number;
	title: string;
	description: string;
    category: Category[];
};

export type subSubCategory = {
	id: string;
	code: number;
	title: string;
	description: string;
    subCategory: subCategory[];
};

export type Category = {
    id: string;
    code: number;
    name: string;
    updatedAt: string;
    createdAt: string;

};
