import { Routes, Route } from "react-router";

import Home from "@/pages/home";
import Prices from "@/pages/self-registration/prices";
import Payment from "@/pages/self-registration/payment";
import RegisterCompany from "@/pages/company/register-company";
import RegisterMunicipality from "@/pages/city/register-city";

import { AuthRoutes } from "./auth-routes";
import { CompanyRoutes } from "./company-routes";
import { CityRoutes } from "./city-routes";
import CompanyLayout from "@/layouts/company-layout";
import CityLayout from "@/layouts/city-layout";
import AuthLayout from "@/layouts/auth-layout";

export function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="precos" element={<Prices />} />
			<Route path="pagamento" element={<Payment />} />
			<Route path="cadastrar-empresa" element={<RegisterCompany />} />
			<Route path="cadastrar-municipio" element={<RegisterMunicipality />} />

			<Route element={<AuthLayout />}>
				<Route path="*" element={<AuthRoutes />} />
			</Route>

			<Route path="municipio" element={<CityLayout />}>
				<Route path="*" element={<CityRoutes />} />
			</Route>

			<Route path="empresa" element={<CompanyLayout />}>
				<Route path="*" element={<CompanyRoutes />} />
			</Route>
		</Routes>
	);
}
