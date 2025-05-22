import { Routes, Route, Navigate } from "react-router";

import { PrivateRoutes } from "./private-routes";
import { PublicRoutes } from "./public-routes";

import Home from "@/pages/home";
import RegisterMunicipality from "@/pages/city/register-city";

import AuthLayout from "@/layouts/auth-layout";
import { AuthRoutes } from "./auth-routes";

import CityLayout from "@/layouts/city-layout";
import { MunicipalityRoutes } from "./minicipality-routes";

import AdminLayout from "@/layouts/admin-layout";
import { AdminRoutes } from "./admin-routes";
import RegisterCompany from "@/pages/company/register-company";

export function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="cadastrar-empresa" element={<RegisterCompany />} />

			<Route element={<PublicRoutes />}>
				<Route element={<AuthLayout />}>
					<Route path="*" element={<AuthRoutes />} />
				</Route>
			</Route>

			<Route element={<PrivateRoutes />}>
				<Route path="cadastrar-municipio" element={<RegisterMunicipality />} />

				<Route path="municipio" element={<CityLayout />}>
					<Route
						index
						element={<Navigate to="/municipio/oportunidades" replace />}
					/>
					<Route path="*" element={<MunicipalityRoutes />} />
				</Route>

				<Route path="admin" element={<AdminLayout />}>
					<Route index element={<Navigate to="/admin/dashboard" replace />} />
					<Route path="*" element={<AdminRoutes />} />
				</Route>
			</Route>
		</Routes>
	);
}
