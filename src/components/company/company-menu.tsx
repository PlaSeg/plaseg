import { Avatar, AvatarFallback } from "../ui/avatar";

export function CompanyMenu() {
	return (
		<div className="flex items-center gap-3">
			<div className="flex flex-col gap-0">
				<strong className="text-sm">Compex Jr</strong>
				<span className="text-sm font-medium text-muted-foreground">
					contato@compexjr.com.br
				</span>
			</div>

			<Avatar>
				<AvatarFallback className="bg-[#1A202C]">C</AvatarFallback>
			</Avatar>
		</div>
	);
}
