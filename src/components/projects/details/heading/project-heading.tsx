import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Copy, Download } from "lucide-react";
import ReactDOMServer from "react-dom/server";
import type { Project } from "@/@schemas/project";
import { Button } from "@/components/ui/button";
import { CounterpartPdf } from "../pdfs/counterpart-pdf";
import { JustificationPdf } from "../pdfs/justification-pdf";
import { SustentabilityPdf } from "../pdfs/sustainability-pdf";
import { ProjectProgress } from "./project-progress";
import { ProjectValue } from "./project-value";

interface ProjectHeadingProps {
	project: Project;
}

export function ProjectHeading({ project }: ProjectHeadingProps) {
	const requestedValue = project.requestedItems.reduce(
		(acc, item) => acc + item.baseProduct.unitValue * item.quantity,
		0
	);

	const counterpartValue = () => {
		if (project.opportunity.counterpartPercentage === 0) return 0;

		return (
			(requestedValue * (project.opportunity.counterpartPercentage ?? 0)) / 100
		);
	};

	const totalValue = () => {
		return requestedValue + counterpartValue();
	};

	async function handleExportAllPDFs() {
		const docNames = [
			"Justificativa Completa do Projeto",
			"Sustentabilidade e Localização de Bens do Projeto",
			"Declaração de Contrapartida",
		];

		const docs = docNames.map((name) =>
			project.documents.find((d) => d.name === name)
		);

		if (docs.some((d) => !d)) {
			alert("Um ou mais documentos necessários não foram encontrados.");
			return;
		}

		const pdf = new jsPDF({ unit: "mm", format: "a4" });

		const components = [
			<JustificationPdf document={docs[0]!} hideButton={true} key="j" />,
			<SustentabilityPdf document={docs[1]!} hideButton={true} key="s" />,
			<CounterpartPdf document={docs[2]!} hideButton={true} key="c" />,
		];

		for (let i = 0; i < components.length; i++) {
			const htmlString = ReactDOMServer.renderToString(components[i]);
			const tempDiv = document.createElement("div");
			tempDiv.innerHTML = htmlString;
			tempDiv.style.position = "fixed";
			tempDiv.style.left = "-9999px";
			tempDiv.style.width = "210mm";
			tempDiv.style.height = "297mm";
			document.body.appendChild(tempDiv);

			const canvas = await html2canvas(tempDiv, { scale: 2 });
			const imgData = canvas.toDataURL("image/jpeg", 1.0);

			if (i > 0) pdf.addPage();
			pdf.addImage(imgData, "JPEG", 0, 0, 210, 297);

			document.body.removeChild(tempDiv);
		}

		pdf.save("Projeto_Completo.pdf");
	}
	function projectProgress() {
		if (project.progress === 33.33) return 33;
		if (project.progress === 66.66) return 66;
		if (project.progress === 100) return 100;
		return 0;
	}

	return (
		<div className="w-full py-6">
			<div className="flex justify-between">
				<div className="flex items-center gap-10">
					<ProjectProgress percentage={projectProgress()} />

					<ProjectValue
						title="Valor Base"
						tooltipText="Uma estimativa do valor do projeto"
						value={project.baseValue ?? 0}
					/>

					<ProjectValue
						title="Valor Solicitado"
						tooltipText="Soma dos valores totais dos itens solicitados
						(não pode ultrapassar o valor base do projeto)"
						value={requestedValue}
					/>

					<ProjectValue
						title="Valor da Contrapartida"
						tooltipText="% da contrapartida calculado em cima do valor solicitado"
						value={counterpartValue()}
					/>

					<ProjectValue
						title="Valor Total"
						tooltipText="Valor total do projeto, somando o valor soloicitado e o valor de contrapartida"
						value={totalValue()}
					/>
				</div>

				<div className="flex flex-col gap-2">
					<span className="text-muted-foreground text-sm">Ações</span>

					<div className="flex items-center gap-4">
						<Button variant="outline" disabled>
							<Copy />
							Duplicar
						</Button>

						<Button
							className="bg-slate-950 hover:bg-slate-950/90"
							onClick={handleExportAllPDFs}
						>
							<Download />
							Exportar
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
