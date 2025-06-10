import { Navigate, Outlet } from "react-router";
import { useAuthStore } from "@/hooks/auth/use-auth";
import { useGetProfile } from "@/hooks/auth/use-get-profile";

export function PublicRoutes() {
	const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

	const { user } = useGetProfile();

	if (isAuthenticated && user && user.role === "ADMIN") {
		return <Navigate to="/admin" replace />;
	}

	if (isAuthenticated && user && user.role === "MUNICIPALITY") {
		return <Navigate to="/oportunidades" replace />;
	}

	return <Outlet />;
}
