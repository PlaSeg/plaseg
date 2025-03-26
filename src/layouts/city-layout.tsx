import { Header } from "@/components/header/header";
import { Menu } from "@/components/header/menu";
import { AppLayout } from "./app-layout";
import { CityNavbar } from "@/components/city/navbar/city-navbar";

export default function CityLayout() {
	return (
		<AppLayout className="bg-muted/50">
			<Header
				menu={<Menu name={"Acme"} email="acme@gov.com.br" />}
				navbar={<CityNavbar />}
			/>
		</AppLayout>
	);
}
