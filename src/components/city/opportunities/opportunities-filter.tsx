import { OpportunitiesFilterForm } from "./opportunities-filter-form";

export function OpportunitiesFilter() {
	return (
		<div className="py-6">
			<div className="md:p-6 w-[350px] space-y-4 rounded-2xl border border-muted bg-white">
				<div className="flex items-center justify-between">
					<h3 className="font-semibold">Oportunidades</h3>

					<div className="space-x-2 px-2 py-1 border border-gray-200 rounded-full text-xs">
						<strong>122</strong>
						<span className="text-muted-foreground">Resultados</span>
					</div>
				</div>

				<OpportunitiesFilterForm />
			</div>
		</div>
	);
}
