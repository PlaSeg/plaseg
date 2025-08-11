import { Text, View } from "@react-pdf/renderer";
import { createTw } from "react-pdf-tailwind";

const tw = createTw({
	theme: {
		fontFamily: {
			default: ["Arial"],
		},
	},
});

interface SustainabilityTableValue {
	bens?: Array<{
		vida_util: string;
		identificacao_do_bem: string;
	}>;
	localizacao_bens?: Array<{
		quantidade: number;
		identificacao_do_bem: string;
		identificacao_do_local: string;
	}>;
	paragrafo?: string;
	enderecos_completos?: string[];
}

export function SustainabilityPDFTable(value: SustainabilityTableValue) {
	return (
		<View style={tw("mb-4")}>
			{value.paragrafo && (
				<View style={tw("mb-4")}>
					<Text style={tw("text-sm text-justify pb-2 text-zinc-600")}>
						{value.paragrafo}
					</Text>
				</View>
			)}

			{value.bens && (
				<View style={tw("mb-4")}>
					<View style={tw("w-full border-[1px] border-black")}>
						<View
							style={tw("flex-row border-b-[1px] border-black bg-neutral-400")}
						>
							<View style={tw("border-r-[1px] border-black px-3 py-2 flex-1")}>
								<Text style={tw("text-center font-bold text-xs text-white")}>
									Identificação do Bem
								</Text>
							</View>
							<View style={tw("px-3 py-2 flex-1")}>
								<Text style={tw("text-center font-bold text-xs text-white")}>
									Vida útil
								</Text>
							</View>
						</View>

						{value.bens.map((item, index) => (
							<View key={item.identificacao_do_bem} style={tw("flex-row")}>
								<View
									style={tw(
										`border-r-[1px] border-black px-3 py-2 flex-1 ${index < value.bens!.length - 1 ? "border-b-[1px]" : ""}`
									)}
								>
									<Text style={tw("text-center text-xs")}>
										{item.identificacao_do_bem}
									</Text>
								</View>
								<View
									style={tw(
										`px-3 py-2 flex-1 ${index < value.bens!.length - 1 ? "border-b-[1px] border-black" : ""}`
									)}
								>
									<Text style={tw("text-center text-xs")}>
										{item.vida_util}
									</Text>
								</View>
							</View>
						))}
					</View>
				</View>
			)}

			{value.localizacao_bens && (
				<View style={tw("mb-4")}>
					<View style={tw("w-full border-[1px] border-black")}>
						<View
							style={tw("flex-row border-b-[1px] border-black bg-neutral-400")}
						>
							<View style={tw("border-r-[1px] border-black px-3 py-2 flex-1")}>
								<Text style={tw("text-center font-bold text-xs text-white")}>
									Identificação do Bem
								</Text>
							</View>
							<View
								style={tw("border-r-[1px] border-black px-3 py-2 w-[80px]")}
							>
								<Text style={tw("text-center font-bold text-xs text-white")}>
									Quantidade
								</Text>
							</View>
							<View style={tw("px-3 py-2 flex-1")}>
								<Text style={tw("text-center font-bold text-xs text-white")}>
									Identificação do Local
								</Text>
							</View>
						</View>

						{value.localizacao_bens.map((item, index) => (
							<View key={item.identificacao_do_bem} style={tw("flex-row")}>
								<View
									style={tw(
										`border-r-[1px] border-black px-3 py-2 flex-1 ${index < value.localizacao_bens!.length - 1 ? "border-b-[1px]" : ""}`
									)}
								>
									<Text style={tw("text-center text-xs")}>
										{item.identificacao_do_bem}
									</Text>
								</View>
								<View
									style={tw(
										`border-r-[1px] border-black px-3 py-2 w-[80px] ${index < value.localizacao_bens!.length - 1 ? "border-b-[1px]" : ""}`
									)}
								>
									<Text style={tw("text-center text-xs")}>
										{item.quantidade}
									</Text>
								</View>
								<View
									style={tw(
										`px-3 py-2 flex-1 ${index < value.localizacao_bens!.length - 1 ? "border-b-[1px] border-black" : ""}`
									)}
								>
									<Text style={tw("text-center text-xs")}>
										{item.identificacao_do_local}
									</Text>
								</View>
							</View>
						))}
					</View>

					{value.enderecos_completos &&
						value.enderecos_completos.length > 0 && (
							<View style={tw("mt-4")}>
								<Text style={tw("text-sm font-semibold mb-2")}>
									Endereço completo com CEP dos locais:
								</Text>
								{value.enderecos_completos.map((endereco) => (
									<Text key={endereco} style={tw("text-sm text-zinc-600 pb-1")}>
										• {endereco}
									</Text>
								))}
							</View>
						)}
				</View>
			)}
		</View>
	);
}
