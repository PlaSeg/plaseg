import {
	Package,
	Tags,
	FileText,
	UserCog,
	Banknote,
	Barcode,
	FolderKanban,
} from "lucide-react";
import { ReactNode } from "react";

interface MenuItem {
	icon: ReactNode;
	title: string;
	description: string;
	ready: boolean;
	url: string;
}

export const adminMenuItems: MenuItem[] = [
	{
		icon: <Banknote size={24} className="text-blue-500" />,
		title: "Oportunidades",
		description:
			"Cadastre, edite e gerencie as oportunidades de financiamento que os municípios poderão acessar.",
		url: "/admin/oportunidades",
		ready: true,
	},

	{
		icon: <Tags size={24} className="text-blue-500" />,
		title: "Tipos",
		description:
			"Cadastre, edite e gerencie os tipos de produtos, serviços e categorias utilizados no sistema",
		url: "/admin/tipos",
		ready: true,
	},
	{
		icon: <Package size={24} className="text-blue-500" />,
		title: "Produtos Base",
		description:
			"Cadastre, edite e gerencie o catálogo completo de produtos que vão servir de base os produtos específicos.",
		url: "/admin/produtos-base",
		ready: false,
	},
	{
		icon: <Barcode size={24} className="text-blue-500" />,
		title: "Produtos Específicos",
		description:
			"Cadastre, edite e gerencie os produtos específicos que serão oferecidos aos municípios.",
		url: "/admin/produtos-especificos",
		ready: false,
	},
	{
		icon: <FolderKanban size={24} className="text-blue-500" />,
		title: "Tipos de Projeto",
		description:
			"Defina e gerencie os tipos de projetos que podem ser cadastrados no sistema",
		url: "/admin/tipos-de-projeto",
		ready: false,
	},
	{
		icon: <FileText size={24} className="text-blue-500" />,
		title: "Contratos",
		description:
			"Gerencie a documentação contratual, incluindo modelos, versões e status dos contratos ativos",
		url: "/admin/contratos",
		ready: false,
	},
	{
		icon: <UserCog size={24} className="text-blue-500" />,
		title: "Usuários",
		description:
			"Controle o acesso ao sistema, gerencie perfis, permissões e dados dos usuários",
		url: "/admin/usuarios",
		ready: false,
	},
];
