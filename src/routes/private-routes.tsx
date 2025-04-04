import { Navigate, Outlet } from "react-router";
import { useAuthStore } from "@/store/auth";

export function PrivateRoutes() {
	const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

	if (!isAuthenticated) {
		return <Navigate to="/entrar" replace />;
	}

	return <Outlet />;
}
