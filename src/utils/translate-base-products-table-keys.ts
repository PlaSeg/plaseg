export function translateBaseProductsTableKeys(key: string): string {
	const translations: Record<string, string> = {
		select: "Selecionar",
		code: "Código",
		name: "Nome",
		category: "Categoria",
		subCategory: "Subcategoria",
		subSubCategory: "Subsubcategoria",
		budget1: "Orçamento",
		budget1Validity: "Validade do Orçamento",
		createdAt: "Criado em",
		actions: "Ações",
	};

	return translations[key] || key;
}
