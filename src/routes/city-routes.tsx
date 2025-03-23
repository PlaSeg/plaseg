import { Route, Routes } from "react-router";

import NoticeDetails from "@/pages/city/notice-details";
import Opportunities from "@/pages/city/opportunities";
import Projects from "@/pages/city/projects";
import RegisterProject from "@/pages/city/register-project";

export function CityRoutes() {
	return (
		<Routes>
			<Route path="oportunidades" element={<Opportunities />} />
			<Route path="cadastrar-projeto" element={<RegisterProject />} />
			<Route path="projetos" element={<Projects />} />
			<Route path="edital" element={<NoticeDetails />} />
		</Routes>
	);
}
