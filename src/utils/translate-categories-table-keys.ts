export function translateCategoriesTableKeys(key: string): string {
	const translations: Record<string, string> = {
		id: "ID",
		code: "Código",
		name: "Nome",
		updatedAt: "Data de atualização",
		createdAt: "Data de criação",
	};

	return translations[key] || key;
}
