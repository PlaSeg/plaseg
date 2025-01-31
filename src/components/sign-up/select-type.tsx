import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

export function SelectType() {
	return (
		<Select>
			<SelectTrigger>
				<SelectValue placeholder="Seleciona o tipo de usuário" />
			</SelectTrigger>
			<SelectContent>
				<SelectItem value="company">Empresa</SelectItem>
				<SelectItem value="municipality">Município</SelectItem>
			</SelectContent>
		</Select>
	);
}
