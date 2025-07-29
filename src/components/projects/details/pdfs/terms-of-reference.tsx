import { Button } from "@/components/ui/button";
import type { ProjectDocument } from "@/hooks/projects/use-get-project-document-by-id";
import { formatDateToBrazilian } from "@/utils/format-date";
import {
	type TableValue,
	TermsOfReferenceTable,
} from "./terms-of-reference-table";

interface TermsOfReferencePDFProps {
	document: ProjectDocument;
	hideButton?: boolean;
}

export function TermsOfReferencePDF({
	document: projectDocument,
	hideButton = false,
}: TermsOfReferencePDFProps) {
	function handleDownloadPDF() {
		const element = document.querySelector("#pdf-content");
		import("html2pdf.js").then((html2pdf) => {
			html2pdf.default(element as HTMLElement, {
				filename: `${projectDocument.name}.pdf`,
				margin: [5, 5, 5, 5], // margens em mm
				html2canvas: {
					useCORS: true,
				},
				jsPDF: {
					unit: "mm",
					orientation: "portrait",
					format: "a4",
				},
			});
		});
	}

	return (
		<div className="min-h-screen py-8 mx-auto flex flex-col gap-6">
			{!hideButton && (
				<Button
					variant="outline"
					className="max-w-max"
					onClick={handleDownloadPDF}
				>
					Baixar PDF
				</Button>
			)}

			<div
				id="pdf-content"
				className="w-full bg-white shadow-lg"
				style={{
					width: "210mm",
					minHeight: "297mm", // altura A4
					margin: "0 auto",
					padding: "20mm", // padding interno
					boxSizing: "border-box",
					pageBreakInside: "avoid",
				}}
			>
				<div className="space-y-6">
					<div className="flex justify-center mb-8">
						<div className="relative">
							<img
								src="/bandeira_teresina.svg"
								alt="Bandeira de Teresina"
								className="object-contain w-32 h-24"
							/>
						</div>
					</div>

					<div className="text-center space-y-4">
						<h1 className="font-bold text-black uppercase underline text-lg">
							{projectDocument.name}
						</h1>
					</div>

					<div className="my-8 space-y-4">
						{projectDocument.fields.map((field) => {
							if (field.name !== "Identificação e assinatura do responsável") {
								return (
									<div key={field.id} className="page-break-inside-avoid">
										<div
											className={`text-black py-2 ${!field.parentId && "font-semibold"}`}
										>
											{field.section} - {field.name}
										</div>

										{field.value &&
											field.value !== "" &&
											field.type === "TABLE" && (
												<div className="mb-4">
													<TermsOfReferenceTable
														value={field.value as unknown as TableValue}
													/>
												</div>
											)}

										{field.value &&
											field.value !== "" &&
											field.type === "STRING" && (
												<div className="text-sm pb-2 text-zinc-600 leading-relaxed">
													{field.value as string}
												</div>
											)}
									</div>
								);
							}
						})}
					</div>

					<div className="w-full mt-12 flex justify-end">
						<span className="text-sm">
							TERESINA-PI, {formatDateToBrazilian(new Date().toISOString())}
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}
