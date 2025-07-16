import { KanbanSquare, ScrollText } from "lucide-react";
import { Header } from "@/components/header/header";
import { Navbar } from "@/components/navbar/navbar";
import { NavbarItem } from "@/components/navbar/navbar-item";
import { AppLayout } from "./app-layout";

export default function MunicipalityLayout() {
	return (
		<AppLayout className="bg-slate-100">
			<Header>
				<Navbar>
					<NavbarItem
						title="Oportunidades"
						icon={<ScrollText size={16} />}
						link="/oportunidades"
					/>

					<NavbarItem
						title="Projetos"
						icon={<KanbanSquare size={16} />}
						link="/projetos"
					/>
				</Navbar>
			</Header>
		</AppLayout>
	);
}
