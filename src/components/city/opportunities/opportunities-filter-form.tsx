import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Combobox } from "@/components/ui/combobox";
import { useFilterOpportunities } from "@/hooks/use-filter-opportunities";
import { opportunitiesCategories } from "@/mocks/opportunities-categories";
import { opportunitiesAreas } from "@/mocks/opportunities-areas";
import { DatePicker } from "@/components/ui/date-picker";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export function OpportunitiesFilterForm() {
	const { form } = useFilterOpportunities();

	return (
		<Form {...form}>
			<FormField
				control={form.control}
				name="title"
				render={({ field }) => (
					<FormItem>
						<FormLabel>Título</FormLabel>

						<FormControl>
							<Input
								type="text"
								placeholder="Pesquisar Oportunidade..."
								{...field}
							/>
						</FormControl>

						<FormMessage />
					</FormItem>
				)}
			/>

			<Combobox
				form={form}
				entity="category"
				translatedEntity="Categoria"
				placeholder="Selecione uma categoria"
				options={opportunitiesCategories}
				emptyMessage="Nenhuma categoria encontrada"
			/>

			<Combobox
				form={form}
				entity="area"
				translatedEntity="Área"
				placeholder="Selecione uma área"
				options={opportunitiesAreas}
				emptyMessage="Nenhuma área encontrada"
			/>

			<FormField
				control={form.control}
				name="minProjectValue"
				render={({ field }) => (
					<FormItem>
						<FormLabel>Valor Mínimo do Projeto</FormLabel>

						<FormControl>
							<Input type="number" placeholder="Mínimo" {...field} />
						</FormControl>

						<FormMessage />
					</FormItem>
				)}
			/>

			<FormField
				control={form.control}
				name="maxProjectValue"
				render={({ field }) => (
					<FormItem>
						<FormLabel>Valor Máximo do Projeto</FormLabel>

						<FormControl>
							<Input type="number" placeholder="Máximo" {...field} />
						</FormControl>

						<FormMessage />
					</FormItem>
				)}
			/>

			<DatePicker
				form={form}
				label="Data Inicial"
				placeholder="Data Inicial"
				entity="initialDate"
			/>

			<DatePicker
				form={form}
				label="Data Final"
				placeholder="Data Final"
				entity="finalDate"
			/>

			<Button className="w-full bg-muted/30 text-black shadow-none border hover:bg-muted/50">
				<X />
				Limpar Filtros
			</Button>
		</Form>
	);
}
