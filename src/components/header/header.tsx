import type { ReactNode } from "react";
import { Link } from "react-router";

interface HeaderProps {
	menu: ReactNode;
	navbar: ReactNode;
}

export function Header({ menu, navbar }: HeaderProps) {
	return (
		<header className="w-full border-b bg-[#02050C] text-gray-50 flex flex-col	gap-2 pt-4 pb-3 px-4">
			<div className="w-full max-w-[1400px] mx-auto flex items-center justify-between">
				<Link to="/">
					<h1 className="font-semibold text-3xl">Plaseg</h1>
				</Link>

				{menu}
			</div>

			{navbar}
		</header>
	);
}
