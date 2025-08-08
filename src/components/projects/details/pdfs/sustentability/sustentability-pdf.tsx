import { Document, Font, Image, Page, Text, View } from "@react-pdf/renderer";
import { createTw } from "react-pdf-tailwind";
import { ARIAL_FONT } from "@/constants/pdf-fonts";
import type { ProjectDocument } from "@/hooks/projects/use-get-project-document-by-id";
import { formatDateToBrazilian } from "@/utils/format-date";
import { SustainabilityPDFTable } from "./sustentability-pdf-table";

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

interface SustainabilityPDFProps {
	document: ProjectDocument;
}

export function SustainabilityPDF({
	document: projectDocument,
}: SustainabilityPDFProps) {
	return (
		<Document
			title={projectDocument.name}
			author="Transferegov.br"
			creator="Transferegov.br"
			producer="EzPDF"
		>
			<Page size="A4" style={tw("p-16 font-default bg-white text-base")}>
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
				</View>

				<View style={tw("mt-8")}>
					<View>
						{projectDocument.fields.map((field) => (
							<View key={field.id}>
								<View
									style={tw(`text-black py-2
										${!field.parentId ? "font-semibold" : ""}
										${field.parentId ? "pl-4" : ""}`)}
								>
									<Text>
										{field.section}. {field.name}
									</Text>
								</View>

								{field.value &&
									field.value !== "" &&
									field.type === "TABLE" &&
									SustainabilityPDFTable(
										field.value as unknown as SustainabilityTableValue
									)}

								{field.value &&
									field.value !== "" &&
									field.type === "STRING" && (
										<View style={tw("text-sm pb-2 pl-4 text-zinc-600")}>
											<Text>{field.value as string}</Text>
										</View>
									)}
							</View>
						))}
					</View>
				</View>

				<View style={tw("w-full mt-12 text-center")}>
					<Text style={tw("text-sm")}>
						TERESINA-PI, {formatDateToBrazilian(new Date().toISOString())}
					</Text>
				</View>
			</Page>

			<Page size="A4" style={tw("p-16 font-default bg-white text-base")}>
				<View style={tw("w-full text-center mt-12 w-[400px] mx-auto")}>
					<Text style={tw("font-semibold")}>
						Assinatura do Dirigente máximo ou outra autoridade, por delegação de
						competência
					</Text>
				</View>
			</Page>
		</Document>
	);
}
