export interface OpportunityColumn {
	id: string;
	title: string;
	category: string;
	startDate: string;
	endDate: string;
	minFundingAmount: number;
	maxFundingAmount: number;
	isActive: boolean;
}

export const opportunitiesMock: OpportunityColumn[] = [
	{
		id: "e0c8a6e4-7b1d-4f8c-a5e3-9d2b0e3f7d6c",
		title: "Fomento à Segurança Pública Municipal",
		category: "Edital",
		startDate: "01/03/2025",
		endDate: "30/04/2025",
		minFundingAmount: 500000.0,
		maxFundingAmount: 3000000.0,
		isActive: true,
	},
	{
		id: "a1b2c3d4-e5f6-4a5b-8c7d-9e0f1a2b3c4d",
		title: "Capacitação da Guarda Municipal",
		category: "Chamada Pública",
		startDate: "15/03/2025",
		endDate: "15/05/2025",
		minFundingAmount: 300000.0,
		maxFundingAmount: 1500000.0,
		isActive: true,
	},
	{
		id: "f1e2d3c4-b5a6-4d7c-8b9a-0c1d2e3f4a5b",
		title: "Aquisição de Equipamentos de Segurança",
		category: "Edital",
		startDate: "01/04/2025",
		endDate: "30/06/2025",
		minFundingAmount: 450000.0,
		maxFundingAmount: 2000000.0,
		isActive: true,
	},
	{
		id: "1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d",
		title: "Programa de Modernização da Segurança Municipal",
		category: "Chamada Pública",
		startDate: "01/02/2025",
		endDate: "31/03/2025",
		minFundingAmount: 600000.0,
		maxFundingAmount: 2500000.0,
		isActive: false,
	},
	{
		id: "9f8e7d6c-5b4a-3c2d-1e0f-9a8b7c6d5e4f",
		title: "Infraestrutura para Mobilidade Urbana",
		category: "Edital",
		startDate: "01/05/2025",
		endDate: "30/06/2025",
		minFundingAmount: 800000.0,
		maxFundingAmount: 5000000.0,
		isActive: true,
	},
	{
		id: "7d8e9f0a-1b2c-3d4e-5f6a-7b8c9d0e1f2a",
		title: "Revitalização de Espaços Públicos",
		category: "Concurso",
		startDate: "15/04/2025",
		endDate: "15/07/2025",
		minFundingAmount: 350000.0,
		maxFundingAmount: 1800000.0,
		isActive: true,
	},
	{
		id: "2c3d4e5f-6a7b-8c9d-0e1f-2a3b4c5d6e7f",
		title: "Programas de Saúde Preventiva",
		category: "Chamada Pública",
		startDate: "01/06/2025",
		endDate: "31/08/2025",
		minFundingAmount: 700000.0,
		maxFundingAmount: 4000000.0,
		isActive: true,
	},
	{
		id: "8a7b6c5d-4e3f-2a1b-0c9d-8e7f6a5b4c3d",
		title: "Desenvolvimento de Tecnologias Educacionais",
		category: "Edital",
		startDate: "15/05/2025",
		endDate: "15/08/2025",
		minFundingAmount: 400000.0,
		maxFundingAmount: 2200000.0,
		isActive: true,
	},
	{
		id: "3b4c5d6e-7f8a-9b0c-1d2e-3f4a5b6c7d8e",
		title: "Preservação de Patrimônio Cultural",
		category: "Concurso",
		startDate: "01/07/2025",
		endDate: "30/09/2025",
		minFundingAmount: 550000.0,
		maxFundingAmount: 2800000.0,
		isActive: false,
	},
	{
		id: "5d6e7f8a-9b0c-1d2e-3f4a-5b6c7d8e9f0a",
		title: "Inovação em Gestão Pública",
		category: "Chamada Pública",
		startDate: "15/06/2025",
		endDate: "15/09/2025",
		minFundingAmount: 650000.0,
		maxFundingAmount: 3500000.0,
		isActive: true,
	},
];
