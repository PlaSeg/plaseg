import type { ReactNode } from "react";
import { Outlet } from "react-router";

interface AppLayoutProps {
	children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
	return (
		<div className="flex flex-col h-screen w-full bg-muted/50">
			{children}

			<div className="w-full h-full max-w-[1400px] mx-auto px-4 md:p-0">
				<Outlet />
			</div>
		</div>
	);
}
