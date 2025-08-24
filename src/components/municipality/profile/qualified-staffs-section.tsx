import { Users, ChevronRight, ExternalLink } from "lucide-react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { qualifiedStaff } from "@/@types/municipality/municipality";

interface QualifiedStaffSectionProps {
	staffMembers: qualifiedStaff[];
}

export function QualifiedStaffSection({
	staffMembers,
}: QualifiedStaffSectionProps) {
	return (
		<div className="bg-white border border-gray-100 p-6 rounded-lg">
			<h3 className="text-lg font-medium mb-6 flex items-center gap-3 text-gray-900">
				<Users className="h-5 w-5 text-gray-600" />
				Equipe Qualificada
			</h3>
			<div className="space-y-3">
				{staffMembers.map((staff) => (
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<button className="w-full p-4 text-left hover:bg-gray-50 transition-colors border border-gray-100 rounded-lg">
								<div className="flex items-center justify-between">
									<div className="flex items-center gap-3">
										<h4 className="font-medium text-gray-900">{staff.name}</h4>
									</div>
									<div className="flex items-center gap-3">
										<span className="text-sm text-gray-500">
											{staff.sector}
										</span>
										<ChevronRight className="h-4 w-4 text-gray-400" />
									</div>
								</div>
							</button>
						</DropdownMenuTrigger>
						<DropdownMenuContent className="w-[--radix-dropdown-menu-trigger-width]">
							<div className="px-4 py-2">
								<div className="grid grid-cols-2 gap-4 text-sm">
									<div>
										<p className="text-gray-600 mb-1">Formação</p>
										<p className="text-gray-900">{staff.education}</p>
									</div>
									<div>
										<p className="text-gray-600 mb-1">Experiência</p>
										<p className="text-gray-900">{staff.experience}</p>
									</div>
									<div>
										<p className="text-gray-600 mb-1">Vínculo</p>
										<p className="text-gray-900">{staff.employmentType}</p>
									</div>

									<div>
										<p className="text-gray-600 mb-1">É responsável</p>
										<p className="text-gray-900">
											{staff.isResponsible ? "Sim" : "Não"}
										</p>
									</div>
									<div>
										<a
											href={staff.document}
											target="_blank"
											rel="noopener noreferrer"
											className="text-blue-600 hover:text-blue-700 flex items-center gap-1"
										>
											Ver qualificações
											<ExternalLink className="h-3 w-3" />
										</a>
									</div>
								</div>
							</div>
						</DropdownMenuContent>
					</DropdownMenu>
				))}
			</div>
		</div>
	);
}
