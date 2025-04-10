import {
	Package,
	Users,
	Briefcase,
	Tags,
	FileText,
	UserCog,
} from "lucide-react";

export const adminMenuItems = [
	{
		icon: Package,
		title: "Produtos Referência",
		description:
			"Cadastre, edite e gerencie o catálogo completo de produtos que vão servir de referência para as empresas.",
		url: "/admin/produtos",
	},
	{
		icon: Users,
		title: "Consultores",
		description:
			"Administre o cadastro de consultores, suas especialidades, áreas de atuação.",
		url: "/admin/consultores",
	},
	{
		icon: Briefcase,
		title: "Oportunidades",
		description:
			"Cadastre, edite e gerencie as oportunidades de financiamento que os municípios poderão acessar.",
		url: "/admin/oportunidades",
	},
	{
		icon: Tags,
		title: "Tipos",
		description:
			"Configure e mantenha os tipos de produtos, serviços e categorias utilizados no sistema",
		url: "/admin/tipos",
	},
	{
		icon: FileText,
		title: "Contratos",
		description:
			"Gerencie a documentação contratual, incluindo modelos, versões e status dos contratos ativos",
		url: "/admin/contratos",
	},
	{
		icon: UserCog,
		title: "Usuários",
		description:
			"Controle o acesso ao sistema, gerencie perfis, permissões e dados dos usuários",
		url: "/admin/usuarios",
	},
];
