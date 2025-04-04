import { Route, Routes } from "react-router";

import ResetPassword from "@/pages/reset-password/reset-password";
import SignIn from "@/pages/sign-in/sign-in";
import SignUp from "@/pages/sign-up/sign-up";

export function AuthRoutes() {
	return (
		<Routes>
			<Route path="entrar" element={<SignIn />} />
			<Route path="cadastro" element={<SignUp />} />
			<Route path="esqueceu-senha" element={<ResetPassword />} />
		</Routes>
	);
}
