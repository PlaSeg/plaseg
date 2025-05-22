import {
	ArrowDownUp,
	ChevronDown,
	ChevronUp,
	Info,
	MoreHorizontal,
	Plus,
	Search,
} from "lucide-react";
import { useState } from "react";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const projectItems = [
	{
		id: 1,
		description: "Viatura tipo SUV",
		quantity: 2,
		unitValue: 139799.66,
		totalValue: 279597.32,
	},
	{
		id: 2,
		description: "Viatura tipo Motocicleta",
		quantity: 4,
		unitValue: 43035.34,
		totalValue: 172141.36,
	},
	{
		id: 3,
		description: "Capacete para motociclista",
		quantity: 4,
		unitValue: 678.63,
		totalValue: 2714.52,
	},
	{
		id: 4,
		description: "Arma de incapacitação neuromuscular",
		quantity: 15,
		unitValue: 4847.96,
		totalValue: 72719.4,
	},
];

export function ProjectItems() {
	const [isOpen, setIsOpen] = useState(false);

	const formatCurrency = (value: number) => {
		return `R$ ${value.toLocaleString("pt-BR", {
			minimumFractionDigits: 2,
			maximumFractionDigits: 2,
		})}`;
	};

	return (
		<div className="w-full">
			<Collapsible open={isOpen} onOpenChange={setIsOpen} className="space-y-4">
				<div className="flex items-center gap-2 border-b border-slate-200 pb-4">
					<CollapsibleTrigger className="flex items-center gap-2 w-full ">
						{!isOpen && <ChevronDown className="animate-in spin-in-90" />}

						{isOpen && <ChevronUp className="animate-in spin-in-90" />}

						<h2 className="text-xl font-semibold">Itens do projeto</h2>
					</CollapsibleTrigger>

					<div className="ml-auto flex items-center gap-2">
						<Button variant="outline" size="icon">
							<Search className="h-4 w-4" />
						</Button>

						<Button variant="outline" className="gap-2">
							<Plus className="h-4 w-4" />
							Adicionar itens
						</Button>
					</div>
				</div>

				<CollapsibleContent className="space-y-4">
					<div className="rounded-md border bg-white">
						<Table>
							<TableHeader className="border-b border-slate-200">
								<TableRow className="bg-white">
									<TableHead className="w-16">Ord.</TableHead>
									<TableHead>
										<div className="flex items-center gap-2">
											Descrição
											<ArrowDownUp className="h-4 w-4 text-muted-foreground" />
										</div>
									</TableHead>

									<TableHead className="w-20">Qtd.</TableHead>

									<TableHead>
										<div className="flex items-center gap-2">
											Valor unitário
											<ArrowDownUp className="h-4 w-4 text-muted-foreground" />
										</div>
									</TableHead>

									<TableHead>
										<div className="flex items-center gap-2">
											Valor total
											<ArrowDownUp className="h-4 w-4 text-muted-foreground" />
										</div>
									</TableHead>

									<TableHead className="w-12"></TableHead>
								</TableRow>
							</TableHeader>

							<TableBody>
								{projectItems.map((item) => (
									<TableRow key={item.id}>
										<TableCell className="font-medium">{item.id}</TableCell>
										<TableCell>
											<div className="flex items-center gap-2">
												{item.description}
												<Info className="h-4 w-4 text-muted-foreground" />
											</div>
										</TableCell>
										<TableCell>{item.quantity}</TableCell>
										<TableCell>{formatCurrency(item.unitValue)}</TableCell>
										<TableCell>{formatCurrency(item.totalValue)}</TableCell>
										<TableCell>
											<Button variant="ghost" size="icon">
												<MoreHorizontal className="h-4 w-4" />
											</Button>
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</div>

					<div className="text-sm text-muted-foreground">
						*Valores estimados
					</div>
				</CollapsibleContent>
			</Collapsible>
		</div>
	);
}
