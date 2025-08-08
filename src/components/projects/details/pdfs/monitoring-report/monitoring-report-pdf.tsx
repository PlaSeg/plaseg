import { Document, Font, Image, Page, Text, View } from "@react-pdf/renderer";
import { createTw } from "react-pdf-tailwind";
import { ARIAL_FONT } from "@/constants/pdf-fonts";
import type { ProjectDocument } from "@/hooks/projects/use-get-project-document-by-id";
import { formatDateToBrazilian } from "@/utils/format-date";

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

interface MonitoringReportPDFProps {
	document: ProjectDocument;
}

function renderTextWithBold(text: string) {
	const parts = text.split(/(\*\*.*?\*\*)/g);

	return parts.map((part, index) => {
		if (part.startsWith("**") && part.endsWith("**")) {
			const boldText = part.slice(2, -2);
			return (
				<Text
					key={`bold-${index}-${boldText.slice(0, 10)}`}
					style={tw("font-bold")}
				>
					{boldText}
				</Text>
			);
		} else {
			return part;
		}
	});
}

export function MonitoringReportPDF({
	document: projectDocument,
}: MonitoringReportPDFProps) {
	return (
		<Document
			title={projectDocument.name}
			author="Transferegov.br"
			creator="Transferegov.br"
			producer="EzPDF"
		>
			<Page size="A4" style={tw("p-16 font-default bg-white text-base")}>
				<View style={tw("flex mb-8")}>
					<View style={tw("w-[60px] h-[60px] mx-auto")}>
						<Image
							src="/ministerio_da_justica.png"
							style={tw("w-full h-full")}
						/>
					</View>
				</View>

				<View style={tw("text-center mb-6 flex flex-col gap-0")}>
					<Text style={tw("text-base text-black block")}>
						Ministério da Justiça e Segurança Pública
					</Text>

					<Text style={tw("text-base text-black block")}>
						Secretaria Nacional de Segurança Pública
					</Text>

					<Text style={tw("text-base text-black block")}>
						Diretoria do Sistema Único de Segurança Pública
					</Text>

					<Text style={tw("text-base text-black block")}>
						Coordenação-Geral de Políticas de Prevenção à Violência e à
						Criminalidade
					</Text>
				</View>

				<View style={tw("text-center mb-6 flex flex-col gap-0")}>
					<Text style={tw("text-lg font-bold text-black leading-tight")}>
						RELATÓRIO DETALHADO DE MONITORAMENTO DAS AÇÕES
					</Text>{" "}
					<Text style={tw("text-lg font-bold text-black leading-tight ml-2")}>
						PREVENTIVAS REALIZADAS JUNTO À COMUNIDADE
					</Text>
				</View>

				<View style={tw("w-full border-[1px] border-black")}>
					{projectDocument.fields
						.sort((a, b) => {
							const sectionA = parseFloat(a.section) || 0;
							const sectionB = parseFloat(b.section) || 0;
							return sectionA - sectionB;
						})
						.map((field, index, sortedFields) => (
							<View key={field.id}>
								<View
									style={tw(
										`px-3 py-2 ${index < sortedFields.length - 1 ? "border-b-[1px] border-black" : ""}`
									)}
								>
									<Text style={tw("font-bold text-sm")}>
										{field.section}. {field.name}
									</Text>
								</View>

								{field.value && field.value !== "" && (
									<View
										style={tw(
											`px-3 py-4 ${index < sortedFields.length - 1 ? "border-b-[1px] border-black" : ""}`
										)}
									>
										<Text style={tw("text-sm text-zinc-600 text-justify")}>
											{renderTextWithBold(field.value as string)}
										</Text>
									</View>
								)}
							</View>
						))}
				</View>

				<View style={tw("w-full mt-12 text-center")}>
					<Text style={tw("text-sm")}>
						TERESINA-PI, {formatDateToBrazilian(new Date().toISOString())}
					</Text>
				</View>
			</Page>
		</Document>
	);
}
