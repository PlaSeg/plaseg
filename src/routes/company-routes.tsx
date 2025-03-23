import { Route, Routes } from "react-router";

import AddProduct from "@/pages/company/add-product";
import PriceRegisterRecords from "@/pages/company/price-register-records";
import Products from "@/pages/company/products";
import AddPriceRegisterRecord from "@/pages/company/register-price-record-agreement";
import News from "@/pages/company/news";
import NewsDetails from "@/pages/company/news-details";

export function CompanyRoutes() {
	return (
		<Routes>
			<Route path="noticias" element={<News />} />
			<Route path="noticia" element={<NewsDetails />} />
			<Route path="produtos" element={<Products />} />
			<Route path="adicionar-produto" element={<AddProduct />} />
			<Route
				path="atas-de-registro-de-preco"
				element={<PriceRegisterRecords />}
			/>
			<Route
				path="adicionar-ata-de-registro-de-preco"
				element={<AddPriceRegisterRecord />}
			/>
		</Routes>
	);
}
