import { Header } from "@/components/header/header";
import { AppLayout } from "./app-layout";
import { CityNavbar } from "@/components/city/navbar/city-navbar";
import { CityMenu } from "@/components/city/menu/city-menu";

export default function CityLayout() {
	return (
		<AppLayout className="bg-muted/50">
			<Header menu={<CityMenu />} navbar={<CityNavbar />} />
		</AppLayout>
	);
}
