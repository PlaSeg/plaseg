import {
	Document,
	Page,
	PDFViewer,
	pdf,
	StyleSheet,
	Text,
	View,
} from "@react-pdf/renderer";
import type React from "react";

const styles = StyleSheet.create({
	page: {
		// fontFamily: "Roboto",
		fontSize: 10,
		padding: 20,
		backgroundColor: "#ffffff",
	},
	header: {
		alignItems: "center",
		marginBottom: 20,
	},
	logo: {
		width: 80,
		height: 60,
		marginBottom: 10,
	},
	title: {
		fontSize: 16,
		fontWeight: "bold",
		textAlign: "center",
		textDecoration: "underline",
		textTransform: "uppercase",
	},
	sectionTitle: {
		fontSize: 12,
		fontWeight: "bold",
		marginBottom: 10,
		marginTop: 20,
	},
	table: {
		width: "100%",
		marginBottom: 20,
		border: "1px solid #000000",
	},
	tableRow: {
		flexDirection: "row",
		borderBottomWidth: 1,
		borderBottomColor: "#000000",
		borderBottomStyle: "solid",
	},
	tableHeader: {
		backgroundColor: "#5A95C7",
		fontWeight: "bold",
	},
	tableCellEtapa: {
		width: "15%",
		padding: 4,
		height: 50,
		borderRightWidth: 1,
		borderRightColor: "#000000",
		borderRightStyle: "solid",
		textAlign: "center",
		fontSize: 8,
	},
	tableCellProcedimento: {
		width: "25%",
		padding: 4,
		borderRightWidth: 1,
		borderRightColor: "#000000",
		borderRightStyle: "solid",
		fontSize: 8,
	},
	tableCellMonth: {
		width: "5%",
		padding: 4,
		borderRightWidth: 1,
		borderRightColor: "#000000",
		borderRightStyle: "solid",
		textAlign: "center",
		fontSize: 8,
	},
	footer: {
		position: "absolute",
		bottom: 20,
		right: 20,
		fontSize: 10,
	},
});

interface TimelineData {
	[key: string]: string;
}

interface Procedimento {
	timeline: TimelineData;
	procedimento: string;
}

interface Row {
	etapa: string;
	procedimentos: Procedimento[];
}

interface Metadata {
	meta: string;
	etapa: string;
	convenio: string;
	referencia: string;
	periodo_fim: string;
	periodo_inicio: string;
}

export interface ExecutionScheduleValue {
	rows: Row[];
	headers: string[];
	metadata: Metadata;
}

interface ExecutionSchedulePDFProps {
	document: {
		id: string;
		name: string;
		fields: Array<{
			id: string;
			name: string;
			section: string;
			type: string;
			tableType?: string;
			value: unknown;
			parentId: string | null;
		}>;
	};
	hideButton?: boolean;
}

const ExecutionSchedulePDFDocument: React.FC<{
	document: ExecutionSchedulePDFProps["document"];
}> = ({ document: projectDocument }) => {
	const scheduleField = projectDocument.fields.find(
		(field) => field.tableType === "CRONOGRAMA_DE_EXECUCAO"
	);

	if (!scheduleField?.value) {
		return (
			<Document>
				<Page size="A4" style={styles.page}>
					<Text>No schedule data found</Text>
				</Page>
			</Document>
		);
	}

	const scheduleData = scheduleField.value as ExecutionScheduleValue;
	const currentDate = new Date().toLocaleDateString("pt-BR");

	return (
		<Document>
			{scheduleData.rows.map((row) => (
				<Page
					key={`${scheduleData.metadata.meta}`}
					size="A3"
					orientation="landscape"
					style={styles.page}
				>
					<View style={styles.header}>
						<Text style={styles.title}>{projectDocument.name}</Text>
					</View>

					<Text style={styles.sectionTitle}>
						{scheduleField.section} - {scheduleField.name}
					</Text>

					<View style={styles.table}>
						{/* Table Header */}
						<View style={[styles.tableRow, styles.tableHeader]}>
							<View style={styles.tableCellEtapa}>
								<Text>Etapa</Text>
							</View>
							<View style={styles.tableCellProcedimento}>
								<Text>Procedimento</Text>
							</View>
							{scheduleData.headers.slice(2).map((header) => (
								<View key={header} style={styles.tableCellMonth}>
									<Text>{header}</Text>
								</View>
							))}
						</View>

						{/* Table Body - Single Row (Etapa) */}
						{row.procedimentos.map((procedimento, procIndex) => (
							<View key={procedimento.procedimento} style={styles.tableRow}>
								{procIndex === 0 && (
									<View
										style={[
											styles.tableCellEtapa,
											{
												backgroundColor: "#f8f8f8",
												height: row.procedimentos.length * 10,
											},
										]}
									>
										<Text>{row.etapa}</Text>
									</View>
								)}
								{procIndex > 0 && <View style={styles.tableCellEtapa} />}

								<View style={styles.tableCellProcedimento}>
									<Text>{procedimento.procedimento}</Text>
								</View>

								{scheduleData.headers.slice(2).map((header) => (
									<View key={header} style={styles.tableCellMonth}>
										<Text>{procedimento.timeline[header] || ""}</Text>
									</View>
								))}
							</View>
						))}
					</View>

					<Text style={styles.footer}>TERESINA-PI, {currentDate}</Text>
				</Page>
			))}
		</Document>
	);
};

export function ExecutionSchedulePDF({
	document: projectDocument,
	hideButton = false,
}: ExecutionSchedulePDFProps) {
	const handleDownloadPDF = async () => {
		const doc = <ExecutionSchedulePDFDocument document={projectDocument} />;
		const asPdf = pdf(doc);
		const blob = await asPdf.toBlob();

		const url = URL.createObjectURL(blob);
		const link = document.createElement("a");
		link.href = url;
		link.download = `${projectDocument.name}.pdf`;
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
		URL.revokeObjectURL(url);
	};

	return (
		<div className="w-[1000px] min-h-screen py-8 mx-auto flex flex-col gap-6">
			{!hideButton && (
				<button
					type="button"
					onClick={handleDownloadPDF}
					className="max-w-max px-4 py-2 border rounded hover:bg-gray-50"
				>
					Baixar PDF
				</button>
			)}

			<div className="w-full h-screen border shadow-lg">
				<PDFViewer width="100%" height="100%">
					<ExecutionSchedulePDFDocument document={projectDocument} />
				</PDFViewer>
			</div>
		</div>
	);
}
