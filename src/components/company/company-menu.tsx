import { Avatar, AvatarFallback } from "../ui/avatar";

export function CompanyMenu() {
	return (
		<div className="flex items-center gap-3">
			<div className="flex flex-col gap-0">
				<strong className="text-sm">Compex Jr</strong>
				<span className="text-sm text-muted-foreground">contato@compexjr.com.br</span>
			</div>

			<Avatar>
				<AvatarFallback>C</AvatarFallback>
			</Avatar>
		</div>
	);
}
