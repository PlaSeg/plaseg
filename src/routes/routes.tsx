import { Routes, Route } from "react-router";

import Home from "@/pages/home";
import Plans from "@/pages/plans/plans";
import Payment from "@/pages/payment/payment";
import RegisterCompany from "@/pages/company/register-company";
import RegisterMunicipality from "@/pages/city/register-city";

import AuthLayout from "@/layouts/auth-layout";
import { AuthRoutes } from "./auth-routes";

import CompanyLayout from "@/layouts/company-layout";
import { CompanyRoutes } from "./company-routes";

import CityLayout from "@/layouts/city-layout";
import { CityRoutes } from "./city-routes";
import { PublicRoutes } from "./public-routes";
import { PrivateRoutes } from "./private-routes";

export function AppRoutes() {
	return (
		<Routes>
			<Route element={<PublicRoutes />}>
				<Route path="/" element={<Home />} />
				<Route element={<AuthLayout />}>
					<Route path="*" element={<AuthRoutes />} />
				</Route>
			</Route>

			<Route element={<PrivateRoutes />}>
				<Route path="precos" element={<Plans />} />
				<Route path="pagamento" element={<Payment />} />
				<Route path="cadastrar-empresa" element={<RegisterCompany />} />
				<Route path="cadastrar-municipio" element={<RegisterMunicipality />} />

				<Route path="municipio" element={<CityLayout />}>
					<Route path="*" element={<CityRoutes />} />
				</Route>

				<Route path="empresa" element={<CompanyLayout />}>
					<Route path="*" element={<CompanyRoutes />} />
				</Route>
			</Route>
		</Routes>
	);
}
