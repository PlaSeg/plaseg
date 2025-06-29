import { Card } from "@/components/ui/card";
import { Document } from "@/@schemas/project";
import { nestFields } from "@/utils/nested-fields";
import { Button } from "@/components/ui/button";
import { renderFields } from "./render-fields";
import html2pdf from "html2pdf.js";

interface CounterpartPdfProps {
	document: Document;
}

export function CounterpartPdf({
	document: projectDocument,
}: CounterpartPdfProps) {
	const nestedFields = nestFields(projectDocument.fields);

	function handleDownloadPDF() {
		const element = document.querySelector("#pdf-content");

		html2pdf(element as HTMLElement);
	}

	return (
		<div className="min-h-screen py-8 max-w-4xl mx-auto flex flex-col gap-6">
			<Button
				variant="outline"
				className="max-w-max"
				onClick={handleDownloadPDF}
			>
				Baixar PDF
			</Button>

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
				<div className="p-8 flex flex-col gap-2">
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
							Declaração de Contrapartida
						</h1>
					</div>

					<div className="text-sm text-black leading-relaxed text-justify">
						<h2 className="text-base font-semibold text-black block mb-2">
							Proposta Transferegov.br nº: 000064/2023
						</h2>

						<p className="indent-8">
							<b>DECLARO</b>, perante a Secretaria de Gestão e Ensino em
							Segurança Pública, em conformidade com a lei e sob suas penas, que
							há dotação orçamentária suficiente para a cobertura da despesa que
							se pretende realizar a título de contrapartida no âmbito da
							Proposta acima identificada, em conformidade com rubricas e
							valores abaixo, e que os recursos a serem transferidos pelo
							Governo Federal, à conta do convênio, serão incluídos no orçamento
							do proponente.
						</p>
					</div>

					<div className="border border-black mt-8">
						{renderFields(nestedFields)}
					</div>

					<div className="my-12 text-center">
						TERESINA-PI,{" "}
						{new Date().toLocaleDateString("pt-BR", {
							day: "numeric",
							month: "long",
							year: "numeric",
						})}
						.
					</div>

					<div
						className="text-center mt-8 flex flex-col gap-2 border-t-[1.5px] max-w-max
					mx-auto py-2 border-black px-12"
					>
						<strong>JOSÉ PESSOAL LEAL</strong>
						<i>Prefeito Municipal</i>
					</div>
				</div>
			</Card>
		</div>
	);
}
