import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useGetProjectDocuments } from "@/hooks/projects/use-get-project-documents";
import { formatDateToBrazilian } from "@/utils/format-date";
import {
	type TableValue,
	TermsOfReferenceTable,
} from "../pdfs/terms-of-reference-table";

interface ExportProjectPDFProps {
	projectId: string;
}

export function ExportProjectPDF({ projectId }: ExportProjectPDFProps) {
	const { projectDocuments, isLoadingGetProjectDocuments } =
		useGetProjectDocuments(projectId);

	const handleExport = () => {
		const element = document.querySelector("#pdf-export-content");
		import("html2pdf.js").then((html2pdf) => {
			html2pdf.default(element as HTMLElement, {
				filename: `projeto.pdf`,
				margin: [5, 5, 5, 5], // margens em mm
				html2canvas: {
					useCORS: true,
					scale: 2,
				},
				jsPDF: {
					unit: "mm",
					orientation: "portrait",
					format: "a4",
				},
			});
		});
	};

	const filteredDocuments = projectDocuments?.filter(
		(document) => document.name !== "Cronograma de Execução"
	);

	if (isLoadingGetProjectDocuments) {
		return (
			<Button disabled className="bg-dark hover:bg-dark/50">
				<Download />
				Carregando...
			</Button>
		);
	}

	return (
		<>
			<Button onClick={handleExport} className="bg-dark hover:bg-dark/90">
				<Download />
				Exportar PDF
			</Button>

			{/* Conteúdo invisível para exportação PDF */}
			<div
				id="pdf-export-content"
				style={{
					position: "absolute",
					left: "-9999px",
					top: "-9999px",
					visibility: "hidden",
				}}
			>
				<div className="min-h-screen py-8 mx-auto flex flex-col gap-6">
					{filteredDocuments?.map((document) => (
						<div key={document.id} className="mb-8 page-break-after">
							{document.name === "Justificativa Completa do Projeto" && (
								<div
									className="w-full bg-white shadow-lg rounded-none"
									style={{
										width: "210mm",
										minHeight: "290mm",
										margin: "0 auto",
										aspectRatio: "1/1.414",
									}}
								>
									<div className="p-8 space-y-6">
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
											<h1 className="text-xl font-bold text-black">
												{document.name}
											</h1>
										</div>

										<div className="text-sm text-black leading-relaxed text-justify">
											<h2 className="text-base font-semibold text-black">
												Proposta Transferegov.br nº: 000001/2025
											</h2>

											<p className="indent-8">
												Na qualidade de dirigente máximo do proponente (outra
												autoridade, por delegação de competência), complemento a
												justificativa do projeto estruturado no âmbito da
												Proposta Transferegov.br acima identificada nos
												seguintes termos:
											</p>
										</div>

										<div className="border border-black mt-8">
											<div>
												{document.fields.map((field) => (
													<div key={field.id}>
														<div
															className={`text-black p-2 border-y border-black
															${field.isTitle && "border-y-0"}
															${!field.parentId && "font-semibold"}
															${field.value && field.value !== "" && "border-b-0"}`}
														>
															{field.section}. {field.name}
														</div>

														{field.value && field.value !== "" && (
															<div className="text-sm px-3 pb-2 text-zinc-600">
																{field.value as string}
															</div>
														)}
													</div>
												))}
											</div>
										</div>

										<div className="w-full !mt-12 flex justify-center">
											<span>
												TERESINA-PI,{" "}
												{formatDateToBrazilian(new Date().toISOString())}
											</span>
										</div>

										<div className="w-full !mt-12 flex justify-center">
											<strong>Apoiam e Subscrevem este projeto: </strong>
										</div>
									</div>
								</div>
							)}

							{document.name ===
								"Sustentabilidade e Localização de Bens do Projeto" && (
								<div
									className="w-full bg-white shadow-lg rounded-none"
									style={{
										width: "210mm",
										minHeight: "290mm",
										margin: "0 auto",
										aspectRatio: "1/1.414",
									}}
								>
									<div className="p-8 space-y-6">
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
											<h1 className="text-xl font-bold text-black">
												{document.name}
											</h1>
										</div>

										<div className="text-sm text-black leading-relaxed text-justify">
											<h2 className="text-base font-semibold text-black">
												Proposta Transferegov.br nº: 000001/2025
											</h2>
										</div>

										<div className="mt-8">
											<div>
												{document.fields.map((field) => (
													<div key={field.id}>
														<div
															className={`text-black py-2
																${!field.parentId && "font-semibold"}
																${field.parentId && "pl-4"}`}
														>
															{field.section}. {field.name}
														</div>

														{field.value && field.value !== "" && (
															<div className="text-sm pb-2 pl-4 text-zinc-600">
																{field.value as string}
															</div>
														)}
													</div>
												))}
											</div>
										</div>
									</div>
								</div>
							)}

							{document.name === "Declaração de Contrapartida" && (
								<div
									className="w-full bg-white shadow-lg rounded-none"
									style={{
										width: "210mm",
										minHeight: "290mm",
										margin: "0 auto",
										aspectRatio: "1/1.414",
									}}
								>
									<div className="p-8 space-y-6">
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
											<h1 className="text-xl font-bold text-black">
												{document.name}
											</h1>
										</div>

										<div className="text-sm text-black leading-relaxed text-justify">
											<h2 className="text-base font-semibold text-black">
												Proposta Transferegov.br nº: 000001/2025
											</h2>

											<p className="indent-8 block mt-4">
												<strong>DECLARO</strong>, perante a Secretaria de Gestão
												e Ensino em Segurança Pública, em conformidade com a lei
												e sob suas penas, que há dotação orçamentária suficiente
												para a cobertura da despesa que se pretende realizar a
												título de contrapartida no âmbito da Proposta acima
												identificada, em conformidade com rubricas e valores
												abaixo, e que os recursos a serem transferidos pelo
												Governo Federal, à conta do convênio, serão incluídos no
												orçamento do proponente.
											</p>
										</div>

										<div className="mt-8">
											<div>
												{document.fields.map((field) => (
													<div key={field.id}>
														<div className={`text-black p-2`}>
															{field.name}:{" "}
															{Array.isArray(field.value)
																? field.value
																		.map((item) => item.name)
																		.join(", ")
																: field.value &&
																	field.value !== "" &&
																	field.value}
														</div>
													</div>
												))}
											</div>
										</div>

										<div className="w-full !mt-12 flex justify-center">
											<span>
												TERESINA-PI,{" "}
												{formatDateToBrazilian(new Date().toISOString())}
											</span>
										</div>
									</div>
								</div>
							)}

							{document.name === "Termo de Referência" && (
								<div
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
												{document.name}
											</h1>
										</div>

										<div className="my-8 space-y-4">
											{document.fields.map((field) => {
												if (
													field.name !==
													"Identificação e assinatura do responsável"
												) {
													return (
														<div
															key={field.id}
															className="page-break-inside-avoid"
														>
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
																			value={
																				field.value as unknown as TableValue
																			}
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
												TERESINA-PI,{" "}
												{formatDateToBrazilian(new Date().toISOString())}
											</span>
										</div>
									</div>
								</div>
							)}
						</div>
					))}
				</div>
			</div>
		</>
	);
}
