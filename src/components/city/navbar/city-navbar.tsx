import { Navbar } from "@/components/navbar/navbar";
import { NavbarItem } from "@/components/navbar/navbar-item";
import { KanbanSquare, ScrollText } from "lucide-react";

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
