import { Handshake } from "lucide-react";
import { projectPartnership } from "@/@types/municipality/municipality";

interface ProjectPartnershipSectionProps {
	projects: projectPartnership[];
}

export function ProjectPartnershipSection({
	projects,
}: ProjectPartnershipSectionProps) {
	return (
		<div className="bg-white border border-gray-100 p-6 rounded-lg">
			<h3 className="text-lg font-medium mb-6 flex items-center gap-3 text-gray-900">
				<Handshake className="h-5 w-5 text-gray-600" />
				Projetos e Parcerias
			</h3>
			<div className="space-y-4">
				{projects.map((project) => (
					<div className="border-l-2 border-gray-200 pl-4">
						<div className="flex items-start justify-between mb-2">
							<h4 className="font-medium text-gray-900 flex-1 pr-4">
								{project.objective}
							</h4>
							<span className="text-sm font-light">{project.status} </span>
						</div>
						<div className="grid grid-cols-2 gap-4 text-sm mt-3">
							<div>
								<p className="text-gray-600">Órgão Parceiro</p>
								<p className="text-gray-900">{project.agency}</p>
							</div>
							<div>
								<p className="text-gray-600">Termo</p>
								<p className="text-gray-900">{project.term}</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
