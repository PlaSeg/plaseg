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

export function AppRoutes() {
	return (
		<Routes>
			<Route element={<AuthLayout />}>
				<Route path="entrar" element={<SignIn />} />
				<Route path="cadastro" element={<SignUp />} />
				<Route path="esqueceu-senha" element={<ResetPassword />} />
			</Route>

			<Route path="precos" element={<Prices />} />
			<Route path="pagamento" element={<Payment />} />
			<Route path="cadastro-empresa" element={<RegisterCompany />} />
			<Route path="cadastro-municipio" element={<RegisterMunicipality />} />
			<Route path="editais" element={<Notices />} />
		</Routes>
	);
}
