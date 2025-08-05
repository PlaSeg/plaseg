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

interface CounterpartPDFProps {
	document: ProjectDocument;
}

export function CounterpartPDF({
	document: projectDocument,
}: CounterpartPDFProps) {
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

					<Text style={tw("indent-8 mt-4")}>
						<Text style={tw("font-bold")}>DECLARO</Text>, perante a Secretaria
						de Gestão e Ensino em Segurança Pública, em conformidade com a lei e
						sob suas penas, que há dotação orçamentária suficiente para a
						cobertura da despesa que se pretende realizar a título de
						contrapartida no âmbito da Proposta acima identificada, em
						conformidade com rubricas e valores abaixo, e que os recursos a
						serem transferidos pelo Governo Federal, à conta do convênio, serão
						incluídos no orçamento do proponente.
					</Text>
				</View>

				<View style={tw("mt-8")}>
					<View>
						{projectDocument.fields.map((field) => (
							<View key={field.id}>
								<View style={tw("text-black p-2")}>
									<Text>
										{field.name}:{" "}
										{Array.isArray(field.value)
											? field.value.map((item) => item.name).join(", ")
											: field.value && field.value !== "" && field.value}
									</Text>
								</View>
							</View>
						))}
					</View>
				</View>

				<View style={tw("w-full mt-12 text-center")}>
					<Text>
						TERESINA-PI, {formatDateToBrazilian(new Date().toISOString())}
					</Text>
				</View>
			</Page>
		</Document>
	);
}
