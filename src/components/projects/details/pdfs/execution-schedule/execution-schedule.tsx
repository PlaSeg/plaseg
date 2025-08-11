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

interface CronogramaValue {
	rows: Array<{
		etapa: string;
		procedimentos: Array<{
			procedimento: string;
			timeline: Record<string, string>;
		}>;
	}>;
	headers: string[];
	metadata: {
		convenio: string;
	};
}

interface ExecutionSchedulePDFProps {
	document: ProjectDocument;
}

export function ExecutionSchedulePDF({
	document: projectDocument,
}: ExecutionSchedulePDFProps) {
	// Estilos reutilizáveis
	const boldText = tw("text-xs font-bold text-center");
	const normalText = tw("text-xs text-center");
	const headerBg = tw("bg-[#73ABE7]");
	const subHeaderBg = tw("bg-blue-100");
	const headerPadding = tw("px-1 py-2");
	const cellPadding = tw("px-1 py-1");

	const cronogramaData = projectDocument.fields.find(
		(field) =>
			field.type === "TABLE" && field.tableType === "CRONOGRAMA_DE_EXECUCAO"
	)?.value as unknown as CronogramaValue;

	if (!cronogramaData) return null;

	const monthHeaders = cronogramaData.headers.slice(1); // Remove "Item(s) Procedimento"

	return (
		<Document
			title={projectDocument.name}
			author="Transferegov.br"
			creator="Transferegov.br"
			producer="EzPDF"
		>
			{cronogramaData.rows.map((row) => (
				<Page
					key={crypto.randomUUID()}
					size="A4"
					orientation="landscape"
					style={tw("p-4 font-default bg-white")}
				>
					{/* Título */}
					<View style={tw("text-center mb-4")}>
						<Text style={tw("text-sm font-bold")}>
							CRONOGRAMA DE EXECUÇÃO DA PROPOSTA/CONVÊNIO N°{" "}
							{cronogramaData.metadata.convenio || "000064/2023"}
						</Text>
					</View>

					{/* Tabela */}
					<View style={tw("border-[1px] border-black")}>
						{/* Cabeçalho Principal - Primeira Linha */}
						<View style={tw("flex-row")}>
							<View
								style={[
									headerBg,
									headerPadding,
									tw("w-48 border-r-[1px] border-b-[1px] border-black"),
								]}
							>
								<Text style={[boldText]}>Item(s)</Text>
							</View>

							<View
								style={[
									headerBg,
									headerPadding,
									tw("w-64 border-r-[1px] border-b-[1px] border-black"),
								]}
							>
								<Text style={[boldText]}>Procedimento*</Text>
							</View>

							<View
								style={[
									headerBg,
									tw("flex-1 border-b-[1px] border-black px-1 py-1"),
								]}
							>
								<Text style={[boldText]}>Período</Text>
							</View>
						</View>

						{/* Cabeçalho dos Meses - Segunda Linha */}
						<View style={tw("flex-row")}>
							<View
								style={[
									headerBg,
									headerPadding,
									tw(
										"w-48 border-r-[1px] border-b-[1px] border-t-0 border-black"
									),
								]}
							>
								<Text style={boldText}></Text>
							</View>

							<View
								style={[
									headerBg,
									headerPadding,
									tw(
										"w-64 border-r-[1px] border-b-[1px] border-t-0 border-black"
									),
								]}
							>
								<Text style={boldText}></Text>
							</View>

							{monthHeaders.map((month, index) => (
								<View
									key={month}
									style={[
										headerBg,
										headerPadding,
										tw(
											`flex-1 border-b-[1px] border-t-0 border-black ${index < monthHeaders.length - 1 ? "border-r-[1px]" : ""}`
										),
									]}
								>
									<Text style={boldText}>{month}</Text>
								</View>
							))}
						</View>

						{/* Meta/Etapa */}
						<View style={tw("flex-row")}>
							<View
								style={[
									subHeaderBg,
									tw("px-2 py-1 flex-1 border-b-[1px] border-black"),
								]}
							>
								<Text style={boldText}>
									Conforme aba 'Plano de Trabalho' subaba 'Crono Físico'
								</Text>
							</View>
						</View>

						<View style={tw("flex-row")}>
							<View
								style={[
									subHeaderBg,
									tw("px-2 py-1 flex-1 border-b-[1px] border-black"),
								]}
							>
								<Text style={boldText}>
									META 1 - ESTRUTURAR A GUARDA MUNICIPAL DE CAXIAS-MA ATRAVÉS DA
									AQUISIÇÃO DE VIATURAS
								</Text>
							</View>
						</View>

						{/* Linhas de Procedimentos */}
						{row.procedimentos.map((procedimento, procIndex) => (
							<View key={crypto.randomUUID()} style={tw("flex-row")}>
								{/* Coluna Etapa (apenas na primeira linha) */}
								{procIndex === 0 && (
									<View
										style={[
											tw(
												`w-48 px-2 py-1 justify-center border-r-[1px] border-black`
											),
											{
												height: row.procedimentos.length * 30,
											},
										]}
									>
										<Text style={[normalText, tw("transform -rotate-90")]}>
											{row.etapa}
										</Text>
									</View>
								)}

								{/* Se não for a primeira linha, precisa compensar o espaço */}
								{procIndex > 0 && (
									<View style={tw("w-48 border-r-[1px] border-black")} />
								)}

								{/* Coluna Procedimento */}
								<View
									style={[
										tw(
											`w-64 px-2 py-1 border-r-[1px] ${procIndex < row.procedimentos.length - 1 ? "border-b-[1px]" : ""} border-black`
										),
									]}
								>
									<Text style={normalText}>{procedimento.procedimento}</Text>
								</View>

								{/* Colunas dos Meses */}
								{monthHeaders.map((month, monthIndex) => (
									<View
										key={month}
										style={[
											cellPadding,
											tw(
												`flex-1 ${procIndex < row.procedimentos.length - 1 ? "border-b-[1px]" : ""} ${monthIndex < monthHeaders.length - 1 ? "border-r-[1px]" : ""} border-black`
											),
										]}
									>
										<Text style={boldText}>
											{procedimento.timeline[month] === "X" ? "X" : ""}
										</Text>
									</View>
								))}
							</View>
						))}
					</View>
				</Page>
			))}
		</Document>
	);
}
