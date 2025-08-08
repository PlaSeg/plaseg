import { Text, View } from "@react-pdf/renderer";
import { createTw } from "react-pdf-tailwind";

const tw = createTw({
	theme: {
		fontFamily: {
			default: ["Arial"],
		},
	},
});

export interface TableItem {
	unit: string;
	order: number;
	quantity: number;
	description: string;
	estimatedUnitValue: number;
	estimatedTotalValue: number;
}

export interface TableValue {
	items: TableItem[];
	totalValue: number;
}

function formatCurrency(amount: number) {
	return amount.toLocaleString("pt-BR", {
		style: "currency",
		currency: "BRL",
	});
}

interface TermsOfReferenceTableProps {
	value: TableValue;
}

export function TermsOfReferenceTable({ value }: TermsOfReferenceTableProps) {
	return (
		<View style={tw("mb-4")}>
			<View style={tw("w-full border-[1px] border-black")}>
				<View style={tw("flex-row border-b-[1px] border-black bg-gray-100")}>
					<View
						style={tw(
							"border-[1px] border-black border-t-0 border-b-0 border-r-0 border-l-0 px-2 py-1 w-[40px]"
						)}
					>
						<Text style={tw("text-center font-bold text-xs")}>Ord.</Text>
					</View>
					<View
						style={tw(
							"border-[1px] border-black border-t-0 border-b-0 border-r-0 px-2 py-1 flex-1"
						)}
					>
						<Text style={tw("text-center font-bold text-xs")}>
							Descrição do objeto (itens)
						</Text>
					</View>
					<View
						style={tw(
							"border-[1px] border-black border-t-0 border-b-0 border-r-0 px-2 py-1 w-[40px]"
						)}
					>
						<Text style={tw("text-center font-bold text-xs")}>Qtd</Text>
					</View>
					<View
						style={tw(
							"border-[1px] border-black border-t-0 border-b-0 border-r-0 px-2 py-1 w-[60px]"
						)}
					>
						<Text style={tw("text-center font-bold text-xs")}>Un. Medida</Text>
					</View>
					<View
						style={tw(
							"border-[1px] border-black border-t-0 border-b-0 border-r-0 px-2 py-1 w-[80px]"
						)}
					>
						<Text style={tw("text-center font-bold text-xs")}>
							Valor estimado Unit. (R$)*
						</Text>
					</View>
					<View
						style={tw(
							"border-[1px] border-black border-t-0 border-b-0 border-r-0 px-2 py-1 w-[80px]"
						)}
					>
						<Text style={tw("text-center font-bold text-xs")}>
							Valor estimado Total (R$)*
						</Text>
					</View>
				</View>

				{value.items.map((item, rowIndex) => (
					<View key={item.order} style={tw("flex-row")}>
						<View
							style={tw(
								`border-[1px] border-black px-2 py-1 w-[40px] border-b-0 border-r-0 ${rowIndex === 0 ? "border-t-0" : ""} border-l-0`
							)}
						>
							<Text style={tw("text-center text-xs")}>{item.order}</Text>
						</View>
						<View
							style={tw(
								`border-[1px] border-black px-2 py-1 flex-1 border-b-0 border-r-0 ${rowIndex === 0 ? "border-t-0" : ""}`
							)}
						>
							<Text style={tw("text-xs")}>{item.description}</Text>
						</View>
						<View
							style={tw(
								`border-[1px] border-black px-2 py-1 w-[40px] border-b-0 border-r-0 ${rowIndex === 0 ? "border-t-0" : ""}`
							)}
						>
							<Text style={tw("text-center text-xs")}>{item.quantity}</Text>
						</View>
						<View
							style={tw(
								`border-[1px] border-black px-2 py-1 w-[60px] border-b-0 border-r-0 ${rowIndex === 0 ? "border-t-0" : ""}`
							)}
						>
							<Text style={tw("text-center text-xs")}>
								{item.unit.toUpperCase()}
							</Text>
						</View>
						<View
							style={tw(
								`border-[1px] border-black px-2 py-1 w-[80px] border-b-0 border-r-0 ${rowIndex === 0 ? "border-t-0" : ""}`
							)}
						>
							<Text style={tw("text-right text-xs")}>
								{formatCurrency(item.estimatedUnitValue)}
							</Text>
						</View>
						<View
							style={tw(
								`border-[1px] border-black px-2 py-1 w-[80px] border-b-0 border-r-0 ${rowIndex === 0 ? "border-t-0" : ""}`
							)}
						>
							<Text style={tw("text-right text-xs")}>
								{formatCurrency(item.estimatedTotalValue)}
							</Text>
						</View>
					</View>
				))}

				<View style={tw("flex-row bg-gray-100 font-bold")}>
					<View
						style={tw(
							"border-[1px] border-black px-2 py-1 border-b-0 border-r-0 border-l-0 flex-1"
						)}
					>
						<Text style={tw("text-center font-bold text-xs")}>VALOR TOTAL</Text>
					</View>

					<View
						style={tw(
							"border-[1px] border-black px-2 py-1 w-[80px] border-b-0 border-r-0"
						)}
					>
						<Text style={tw("text-right font-bold text-xs")}>
							{formatCurrency(value.totalValue)}
						</Text>
					</View>
				</View>
			</View>
		</View>
	);
}
