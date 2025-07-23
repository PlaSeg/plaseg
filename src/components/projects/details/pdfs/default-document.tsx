import html2pdf from "html2pdf.js";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { ProjectDocument } from "@/hooks/projects/use-get-project-document-by-id";

interface DefaultDocumentProps {
	document: ProjectDocument;
	hideButton?: boolean;
}

export function DefaultDocument({
	document: projectDocument,
	hideButton = false,
}: DefaultDocumentProps) {
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

						<p className="indent-8">
							Na qualidade de dirigente máximo do proponente (outra autoridade,
							por delegação de competência), complemento a justificativa do
							projeto estruturado no âmbito da Proposta Transferegov.br acima
							identificada nos seguintes termos:
						</p>
					</div>

					<div className="border border-black mt-8">
						<div>
							{projectDocument.fields.map((field) => (
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
											{field.value}
										</div>
									)}
								</div>
							))}
						</div>
					</div>
				</div>
			</Card>
		</div>
	);
}
