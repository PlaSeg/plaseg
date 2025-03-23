import type { ReactNode } from "react";
import { Outlet } from "react-router";

interface AppLayoutProps {
	children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
	return (
		<div className="flex flex-col h-screen w-full">
			{children}

			<div className="w-full flex-1 max-w-[1400px] mx-auto px-4">
				<Outlet />
			</div>
		</div>
	);
}
