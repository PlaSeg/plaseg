import { DatePickerDemo } from "@/components/listing/listing-filters/data-filter/data-picker";
import { CheckboxDemo } from "@/components/listing/listing-filters/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export function NoticesFilter() {
	return (
		<div className="flex flex-col w-[350px] h-[750px] bg-muted/50 p-6 gap-6 rounded-lg">
			<strong>Filtrar editais</strong>

			<div className="flex flex-col gap-4">
				<Label>Categoria</Label>

				<div className="space-y-2">
					<CheckboxDemo text="categoria 1" />
					<CheckboxDemo text="categoria 2" />
					<CheckboxDemo text="categoria 3" />
					<CheckboxDemo text="categoria 4" />
				</div>
			</div>

			<div className="flex flex-col gap-2">
				<Label>Valor</Label>
				<div className="flex flex-row gap-6">
					<Input type="text" placeholder="Valor mínimo" className="bg-white" />

					<Input type="text" placeholder="Valor máximo" className="bg-white" />
				</div>
			</div>

			<div className="flex flex-col gap-2">
				<Label>Órgão responsável</Label>
				<Input
					type="text"
					placeholder="Digite o órgão responsável"
					className="bg-white"
				/>
			</div>

			<div className="flex flex-col text-xl gap-2">
				<Label>Selecione a data inicial</Label>
				<DatePickerDemo />
			</div>

			<div className="flex flex-col text-xl gap-2">
				<Label>Selecione a data final</Label>
				<DatePickerDemo />
			</div>

			<Button>Filtrar</Button>
		</div>
	);
}
