import html2pdf from "html2pdf.js";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { ProjectDocument } from "@/hooks/projects/use-get-project-document-by-id";
import { formatDateToBrazilian } from "@/utils/format-date";

interface CounterpartPDFProps {
	document: ProjectDocument;
	hideButton?: boolean;
}

export function CounterpartPDF({
	document: projectDocument,
	hideButton = false,
}: CounterpartPDFProps) {
	function handleDownloadPDF() {
		const element = document.querySelector("#pdf-content");

		html2pdf(element as HTMLElement);
	}

	return (
		<div className="min-h-screen py-8 max-w-4xl mx-auto flex flex-col gap-6">
			{!hideButton && (
				<Button
					variant="outline"
					className="max-w-max"
					onClick={handleDownloadPDF}
				>
					Baixar PDF
				</Button>
			)}

			<Card
				id="pdf-content"
				className="w-full bg-white shadow-lg rounded-none"
				style={{
					width: "210mm",
					height: "290mm",
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
								className="object-contain w-32 h-24 "
							/>
						</div>
					</div>

					<div className="text-center space-y-4">
						<h1 className="text-xl font-bold text-black">
							{projectDocument.name}
						</h1>
					</div>

					<div className="text-sm text-black leading-relaxed text-justify">
						<h2 className="text-base font-semibold text-black">
							Proposta Transferegov.br nº: 000001/2025
						</h2>

						<p className="indent-8 block mt-4">
							<strong>DECLARO</strong>, perante a Secretaria de Gestão e Ensino
							em Segurança Pública, em conformidade com a lei e sob suas penas,
							que há dotação orçamentária suficiente para a cobertura da despesa
							que se pretende realizar a título de contrapartida no âmbito da
							Proposta acima identificada, em conformidade com rubricas e
							valores abaixo, e que os recursos a serem transferidos pelo
							Governo Federal, à conta do convênio, serão incluídos no orçamento
							do proponente.
						</p>
					</div>

					<div className="mt-8">
						<div>
							{projectDocument.fields.map((field) => (
								<div key={field.id}>
									<div className={`text-black p-2`}>
										{field.name}:{" "}
										{Array.isArray(field.value)
											? field.value.map((item) => item.name).join(", ")
											: field.value && field.value !== "" && field.value}
									</div>
								</div>
							))}
						</div>
					</div>

					<div className="w-full !mt-12 flex justify-center">
						<span>
							TERESINA-PI, {formatDateToBrazilian(new Date().toISOString())}
						</span>
					</div>
				</div>
			</Card>
		</div>
	);
}
