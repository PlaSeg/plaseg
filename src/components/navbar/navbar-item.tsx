import { ReactNode } from "react";
import { Link, useLocation } from "react-router";

interface NavbarItemProps {
	link: string;
	title: string;
	icon: ReactNode;
}

export function NavbarItem({ link, title, icon }: NavbarItemProps) {
	const { pathname } = useLocation();

	const styles = pathname.endsWith(link) && "bg-slate-50 text-slate-950";

	return (
		<li>
			<Link
				to={link}
				className={`text-sm font-medium rounded-full py-1.5 px-3 flex items-center gap-1
			text-muted-foreground	hover:bg-slate-50 transition-colors duration-500 ${styles}`}
			>
				{icon}
				{title}
			</Link>
		</li>
	);
}
