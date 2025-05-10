export function translateBaseProductsTableKeys(key: string): string {
	const translations: Record<string, string> = {
		select: "Selecionar",
		code: "Código",
		name: "Nome",
		type: "Tipo",
		technicalDescription: "Descrição Técnica",
		budget1: "Orçamento 1",
		budget1Validity: "Validade Orçamento 1",
		budget2: "Orçamento 2",
		budget2Validity: "Validade Orçamento 2",
		budget3: "Orçamento 3",
		budget3Validity: "Validade Orçamento 3",
		unitValue: "Valor Unitário",
		createdAt: "Criado em",
		updatedAt: "Atualizado em",
		actions: "Ações",
	};

	return translations[key] || key;
}
