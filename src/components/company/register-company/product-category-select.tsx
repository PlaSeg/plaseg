import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

export function ProductCategorySelect() {
	return (
		<Select>
			<SelectTrigger>
				<SelectValue placeholder="Selecione a categoria dos seus produtos" />
			</SelectTrigger>
			<SelectContent>
				<SelectItem value="public-security">Segurança pública</SelectItem>
				<SelectItem value="street-furniture">Mobiliário urbano</SelectItem>
				<SelectItem value="technology">Tecnologia</SelectItem>
				<SelectItem value="vehicles">Veículos</SelectItem>
				<SelectItem value="school-supplies">Materiais escolares</SelectItem>
				<SelectItem value="ppe">EPIs</SelectItem>
			</SelectContent>
		</Select>
	);
}
