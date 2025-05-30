import { Navigate, Route, Routes } from "react-router";

import { AdminRoutes } from "./admin-routes";
import { AuthRoutes } from "./auth-routes";

import { PrivateRoutes } from "./private-routes";
import { PublicRoutes } from "./public-routes";

import AdminLayout from "@/layouts/admin-layout";

import AuthLayout from "@/layouts/auth-layout";
import MunicipalityLayout from "@/layouts/municipality-layout";

import Home from "@/pages/home";

import RegisterMunicipality from "@/pages/municipality/register-municipality";

import RegisterCompany from "@/pages/company/register-company";

import Opportunities from "@/pages/opportunities/opportunities";
import OpportunityDetails from "@/pages/opportunities/opportunity-details";

import Projects from "@/pages/projects/projects";
import ProjectsDetails from "@/pages/projects/projects-details";
import ProjectSectionDetails from "@/pages/projects/projects-section-details";

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

				<Route path="*" element={<MunicipalityLayout />}>
					<Route path="oportunidades" element={<Opportunities />} />
					<Route path="oportunidades/:slug" element={<OpportunityDetails />} />

					<Route path="projetos" element={<Projects />} />
					<Route path="projetos/:slug" element={<ProjectsDetails />} />
					<Route
						path="projetos/:slug/:secao"
						element={<ProjectSectionDetails />}
					/>
				</Route>

				<Route path="admin" element={<AdminLayout />}>
					<Route index element={<Navigate to="/admin/dashboard" replace />} />
					<Route path="*" element={<AdminRoutes />} />
				</Route>
			</Route>
			

		</Routes>
	);
}
