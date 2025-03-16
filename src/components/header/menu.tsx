import { Avatar, AvatarFallback } from "../ui/avatar";

interface MenuProps {
	name: string;
	email: string;
}

export function Menu({ name, email }: MenuProps) {
	return (
		<div className="flex items-center gap-3">
			<div className="flex flex-col gap-0">
				<strong className="text-sm">{name}</strong>
				<span className="text-sm font-medium text-muted-foreground">
					{email}
				</span>
			</div>

			<Avatar>
				<AvatarFallback className="bg-[#1A202C]">{name[0]}</AvatarFallback>
			</Avatar>
		</div>
	);
}
