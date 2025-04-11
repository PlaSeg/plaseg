export function translateOpportunitiesTableKeys(key: string): string {
	const translations: Record<string, string> = {
		id: "ID",
		title: "Título",
		category: "Categoria",
		startDate: "Data de Início",
		endDate: "Data de Término",
		minFundingAmount: "Valor Mínimo",
		maxFundingAmount: "Valor Máximo",
		isActive: "Ativo",
		actions: "Ações",
	};

	return translations[key] || key;
}
