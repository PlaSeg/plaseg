import { Document, Font, Page, Text, View } from "@react-pdf/renderer";
import { createTw } from "react-pdf-tailwind";
import { ARIAL_FONT } from "@/constants/pdf-fonts";
import type { ProjectDocument } from "@/hooks/projects/use-get-project-document-by-id";

Font.register({
	family: "Arial",
	fonts: ARIAL_FONT,
});

const tw = createTw({
	theme: {
		fontFamily: {
			default: ["Arial"],
		},
	},
});

interface PesquisaMercadoValue {
	total_geral: number;
	pesquisa_mercado: Array<{
		cotacoes: Array<{
			cotacao: number;
			valor_total: number | null;
			valor_unitario: number | null;
			dados_da_cotacao: string | null;
		}>;
		descricao: string;
		quantidade: number;
		valor_total: number;
		desvio_padrao: number;
		valor_medio_unitario: number;
	}>;
}

interface PricesSpreadsheetPDFProps {
	document: ProjectDocument;
}

export function PricesSpreadsheetPDF({
	document: projectDocument,
}: PricesSpreadsheetPDFProps) {
	// Reusable styles
	const boldText = tw("text-xs font-bold");
	const normalText = tw("text-xs");
	const redText = tw("text-xs text-red-600");
	const redBoldText = tw("text-xs text-red-600 font-bold");
	const headerBg = tw("bg-[#2B3261]");
	const headerText = tw("text-xs text-white font-bold text-center");
	const cellPadding = tw("px-2 py-1");
	const borderStyle = tw("border-[1px] border-black");

	const pesquisaMercadoData = projectDocument.fields.find(
		(field) => field.tableType === "PESQUISA_DE_MERCADO"
	)?.value as unknown as PesquisaMercadoValue;

	if (!pesquisaMercadoData) return null;

	const formatCurrency = (value: number | null) => {
		if (value === null) return "-";
		return new Intl.NumberFormat("pt-BR", {
			style: "currency",
			currency: "BRL",
		}).format(value);
	};

	return (
		<Document
			title={projectDocument.name}
			author="Transferegov.br"
			creator="Transferegov.br"
			producer="EzPDF"
		>
			<Page
				size="A4"
				orientation="landscape"
				style={tw("p-4 font-default bg-white")}
			>
				{/* Header */}
				<View style={tw("mb-4")}>
					<Text style={[boldText, tw("text-sm mb-1")]}>
						PLANILHA DE PESQUISA DE PREÇOS - COEFICIENTE DE VARIAÇÃO
					</Text>
					<Text style={[boldText, tw("mb-1")]}>
						PROPOSTA nº <Text>000000/2025</Text>
					</Text>
					<Text style={normalText}>
						Metodologia utilizada para obtenção do preço de referência:{" "}
						<Text style={boldText}>VALOR MÉDIO.</Text>
					</Text>
					<Text style={[boldText, tw("mt-4")]}>1. Pesquisa de Mercado</Text>
				</View>

				{/* Table */}
				<View style={[borderStyle, tw("mt-2")]}>
					{/* Header Row 1 */}
					<View style={tw("flex-row")}>
						<View
							style={[
								headerBg,
								cellPadding,
								tw("w-48 border-r-[1px] border-[#000000]"),
							]}
						>
							<Text style={headerText}>Descrição</Text>
						</View>
						<View
							style={[
								headerBg,
								cellPadding,
								tw("w-12 border-r-[1px] border-[#000000]"),
							]}
						>
							<Text style={headerText}>Un.</Text>
						</View>
						<View
							style={[
								headerBg,
								cellPadding,
								tw("w-12 border-r-[1px] border-[#000000]"),
							]}
						>
							<Text style={headerText}>Qtd</Text>
						</View>
						<View
							style={[
								headerBg,
								cellPadding,
								tw("w-20 border-r-[1px] border-[#000000]"),
							]}
						>
							<Text style={headerText}>Valor Médio Unitário</Text>
						</View>
						<View
							style={[
								headerBg,
								cellPadding,
								tw("w-20 border-r-[1px] border-[#000000]"),
							]}
						>
							<Text style={headerText}>Valor Total</Text>
						</View>
						<View
							style={[
								headerBg,
								cellPadding,
								tw("w-20 border-r-[1px] border-[#000000]"),
							]}
						>
							<Text style={headerText}>Desvio Padrão</Text>
						</View>
						<View style={[headerBg, cellPadding, tw("flex-1")]}>
							<Text style={headerText}>
								Preços Pesquisados e utilizados como Parâmetro
							</Text>
						</View>
					</View>

					{/* Header Row 2 - Quote columns */}
					<View style={tw("flex-row")}>
						<View
							style={[
								headerBg,
								cellPadding,
								tw("w-48 border-r-[1px] border-t-[1px] border-[#000000]"),
							]}
						>
							<Text style={headerText}></Text>
						</View>
						<View
							style={[
								headerBg,
								cellPadding,
								tw("w-12 border-r-[1px] border-t-[1px] border-[#000000]"),
							]}
						>
							<Text style={headerText}></Text>
						</View>
						<View
							style={[
								headerBg,
								cellPadding,
								tw("w-12 border-r-[1px] border-t-[1px] border-[#000000]"),
							]}
						>
							<Text style={headerText}></Text>
						</View>
						<View
							style={[
								headerBg,
								cellPadding,
								tw("w-20 border-r-[1px] border-t-[1px] border-[#000000]"),
							]}
						>
							<Text style={headerText}></Text>
						</View>
						<View
							style={[
								headerBg,
								cellPadding,
								tw("w-20 border-r-[1px] border-t-[1px] border-[#000000]"),
							]}
						>
							<Text style={headerText}></Text>
						</View>
						<View
							style={[
								headerBg,
								cellPadding,
								tw("w-20 border-r-[1px] border-t-[1px] border-[#000000]"),
							]}
						>
							<Text style={headerText}></Text>
						</View>

						{/* Quote headers */}
						<View
							style={[
								headerBg,
								cellPadding,
								tw("flex-1 border-r-[1px] border-t-[1px] border-[#000000]"),
							]}
						>
							<Text style={headerText}>Valor Unitário</Text>
						</View>
						<View
							style={[
								headerBg,
								cellPadding,
								tw("flex-1 border-r-[1px] border-t-[1px] border-[#000000]"),
							]}
						>
							<Text style={headerText}>Valor Total</Text>
						</View>
						<View
							style={[
								headerBg,
								cellPadding,
								tw("flex-1 border-r-[1px] border-t-[1px] border-[#000000]"),
							]}
						>
							<Text style={headerText}>Valor Unitário</Text>
						</View>
						<View
							style={[
								headerBg,
								cellPadding,
								tw("flex-1 border-r-[1px] border-t-[1px] border-[#000000]"),
							]}
						>
							<Text style={headerText}>Valor Total</Text>
						</View>
						<View
							style={[
								headerBg,
								cellPadding,
								tw("flex-1 border-r-[1px] border-t-[1px] border-[#000000]"),
							]}
						>
							<Text style={headerText}>Valor Unitário</Text>
						</View>
						<View
							style={[
								headerBg,
								cellPadding,
								tw("flex-1 border-t-[1px] border-[#000000]"),
							]}
						>
							<Text style={headerText}>Valor Total</Text>
						</View>
					</View>

					{/* Quote data headers */}
					<View style={tw("flex-row")}>
						<View
							style={[
								tw("bg-gray-400"),
								cellPadding,
								tw("w-48 border-r-[1px] border-t-[1px] border-black"),
							]}
						>
							<Text style={headerText}></Text>
						</View>
						<View
							style={[
								tw("bg-gray-400"),
								cellPadding,
								tw("w-12 border-r-[1px] border-t-[1px] border-black"),
							]}
						>
							<Text style={headerText}></Text>
						</View>
						<View
							style={[
								tw("bg-gray-400"),
								cellPadding,
								tw("w-12 border-r-[1px] border-t-[1px] border-black"),
							]}
						>
							<Text style={headerText}></Text>
						</View>
						<View
							style={[
								tw("bg-gray-400"),
								cellPadding,
								tw("w-20 border-r-[1px] border-t-[1px] border-black"),
							]}
						>
							<Text style={headerText}></Text>
						</View>
						<View
							style={[
								tw("bg-gray-400"),
								cellPadding,
								tw("w-20 border-r-[1px] border-t-[1px] border-black"),
							]}
						>
							<Text style={headerText}></Text>
						</View>
						<View
							style={[
								tw("bg-gray-400"),
								cellPadding,
								tw("w-20 border-r-[1px] border-t-[1px] border-black"),
							]}
						>
							<Text style={headerText}></Text>
						</View>

						{/* Quote data labels */}
						<View
							style={[
								tw("bg-gray-400"),
								cellPadding,
								tw("flex-1 border-r-[1px] border-t-[1px] border-black"),
							]}
						>
							<Text style={[headerText, tw("text-black text-[8px]")]}>
								DADOS DA COTAÇÃO 1*{"\n"}Descrever origem e qual{"\n"}Parâmetro
								se refere:
							</Text>
						</View>
						<View
							style={[
								tw("bg-gray-400"),
								cellPadding,
								tw("flex-1 border-r-[1px] border-t-[1px] border-black"),
							]}
						>
							<Text style={[headerText, tw("text-black text-[8px]")]}>
								DADOS DA COTAÇÃO 2*{"\n"}Descrever origem e qual{"\n"}Parâmetro
								se refere:
							</Text>
						</View>
						<View
							style={[
								tw("bg-gray-400"),
								cellPadding,
								tw("flex-1 border-r-[1px] border-t-[1px] border-black"),
							]}
						>
							<Text style={[headerText, tw("text-black text-[8px]")]}>
								DADOS DA COTAÇÃO 3*{"\n"}Descrever origem e qual{"\n"}Parâmetro
								se refere:
							</Text>
						</View>
					</View>

					{/* Data Rows */}
					{pesquisaMercadoData.pesquisa_mercado.map((item) => (
						<View key={item.descricao} style={tw("flex-row")}>
							{/* Description */}
							<View
								style={[
									cellPadding,
									tw("w-48 border-r-[1px] border-t-[1px] border-black"),
								]}
							>
								<Text style={redBoldText}>{item.descricao}</Text>
							</View>

							{/* Unit */}
							<View
								style={[
									cellPadding,
									tw("w-12 border-r-[1px] border-t-[1px] border-black"),
								]}
							>
								<Text style={normalText}>Un.</Text>
							</View>

							{/* Quantity */}
							<View
								style={[
									cellPadding,
									tw("w-12 border-r-[1px] border-t-[1px] border-black"),
								]}
							>
								<Text style={redText}>{item.quantidade}</Text>
							</View>

							{/* Average Unit Value */}
							<View
								style={[
									cellPadding,
									tw("w-20 border-r-[1px] border-t-[1px] border-black"),
								]}
							>
								<Text style={normalText}>
									{formatCurrency(item.valor_medio_unitario)}
								</Text>
							</View>

							{/* Total Value */}
							<View
								style={[
									cellPadding,
									tw("w-20 border-r-[1px] border-t-[1px] border-black"),
								]}
							>
								<Text style={normalText}>
									{formatCurrency(item.valor_total)}
								</Text>
							</View>

							{/* Standard Deviation */}
							<View
								style={[
									cellPadding,
									tw("w-20 border-r-[1px] border-t-[1px] border-black"),
								]}
							>
								<Text style={normalText}>
									{typeof item.desvio_padrao === "number"
										? item.desvio_padrao.toFixed(2)
										: "-"}
								</Text>
							</View>

							{/* Quote 1 */}
							<View
								style={[
									cellPadding,
									tw("flex-1 border-r-[1px] border-t-[1px] border-black"),
								]}
							>
								<Text
									style={
										item.cotacoes[0]?.valor_unitario ? redBoldText : normalText
									}
								>
									{formatCurrency(item.cotacoes[0]?.valor_unitario)}
								</Text>
							</View>
							<View
								style={[
									cellPadding,
									tw("flex-1 border-r-[1px] border-t-[1px] border-black"),
								]}
							>
								<Text style={normalText}>
									{formatCurrency(item.cotacoes[0]?.valor_total)}
								</Text>
							</View>

							{/* Quote 2 */}
							<View
								style={[
									cellPadding,
									tw("flex-1 border-r-[1px] border-t-[1px] border-black"),
								]}
							>
								<Text
									style={
										item.cotacoes[1]?.valor_unitario ? redBoldText : normalText
									}
								>
									{formatCurrency(item.cotacoes[1]?.valor_unitario)}
								</Text>
							</View>
							<View
								style={[
									cellPadding,
									tw("flex-1 border-r-[1px] border-t-[1px] border-black"),
								]}
							>
								<Text style={normalText}>
									{formatCurrency(item.cotacoes[1]?.valor_total)}
								</Text>
							</View>

							{/* Quote 3 */}
							<View
								style={[
									cellPadding,
									tw("flex-1 border-r-[1px] border-t-[1px] border-black"),
								]}
							>
								<Text
									style={
										item.cotacoes[2]?.valor_unitario ? redBoldText : normalText
									}
								>
									{formatCurrency(item.cotacoes[2]?.valor_unitario)}
								</Text>
							</View>
							<View
								style={[cellPadding, tw("flex-1 border-t-[1px] border-black")]}
							>
								<Text style={normalText}>
									{formatCurrency(item.cotacoes[2]?.valor_total)}
								</Text>
							</View>
						</View>
					))}
				</View>

				<View style={tw("mt-4")}>
					{projectDocument.fields.map((field) => {
						if (field.type === "STRING") {
							return (
								<View
									key={field.name}
									style={tw("flex flex-col text-sm gap-4")}
								>
									<View
										key={field.name}
										style={tw(`flex flex-row items-center gap-2 font-bold`)}
									>
										<Text>{field.section}.</Text>
										<Text>{field.name}</Text>
									</View>

									<Text style={tw(`${normalText}`)}>
										{field.value as string}
									</Text>
								</View>
							);
						}
					})}
				</View>
			</Page>
		</Document>
	);
}
