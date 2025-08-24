import { FileText, ExternalLink } from "lucide-react";
import { maintenanceContract } from "@/@types/municipality/municipality";

interface MaintenanceContractsSectionProps {
	contracts: maintenanceContract[];
}

export function MaintenanceContractsSection({
	contracts,
}: MaintenanceContractsSectionProps) {
	return (
		<div className="bg-white border border-gray-100 p-6 rounded-lg">
			<h3 className="text-lg font-medium mb-6 flex items-center gap-3 text-gray-900">
				<FileText className="h-5 w-5 text-gray-600" />
				Contratos
			</h3>

			<div className="space-y-4">
				{contracts.map((contract) => (
					<div className="border-l-2 border-gray-200 pl-4">
						<h4 className="font-medium text-gray-900">
							{contract.description}
						</h4>

						<div className="flex items-center justify-between mt-3">
							<a
								href={contract.attachment}
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-600 hover:text-blue-700 text-sm flex items-center gap-1"
							>
								Ver contrato
								<ExternalLink className="h-3 w-3" />
							</a>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
