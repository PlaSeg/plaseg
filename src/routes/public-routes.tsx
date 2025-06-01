import { Navigate, Outlet } from "react-router";
import { useAuthStore } from "@/hooks/auth";

export function PublicRoutes() {
	const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

	if (isAuthenticated) {
		return <Navigate to="/admin" replace />;
	}

	return <Outlet />;
}
