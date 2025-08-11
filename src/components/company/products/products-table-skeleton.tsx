import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

export function ProductsTableSkeleton() {
	const skeletonRows = 10;
	const id = crypto.randomUUID();

	return (
		<div className="w-full">
			{/* Tabela */}
			<div>
				<Table>
					{/* Cabeçalho da tabela */}
					<TableHeader className="bg-slate-50">
						<TableRow className="border-none">
							{/* Checkbox skeleton */}
							<TableHead className="w-12">
								<Skeleton className="h-4 w-4" />
							</TableHead>
							{/* Headers da tabela */}
							<TableHead>
								<Skeleton className="h-4 w-24" />
							</TableHead>
							<TableHead>
								<Skeleton className="h-4 w-20" />
							</TableHead>
							<TableHead>
								<Skeleton className="h-4 w-24" />
							</TableHead>
							<TableHead>
								<Skeleton className="h-4 w-16" />
							</TableHead>
							<TableHead>
								<Skeleton className="h-4 w-20" />
							</TableHead>
							<TableHead>
								<Skeleton className="h-4 w-24" />
							</TableHead>
							<TableHead className="w-8"></TableHead>
						</TableRow>
					</TableHeader>

					{/* Corpo da tabela */}
					<TableBody>
						{Array(skeletonRows)
							.fill(0)
							.map((_) => (
								<TableRow key={id} className="border-none">
									{/* Checkbox skeleton */}
									<TableCell>
										<Skeleton className="h-4 w-4" />
									</TableCell>
									{/* Nome do produto */}
									<TableCell>
										<Skeleton className="h-5 w-36" />
									</TableCell>
									{/* Código */}
									<TableCell>
										<Skeleton className="h-5 w-24" />
									</TableCell>
									{/* Tipo */}
									<TableCell>
										<div className="flex items-center gap-2">
											<Skeleton className="h-6 w-28 rounded-full" />
										</div>
									</TableCell>
									{/* Preço */}
									<TableCell>
										<Skeleton className="h-5 w-20" />
									</TableCell>
									{/* Quantidade */}
									<TableCell>
										<Skeleton className="h-5 w-16" />
									</TableCell>
									{/* Orçamento */}
									<TableCell>
										<Skeleton className="h-5 w-24" />
									</TableCell>
									{/* Ações */}
									<TableCell>
										<Skeleton className="h-8 w-8 rounded-full" />
									</TableCell>
								</TableRow>
							))}
					</TableBody>
				</Table>
			</div>

			<div className="flex items-center justify-end space-x-2 py-4">
				<div className="flex-1 text-sm text-muted-foreground">
					<Skeleton className="h-4 w-64" />
				</div>

				<div className="space-x-2">
					<Button variant="outline" size="sm" disabled>
						Anterior
					</Button>

					<Button variant="outline" size="sm" disabled>
						Próximo
					</Button>
				</div>
			</div>
		</div>
	);
}
