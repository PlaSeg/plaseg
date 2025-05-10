import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { CreatePriceRegistrationRecordRequest } from "@/@schemas/price-registration-record";

interface ItensTableProps {
	items: CreatePriceRegistrationRecordRequest["products"];
}

export const ItensTable = ({ items }: ItensTableProps) => {
	const formatCurrency = (value: number, currency: string) => {
		const currencySymbol =
			{
				USD: "$",
				EUR: "€",
				BRL: "R$",
			}[currency] || "";

		return `${currencySymbol} ${value.toLocaleString("pt-BR", {
			minimumFractionDigits: 2,
			maximumFractionDigits: 2,
		})}`;
	};

	return (
		<div className="rounded-md border">
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead>Código</TableHead>
						<TableHead>Unidade</TableHead>
						<TableHead>Quantidade</TableHead>
						<TableHead>Moeda</TableHead>
						<TableHead>Valor unitário</TableHead>
						<TableHead>Valor total</TableHead>
						<TableHead>Taxa de conversão</TableHead>
					</TableRow>
				</TableHeader>

				<TableBody>
					{items && items.length === 0 && (
						<TableRow>
							<TableCell colSpan={7} className="h-24 text-center">
								Nenhum item adicionado
							</TableCell>
						</TableRow>
					)}

					{items &&
						items.length > 0 &&
						items.map((item) => (
							<TableRow key={item.product_id}>
								<TableCell>{item.product_id}</TableCell>

								<TableCell>{item.unit}</TableCell>

								<TableCell>{item.quantity_available}</TableCell>

								<TableCell>{item.currency}</TableCell>

								<TableCell>
									{formatCurrency(item.unit_price_brl, item.currency)}
								</TableCell>

								<TableCell>
									{formatCurrency(item.total_value_brl, item.currency)}
								</TableCell>

								<TableCell>{item.conversion_rate}</TableCell>
							</TableRow>
						))}
				</TableBody>
			</Table>
		</div>
	);
};
