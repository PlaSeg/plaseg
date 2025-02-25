import { Avatar, AvatarFallback } from "../ui/avatar";

export function CityMenu() {
	return (
		<div className="flex items-center gap-3">
			<div className="flex flex-col gap-0">
				<strong className="text-sm">Izaías Morais</strong>
				<span className="text-sm text-muted-foreground">
					izaiaslima356@gmail.com
				</span>
			</div>

			<Avatar>
				<AvatarFallback>IM</AvatarFallback>
			</Avatar>
		</div>
	);
}
