import { Header } from "@/components/header/header";
import { AppLayout } from "./app-layout";
import { Menu } from "@/components/header/menu";
import { CompanyNavbar } from "@/components/company/navbar/company-navbar";

export default function CompanyLayout() {
	return (
		<AppLayout>
			<Header
				menu={<Menu name={"Compex Jr"} email="contato@compexjr.com.br" />}
				navbar={<CompanyNavbar />}
			/>
		</AppLayout>
	);
}
