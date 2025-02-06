import { Routes, Route } from "react-router";

import AuthLayout from "../layouts/auth-layout";

import { SignUp } from "@/pages/sign-up";
import { SignIn } from "@/pages/sign-in";
import { ResetPassword } from "@/pages/reset-password";
import { Prices } from "@/pages/prices";
import { Payment } from "@/pages/payment";
import { RegisterCompany } from "@/pages/register-company";
import { RegisterMunicipality } from "@/pages/register-municipality";
import { Notices } from "@/pages/notices";
import { Home } from "@/pages/home";
import { NoticeDetails } from "@/pages/notice-details";
import { RegisterProject } from "@/pages/register-project";
import { RegisterProduct } from "@/pages/register-product";

export function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />

			<Route element={<AuthLayout />}>
				<Route path="entrar" element={<SignIn />} />
				<Route path="cadastro" element={<SignUp />} />
				<Route path="esqueceu-senha" element={<ResetPassword />} />
			</Route>

			<Route path="precos" element={<Prices />} />
			<Route path="pagamento" element={<Payment />} />
			<Route path="editais" element={<Notices />} />
			<Route path="cadastrar-empresa" element={<RegisterCompany />} />
			<Route path="cadastrar-municipio" element={<RegisterMunicipality />} />
			<Route path="cadastrar-produto" element={<RegisterProduct />} />
			<Route path="cadastrar-projeto" element={<RegisterProject />} />
			<Route path="detalhes-edital" element={<NoticeDetails />} />
		</Routes>
	);
}
