import { Routes, Route } from "react-router";

import { PrivateRoutes } from "./private-routes";
import { PublicRoutes } from "./public-routes";

import Home from "@/pages/home";
import RegisterMunicipality from "@/pages/city/register-city";

import AuthLayout from "@/layouts/auth-layout";
import { AuthRoutes } from "./auth-routes";

import CityLayout from "@/layouts/city-layout";
import { MunicipalityRoutes } from "./minicipality-routes";

import AdminLayout from "@/layouts/admin-layout";

import Dashboard from "@/pages/admin/dashboard";
import Opportunities from "@/pages/admin/opportunities";
import Types from "@/pages/admin/types";
import Contracts from "@/pages/admin/contracts";
import Administrators from "@/pages/admin/administrators";
import BaseProducts from "@/pages/admin/base-products";
import RequiredDocuments from "@/pages/admin/required-documents";
import ProjectTypes from "@/pages/admin/project-types";
import Settings from "@/pages/admin/settings";
import SpecificProducts from "@/pages/admin/specific-products";

export function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />

			<Route element={<PublicRoutes />}>
				<Route element={<AuthLayout />}>
					<Route path="*" element={<AuthRoutes />} />
				</Route>
			</Route>

			<Route element={<PrivateRoutes />}>
				<Route path="cadastrar-municipio" element={<RegisterMunicipality />} />

				<Route path="municipio" element={<CityLayout />}>
					<Route path="*" element={<MunicipalityRoutes />} />
				</Route>

				<Route path="admin" element={<AdminLayout />}>
					<Route index element={<Dashboard />} />
					<Route path="oportunidades" element={<Opportunities />} />
					<Route path="tipos" element={<Types />} />
					<Route path="administradores" element={<Administrators />} />
					<Route path="tipos-de-projeto" element={<ProjectTypes />} />
					<Route path="produtos-base" element={<BaseProducts />} />
					<Route path="produtos-especificos" element={<SpecificProducts />} />
					<Route path="contratos" element={<Contracts />} />
					<Route path="configuracoes" element={<Settings />} />
					<Route
						path="documentos-obrigatorios"
						element={<RequiredDocuments />}
					/>
				</Route>
			</Route>
		</Routes>
	);
}
