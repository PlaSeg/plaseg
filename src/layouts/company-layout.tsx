import { Header } from "@/components/header/header";
import { AppLayout } from "./app-layout";
import { CompanyNavbar } from "@/components/company/navbar/company-navbar";
import { CompanyMenu } from "@/components/company/menu/company-menu";

export default function CompanyLayout() {
	return (
		<AppLayout>
			<Header menu={<CompanyMenu />} navbar={<CompanyNavbar />} />
		</AppLayout>
	);
}
