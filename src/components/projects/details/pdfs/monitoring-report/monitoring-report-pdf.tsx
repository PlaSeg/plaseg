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
			<Page size="A4" style={tw("p-8 font-default bg-white text-base")}>
				<View style={tw("flex mb-8")}>
					<View style={tw("w-[99px] h-[111px] mx-auto")}>
						<Image src="/teresina.png" style={tw("w-full h-full")} />
					</View>
				</View>

				<View style={tw("text-center mb-6")}>
					<Text style={tw("text-xl font-bold text-black")}>
						{projectDocument.name}
					</Text>
				</View>

				<View style={tw("text-black mb-6")}>
					<Text style={tw("font-semibold")}>
						Proposta Transferegov.br nº: 000001/2025
					</Text>
				</View>

				<View style={tw("w-full border-[1px] border-black")}>
					{projectDocument.fields.map((field, index) => (
						<View key={field.id}>
							{/* Header row com título */}
							<View
								style={tw(
									`border-b-[1px] border-black px-3 py-2 ${index > 0 ? "border-t-[1px]" : ""}`
								)}
							>
								<Text style={tw("font-bold text-sm")}>
									{field.section}. {field.name}
								</Text>
							</View>

							{/* Content row com valor */}
							{field.value && field.value !== "" && (
								<View
									style={tw(
										`px-3 py-4 ${index < projectDocument.fields.length - 1 ? "border-b-[1px] border-black" : ""}`
									)}
								>
									<Text style={tw("text-sm text-zinc-600 text-justify")}>
										{field.value as string}
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
