import { Newspaper, Package, ScrollText } from "lucide-react";
import { NavbarItem } from "../navbar/navbar-item";
import { Navbar } from "../navbar/navbar";

export function CompanyNavbar() {
	return (
		<Navbar>
			<NavbarItem
				title="Notícias"
				icon={<Newspaper size={16} />}
				link="/empresa/noticias"
			/>

			<NavbarItem
				title="Produtos"
				icon={<Package size={16} />}
				link="/empresa/produtos"
			/>

			<NavbarItem
				title="Atas de Registro de Preço"
				icon={<ScrollText size={16} />}
				link="/empresa/atas-de-registro-de-preco"
			/>
		</Navbar>
	);
}
