import { CompanyMenu } from "@/components/company/company-menu";
import { CompanyNavbar } from "@/components/company/company-navbar";
import { Outlet } from "react-router";

export default function CompanyLayout() {
	return (
		<div className="flex flex-col h-screen w-full px-4">
			<header className="w-full border-b border-gray-100">
				<div className="w-full max-w-[1400px] mx-auto flex items-center justify-between mt-2">
					<h1 className="font-semibold text-3xl">Plaseg</h1>

					<CompanyMenu />
				</div>

				<CompanyNavbar />
			</header>

			<div className="w-full max-w-[1400px] mx-auto">
				<Outlet />
			</div>
		</div>
	);
}
