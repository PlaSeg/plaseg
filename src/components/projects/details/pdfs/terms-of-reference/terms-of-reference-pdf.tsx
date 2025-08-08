import { Document, Font, Image, Page, Text, View } from "@react-pdf/renderer";
import { createTw } from "react-pdf-tailwind";
import { ARIAL_FONT } from "@/constants/pdf-fonts";
import type { ProjectDocument } from "@/hooks/projects/use-get-project-document-by-id";
import { formatDateToBrazilian } from "@/utils/format-date";
import {
	type TableValue,
	TermsOfReferenceTable,
} from "./terms-of-reference-table";

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

interface TermsOfReferencePDFProps {
	document: ProjectDocument;
}

export function TermsOfReferencePDF({
	document: projectDocument,
}: TermsOfReferencePDFProps) {
	return (
		<Document
			title={projectDocument.name}
			author="Transferegov.br"
			creator="Transferegov.br"
			producer="EzPDF"
		>
			<Page size="A4" style={tw("p-8 px-16 font-default bg-white text-base")}>
				<View style={tw("flex mb-8")}>
					<View style={tw("w-[99px] h-[111px] mx-auto")}>
						<Image src="/teresina.png" style={tw("w-full h-full")} />
					</View>
				</View>

				<View style={tw("text-center mb-4")}>
					<Text style={tw("text-lg font-bold text-black uppercase")}>
						{projectDocument.name}
					</Text>
				</View>

				<View style={tw("my-8")}>
					{projectDocument.fields.map((field) => {
						if (field.name !== "Identificação e assinatura do responsável") {
							return (
								<View key={field.id} style={tw("mb-4")}>
									<View
										style={tw(
											`text-black py-2 ${!field.parentId ? "font-semibold" : ""}`
										)}
									>
										<Text>
											{field.section} - {field.name}
										</Text>
									</View>

									{field.value &&
										field.value !== "" &&
										field.type === "TABLE" && (
											<TermsOfReferenceTable
												value={field.value as unknown as TableValue}
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

				<View style={tw("w-full mt-12 text-right")}>
					<Text style={tw("text-sm")}>
						TERESINA-PI, {formatDateToBrazilian(new Date().toISOString())}
					</Text>
				</View>
			</Page>
		</Document>
	);
}
