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

interface JustificationPDFProps {
	document: ProjectDocument;
}

export function JustificationPDF({
	document: projectDocument,
}: JustificationPDFProps) {
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

				<View style={tw("text-center mb-4")}>
					<Text style={tw("text-xl font-bold text-black")}>
						{projectDocument.name}
					</Text>
				</View>

				<View style={tw("text-black")}>
					<Text style={tw("font-semibold mb-2")}>
						Proposta Transferegov.br nº: 000001/2025
					</Text>

					<Text style={tw("indent-8")}>
						Na qualidade de dirigente máximo do proponente (outra autoridade,
						por delegação de competência), complemento a justificativa do
						projeto estruturado no âmbito da Proposta Transferegov.br acima
						identificada nos seguintes termos:
					</Text>
				</View>

				<View style={tw("border-[1px] border-black mt-8")}>
					<View>
						{projectDocument.fields.map((field) => (
							<View key={field.id}>
								<View
									style={tw(`text-black p-2 border-y-[1px] border-black
   								${field.isTitle ? "border-y-0" : ""}
   								${!field.parentId ? "font-semibold" : ""}
   								${field.value && field.value !== "" ? "border-b-0" : ""}`)}
								>
									<Text>
										{field.section}. {field.name}
									</Text>
								</View>

								{field.value && field.value !== "" && (
									<View style={tw("text-sm px-3 pb-2 text-zinc-600")}>
										<Text>{field.value as string}</Text>
									</View>
								)}
							</View>
						))}
					</View>
				</View>

				<View style={tw("w-full mt-12 text-center")}>
					<Text>
						TERESINA-PI, {formatDateToBrazilian(new Date().toISOString())}
					</Text>
				</View>

				<View style={tw("w-full mt-12 text-center")}>
					<Text style={tw("font-bold italic")}>
						Apoiam e Subscrevem este projeto:
					</Text>
				</View>
			</Page>
		</Document>
	);
}
