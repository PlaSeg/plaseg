import { Routes, Route } from "react-router";

import AuthLayout from "../layouts/auth-layout";

import { SignUp } from "@/pages/sign-up";
import { SignIn } from "@/pages/sign-in";

export function AppRoutes() {
	return (
		<Routes>
			<Route element={<AuthLayout />}>
				<Route path="entrar" element={<SignIn />} />
				<Route path="cadastro" element={<SignUp />} />
			</Route>
		</Routes>
	);
}
