import React from "react";
import {
	Package,
	Users,
	Tags,
	FileText,
	UserCog,
	Banknote,
} from "lucide-react";
import { ReactNode } from "react";

interface MenuItem {
	icon: ReactNode;
	title: string;
	description: string;
	url: string;
}

export const adminMenuItems: MenuItem[] = [
	{
		icon: <Banknote size={24} className="text-blue-500" />,
		title: "Oportunidades",
		description:
			"Cadastre, edite e gerencie as oportunidades de financiamento que os municípios poderão acessar.",
		url: "/admin/oportunidades",
	},
	{
		icon: <Package size={24} className="text-blue-500" />,
		title: "Produtos Referência",
		description:
			"Cadastre, edite e gerencie o catálogo completo de produtos que vão servir de referência para as empresas.",
		url: "/admin/produtos",
	},
	{
		icon: <Users size={24} className="text-blue-500" />,
		title: "Consultores",
		description:
			"Administre o cadastro de consultores, suas especialidades, áreas de atuação.",
		url: "/admin/consultores",
	},
	{
		icon: <Tags size={24} className="text-blue-500" />,
		title: "Tipos",
		description:
			"Configure e mantenha os tipos de produtos, serviços e categorias utilizados no sistema",
		url: "/admin/tipos",
	},
	{
		icon: <FileText size={24} className="text-blue-500" />,
		title: "Contratos",
		description:
			"Gerencie a documentação contratual, incluindo modelos, versões e status dos contratos ativos",
		url: "/admin/contratos",
	},
	{
		icon: <UserCog size={24} className="text-blue-500" />,
		title: "Usuários",
		description:
			"Controle o acesso ao sistema, gerencie perfis, permissões e dados dos usuários",
		url: "/admin/usuarios",
	},
];
