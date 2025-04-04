import { Navigate, Outlet } from "react-router";
import { useAuthStore } from "@/store/auth";

export function PublicRoutes() {
	const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

	if (isAuthenticated) {
		return <Navigate to="/" replace />;
	}

	return <Outlet />;
}
