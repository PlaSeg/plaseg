import { Navigate, Outlet } from "react-router";
import { useAuthStore } from "@/hooks/auth/use-auth";
import { useGetProfile } from "@/hooks/auth/use-get-profile";

export function AdminPrivateRoutes() {
	const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
	const { user } = useGetProfile();

	if (!isAuthenticated) {
		return <Navigate to="/entrar" replace />;
	}

	if (user && user.role !== "ADMIN" && user.role !== "ADMIN_MASTER") {
		return <Navigate to="/oportunidades" replace />;
	}

	return <Outlet />;
}
