import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useAuthStore } from "@/hooks/auth/auth";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { LogOut, Settings } from "lucide-react";
import { Link } from "react-router";

interface MenuProps {
	name: string;
	email: string;
}

export function Menu({ name, email }: MenuProps) {
	const logout = useAuthStore((state) => state.logout);

	return (
		<DropdownMenu>
			<DropdownMenuTrigger className="outline-none">
				<div className="flex items-center gap-3">
					<div className="flex flex-col items-start gap-0">
						<strong className="text-sm">{name}</strong>

						<span className="text-sm font-medium text-muted-foreground">
							{email}
						</span>
					</div>

					<Avatar>
						<AvatarFallback className="bg-[#1A202C]">
							{name.slice(0, 1)}
						</AvatarFallback>
					</Avatar>
				</div>
			</DropdownMenuTrigger>

			<DropdownMenuContent className="w-56 mr-4">
				<DropdownMenuGroup>
					<DropdownMenuItem className="cursor-pointer w-full">
						<Link to="/configuracoes" className="flex items-center gap-2">
							<Settings className="h-4 w-4" />

							<span>Configurações</span>
						</Link>
					</DropdownMenuItem>
				</DropdownMenuGroup>

				<DropdownMenuSeparator />

				<DropdownMenuItem
					className="cursor-pointer w-full !text-red-500"
					onClick={() => logout()}
				>
					<LogOut className="h-4 w-4" />

					<span>Sair</span>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
