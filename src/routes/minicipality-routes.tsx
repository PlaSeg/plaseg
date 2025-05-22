import { Route, Routes } from "react-router";

import Opportunities from "@/pages/municipality/opportunities";
import Projects from "@/pages/municipality/projects";
import OpportunityDetails from "@/pages/municipality/opportunity-details";
import ProjectsDetails from "@/pages/municipality/projects-details";

export function MunicipalityRoutes() {
	return (
		<Routes>
			<Route path="oportunidades" element={<Opportunities />} />
			<Route path="oportunidades/:slug" element={<OpportunityDetails />} />
			<Route path="projetos" element={<Projects />} />
			<Route path="projetos/:slug" element={<ProjectsDetails />} />
		</Routes>
	);
}
