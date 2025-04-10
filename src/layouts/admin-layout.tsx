import { Header } from "@/components/header/header";
import { AppLayout } from "./app-layout";
import { AdminNavbar } from "@/components/admin/navbar/admin-navbar";
import { AdminMenu } from "@/components/admin/menu/admin-menu";

export default function AdminLayout() {
	return (
		<AppLayout className="bg-muted/50">
			<Header menu={<AdminMenu />} navbar={<AdminNavbar />} />
		</AppLayout>
	);
}
