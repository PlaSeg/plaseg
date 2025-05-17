import { Navbar } from "@/components/navbar/navbar";
import { NavbarItem } from "@/components/navbar/navbar-item";
import { LayoutDashboard } from "lucide-react";

export function AdminNavbar() {
	return (
		<Navbar>
			<NavbarItem
				title="Dashboard"
				icon={<LayoutDashboard size={16} />}
				link="/admin"
			/>
		</Navbar>
	);
}
