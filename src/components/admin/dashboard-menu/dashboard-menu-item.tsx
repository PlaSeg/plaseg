import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

interface DashboardMenuItemProps {
	icon: React.ReactNode;
	title: string;
	description: string;
	url: string;
}

export function DashboardMenuItem({
	icon,
	title,
	description,
	url,
}: DashboardMenuItemProps) {
	return (
		<Link
			to={url}
			className="flex flex-col justify-between gap-0 rounded-xl overflow-hidden border border-muted
			hover:border-blue-500 hover:cursor-pointer bg-white transition-all duration-200"
		>
			<div className="flex flex-col gap-4 p-4 rounded-lg hover:opacity-90">
				<div className="flex items-center gap-2">
					{icon}
					<strong className="text-lg font-semibold">{title}</strong>
				</div>

				<p className="text-sm text-muted-foreground">{description}</p>
			</div>

			<div className="flex justify-end px-4 py-4">
				<div className="flex items-center gap-2 text-sm">
					Acessar
					<ArrowRight size={14} />
				</div>
			</div>
		</Link>
	);
}
