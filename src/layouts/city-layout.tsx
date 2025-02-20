import { CityMenu } from "@/components/city/city-menu";
import { CityNavbar } from "@/components/city/city-navbar";
import { Outlet } from "react-router";

export default function CityLayout() {
	return (
		<div className="flex flex-col h-screen w-full px-4">
			<header className="w-full border-b border-gray-100 flex flex-col gap-2 py-2">
				<div className="w-full max-w-[1400px] mx-auto flex items-center justify-between">
					<h1 className="font-semibold text-3xl">Plaseg</h1>

					<CityMenu />
				</div>

				<CityNavbar />
			</header>

			<div className="w-full max-w-[1400px] mx-auto">
				<Outlet />
			</div>
		</div>
	);
}
