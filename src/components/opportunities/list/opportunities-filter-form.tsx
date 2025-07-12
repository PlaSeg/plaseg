import { Funnel, X } from "lucide-react";
import { FormCombobox } from "@/components/form/form-combobox";
import { FormDatePicker } from "@/components/form/form-date-picker";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFilterOpportunities } from "@/hooks/opportunities/use-filter-opportunities";
import { opportunitiesAreas } from "@/mocks/opportunity/opportunities-areas";
import { opportunitiesCategories } from "@/mocks/opportunity/opportunities-categories";

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

			<FormCombobox
				form={form}
				entity="category"
				translatedEntity="Categoria"
				placeholder="Selecione uma categoria"
				options={opportunitiesCategories}
				emptyMessage="Nenhuma categoria encontrada"
			/>

			<FormCombobox
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
							<Input
								type="number"
								placeholder="Digite o Valor Mínimo"
								{...field}
							/>
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
							<Input
								type="number"
								placeholder="Digite o Valor Máximo"
								{...field}
							/>
						</FormControl>

						<FormMessage />
					</FormItem>
				)}
			/>

			<FormDatePicker
				form={form}
				label="Data Inicial"
				placeholder="Selecionar Data Inicial"
				entity="initialDate"
			/>

			<FormDatePicker
				form={form}
				label="Data Final"
				placeholder="Selecionar Data Final"
				entity="finalDate"
			/>

			<Button type="submit" className="w-full" variant="secondary" disabled>
				<Funnel />
				Aplicar Filtros
			</Button>

			<Button
				className="w-full text-black shadow-none bg-white hover:bg-white border
			border-muted"
				disabled
			>
				<X />
				Limpar Filtros
			</Button>
		</Form>
	);
}
