import { KanbanSquare, ScrollText } from "lucide-react";
import { Navbar } from "../navbar/navbar";
import { NavbarItem } from "../navbar/navbar-item";

export function CityNavbar() {
	return (
		<Navbar>
			<NavbarItem
				title="Oportunidades"
				icon={<ScrollText size={16} />}
				link="/municipio/oportunidades"
			/>

			<NavbarItem
				title="Projetos"
				icon={<KanbanSquare size={16} />}
				link="/municipio/projetos"
			/>
		</Navbar>
	);
}
