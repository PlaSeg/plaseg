import { Route, Routes } from "react-router";

import ResetPassword from "@/pages/self-registration/reset-password";
import SignIn from "@/pages/self-registration/sign-in";
import SignUp from "@/pages/self-registration/sign-up";

export function AuthRoutes() {
	return (
		<Routes>
			<Route path="entrar" element={<SignIn />} />
			<Route path="cadastro" element={<SignUp />} />
			<Route path="esqueceu-senha" element={<ResetPassword />} />
		</Routes>
	);
}
