import { Document, Font, Image, Page, Text, View } from "@react-pdf/renderer";
import { createTw } from "react-pdf-tailwind";
import { ARIAL_FONT } from "@/constants/pdf-fonts";
import type { ProjectDocument } from "@/hooks/projects/use-get-project-document-by-id";
import { ExperienceTable, type ExperienceTableValue } from "./experience-table";
import {
	QualifiedPersonnelTable,
	type QualifiedPersonnelTableValue,
} from "./qualified-personnel-table";
import {
	PatrimonialControlTable,
	type PatrimonialControlTableValue,
} from "./patrimonial-control-table";
import {
	ResponsibleDataTable,
	type ResponsibleDataTableValue,
} from "./responsible-data-table";

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

interface DeclarationOfTechnicalCapacityPDFProps {
	document: ProjectDocument;
}

export function DeclarationOfTechnicalCapacityPDF({
	document: projectDocument,
}: DeclarationOfTechnicalCapacityPDFProps) {
	return (
		<Document
			title="Declaração de Capacidade Técnica e Gerencial"
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

				<View style={tw("text-center mb-8")}>
					<Text style={tw("text-xl font-bold text-black")}>
						DECLARAÇÃO DE CAPACIDADE TÉCNICA E GERENCIAL
					</Text>
				</View>

				<View style={tw("text-black mb-6")}>
					<Text style={tw("font-semibold mb-2")}>
						Proposta Transferegov.br nº: 000001/2025
					</Text>
				</View>

				<View>
					{projectDocument.fields.map((field) => {
						if (
							field.name !== "Identificação e assinatura do responsável" &&
							field.section !== "9" &&
							field.section !== "10" &&
							field.section !== "11" &&
							!(
								field.name === "Informações adicionais" &&
								field.value === "Não se aplica."
							)
						) {
							return (
								<View key={field.id} style={tw("mb-4")}>
									<View
										style={tw(
											`text-black py-2 ${!field.parentId ? "font-semibold" : ""} ${field.parentId ? "pl-4" : ""}`
										)}
									>
										<Text>
											{field.section}. {field.name}
										</Text>
									</View>

									{field.value &&
										field.value !== "" &&
										field.type === "TABLE" &&
										field.tableType === "CAPACIDADE_TECNICA_EXPERIENCIA" && (
											<ExperienceTable
												value={field.value as unknown as ExperienceTableValue}
											/>
										)}

									{field.value &&
										field.value !== "" &&
										field.type === "TABLE" &&
										field.tableType === "CAPACIDADE_TECNICA_PESSOAL" && (
											<QualifiedPersonnelTable
												value={
													field.value as unknown as QualifiedPersonnelTableValue
												}
											/>
										)}

									{field.value &&
										field.value !== "" &&
										field.type === "TABLE" &&
										field.tableType === "CAPACIDADE_TECNICA_PATRIMONIAL" && (
											<PatrimonialControlTable
												value={
													field.value as unknown as PatrimonialControlTableValue
												}
											/>
										)}

									{field.value &&
										field.value !== "" &&
										field.type === "TABLE" &&
										field.tableType === "CAPACIDADE_TECNICA_DADOS" && (
											<ResponsibleDataTable
												value={
													{
														value: field.value,
													} as unknown as ResponsibleDataTableValue
												}
											/>
										)}

									{field.value &&
										field.value !== "" &&
										field.type === "STRING" && (
											<View style={tw("text-sm pb-2 text-zinc-600")}>
												<Text>{field.value as string}</Text>
											</View>
										)}
								</View>
							);
						}
					})}
				</View>

				<View style={tw("mb-8")}>
					<Text style={tw("text-sm font-semibold")}>
						Dessa forma, encontra-se apta à perfeita execução das Meta(s)
						especificadas no Plano de Trabalho constante da Plataforma
						Transferegov.br.
					</Text>
				</View>

				<View style={tw("w-full text-center mt-12 w-[400px] mx-auto")}>
					<View style={tw("border-t-[1px] border-black pt-2")}>
						<Text style={tw("font-semibold text-sm")}>Local e Data</Text>
					</View>
				</View>

				<View style={tw("w-full text-center mt-12 w-[400px] mx-auto")}>
					<View style={tw("border-t-[1px] border-black pt-2")}>
						<Text style={tw("font-semibold text-sm")}>
							Assinatura do Dirigente máximo ou outra autoridade, por delegação
							de competência
						</Text>
					</View>
				</View>
			</Page>
		</Document>
	);
}
