import { Routes, Route } from "react-router";

import AuthLayout from "../layouts/auth-layout";

import { SignUp } from "@/pages/sign-up";
import { SignIn } from "@/pages/sign-in";
import { ForgotPassword } from "@/pages/forgot-password";
import { Prices } from "@/pages/prices";

export function AppRoutes() {
	return (
		<Routes>
			<Route element={<AuthLayout />}>
				<Route path="entrar" element={<SignIn />} />
				<Route path="cadastro" element={<SignUp />} />
				<Route path="esqueceu-senha" element={<ForgotPassword />} />
			</Route>

			<Route path="precos" element={<Prices />} />
		</Routes>
	);
}
