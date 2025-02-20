import { Routes, Route } from "react-router";

import AuthLayout from "../layouts/auth-layout";
import CompanyLayout from "@/layouts/company-layout";

import { Home } from "@/pages/home";
import { SignUp } from "@/pages/self-registration/sign-up";
import { SignIn } from "@/pages/self-registration/sign-in";
import { ResetPassword } from "@/pages/self-registration/reset-password";
import { Prices } from "@/pages/self-registration/prices";
import { Payment } from "@/pages/self-registration/payment";
import { RegisterCompany } from "@/pages/company/register-company";
import { RegisterMunicipality } from "@/pages/city/register-city";
import { Opportunities } from "@/pages/city/opportunities";
import { NoticeDetails } from "@/pages/city/notice-details";
import { RegisterProject } from "@/pages/city/register-project";
import { RegisterProduct } from "@/pages/company/register-product";
import { RegisterPriceRecordAgreement } from "@/pages/company/register-price-record-agreement";
import { PriceRecordAgreements } from "@/pages/company/price-record-agreements";
import News from "@/pages/company/news";
import CityLayout from "@/layouts/city-layout";
import Projects from "@/pages/city/projects";

export function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />

			{/* Rotas de Autenticação */}
			<Route element={<AuthLayout />}>
				<Route path="entrar" element={<SignIn />} />
				<Route path="cadastro" element={<SignUp />} />
				<Route path="esqueceu-senha" element={<ResetPassword />} />
			</Route>
			<Route path="precos" element={<Prices />} />
			<Route path="pagamento" element={<Payment />} />
			<Route path="cadastrar-empresa" element={<RegisterCompany />} />
			<Route path="cadastrar-municipio" element={<RegisterMunicipality />} />

			{/* Rotas de Município */}
			<Route path="municipio" element={<CityLayout />}>
				<Route path="oportunidades" element={<Opportunities />} />
				<Route path="edital" element={<NoticeDetails />} />
				<Route path="projetos" element={<Projects />} />
				<Route path="cadastrar-projeto" element={<RegisterProject />} />
			</Route>

			{/* Rotas de Empresa */}
			<Route path="empresa" element={<CompanyLayout />}>
				<Route path="noticias" element={<News />} />
				<Route path="cadastrar-produto" element={<RegisterProduct />} />
				<Route
					path="atas-de-registro-de-preco"
					element={<PriceRecordAgreements />}
				/>
				<Route
					path="cadastrar-ata-de-registro-de-preco"
					element={<RegisterPriceRecordAgreement />}
				/>
			</Route>
		</Routes>
	);
}
