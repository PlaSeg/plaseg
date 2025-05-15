import { Route, Routes } from "react-router";
import Dashboard from "@/pages/admin/dashboard";
import Opportunities from "@/pages/admin/opportunities";
import Consultants from "@/pages/admin/consultants";
import Products from "@/pages/admin/products";
import Types from "@/pages/admin/types";
import Contracts from "@/pages/admin/contracts";
import Administrators from "@/pages/admin/administrators";
import EspecificProducts from "@/pages/admin/especific-products";
import BaseProducts from "@/pages/admin/base-products";
import MandatoryDocuments from "@/pages/admin/mandatory-documents";

export function AdminRoutes() {
	return (
		<Routes>
			<Route path="dashboard" element={<Dashboard />} />
			<Route path="oportunidades" element={<Opportunities />} />
			<Route path="consultores" element={<Consultants />} />
			<Route path="produtos" element={<Products />} />
			<Route path="tipos" element={<Types />} />
			<Route path="contratos" element={<Contracts />} />
			<Route path="administradores" element={<Administrators />} />
			<Route path="produtos-especificos" element={<EspecificProducts />} />
			<Route path="produtos-base" element={<BaseProducts />} />
			<Route path="documentos-obrigatorios" element={<MandatoryDocuments />} />
		</Routes>
	);
}
