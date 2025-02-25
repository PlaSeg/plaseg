import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

export function NewsSelect() {
	return (
		<Select>
			<SelectTrigger className="w-[200px]">
				<SelectValue placeholder="Ordenar por" />
			</SelectTrigger>

			<SelectContent>
				<SelectGroup>
					<SelectItem value="newest">Mais recente</SelectItem>
					<SelectItem value="oldest">Mais antiga</SelectItem>
					<SelectItem value="relevant">Mais relevante</SelectItem>
				</SelectGroup>
			</SelectContent>
		</Select>
	);
}
