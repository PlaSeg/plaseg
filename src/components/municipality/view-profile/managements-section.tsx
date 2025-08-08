import { Crown, ChevronRight } from "lucide-react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { formatDate } from "@/utils/format-date";
import { formatDocument } from "@/utils/format-document";
import { management } from "@/@types/municipality/municipality";

interface ManagementsSectionProps {
	managements: management[];
}

export function ManagementsSection({ managements }: ManagementsSectionProps) {
	return (
		<div className="mt-8">
			<div className="bg-white border border-gray-100 p-6 rounded-lg">
				<div className="flex items-center justify-between mb-4 pb-2 ">
					<div className="flex items-center gap-2">
						<Crown className="w-5 h-5  text-gray-600" />
						<h3 className="text-lg font-medium">Gestão</h3>
					</div>
					{managements.length > 0 && (
						<div className="flex items-center gap-2 text-sm text-gray-600">
							<span>{formatDate(managements[0].initialDate)}</span>
							<span>-</span>
							<span>{formatDate(managements[0].endDate)}</span>
						</div>
					)}
				</div>
				{managements.map((management) => (
					<div>
						<div className="space-y-3 mt-4">
							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<button className="w-full p-4 text-left hover:bg-gray-50 transition-colors border border-gray-100 rounded-lg">
										<div className="flex items-center justify-between">
											<div className="flex items-center gap-3">
												<div>
													<h4 className="font-medium text-gray-900">
														Gestor Principal
													</h4>
													<p className="text-sm text-gray-600">
														{management.managerName}
													</p>
												</div>
											</div>
											<ChevronRight className="h-4 w-4 text-gray-400" />
										</div>
									</button>
								</DropdownMenuTrigger>
								<DropdownMenuContent className="w-[--radix-dropdown-menu-trigger-width]">
									<div className="px-4 py-2">
										<div className="grid grid-cols-2 gap-4 text-sm">
											<div>
												<p className="text-gray-600 mb-1">CPF</p>
												<p className="text-gray-900">
													{formatDocument(management.managerCpf)}
												</p>
											</div>
											<div>
												<p className="text-gray-600 mb-1">Email</p>
												<p className="text-gray-900">
													{management.managerEmail}
												</p>
											</div>
											<div>
												<p className="text-gray-600 mb-1">Telefone</p>
												<p className="text-gray-900">
													{management.managerPhone}
												</p>
											</div>
											<div>
												<p className="text-gray-600 mb-1">Endereço</p>
												<p className="text-gray-900">
													{management.managerAddress}
												</p>
											</div>
										</div>
									</div>
								</DropdownMenuContent>
							</DropdownMenu>

							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<button className="w-full p-4 text-left hover:bg-gray-50 transition-colors border border-gray-100 rounded-lg">
										<div className="flex items-center justify-between">
											<div className="flex items-center gap-3">
												<div>
													<h4 className="font-medium text-gray-900">
														Gestor Administrativo
													</h4>
													<p className="text-sm text-gray-600">
														{management.adminManagerName}
													</p>
												</div>
											</div>
											<ChevronRight className="h-4 w-4 text-gray-400" />
										</div>
									</button>
								</DropdownMenuTrigger>
								<DropdownMenuContent className="w-[--radix-dropdown-menu-trigger-width]">
									<div className="px-4 py-2">
										<div className="grid grid-cols-2 gap-4 text-sm">
											<div>
												<p className="text-gray-600 mb-1">CPF</p>
												<p className="text-gray-900">
													{formatDocument(management.adminManagerCpf)}
												</p>
											</div>
											<div>
												<p className="text-gray-600 mb-1">Email</p>
												<p className="text-gray-900">
													{management.adminManagerEmail}
												</p>
											</div>
											<div>
												<p className="text-gray-600 mb-1">Telefone</p>
												<p className="text-gray-900">
													{management.adminManagerPhone}
												</p>
											</div>
											<div>
												<p className="text-gray-600 mb-1">Endereço</p>
												<p className="text-gray-900">
													{management.adminManagerAddress}
												</p>
											</div>
										</div>
									</div>
								</DropdownMenuContent>
							</DropdownMenu>

							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<button className="w-full p-4 text-left hover:bg-gray-50 transition-colors border border-gray-100 rounded-lg">
										<div className="flex items-center justify-between">
											<div className="flex items-center gap-3">
												<div>
													<h4 className="font-medium text-gray-900">
														Responsável Legislação
													</h4>
													<p className="text-sm text-gray-600">
														{management.legislationName}
													</p>
												</div>
											</div>
											<ChevronRight className="h-4 w-4 text-gray-400" />
										</div>
									</button>
								</DropdownMenuTrigger>
								<DropdownMenuContent className="w-[--radix-dropdown-menu-trigger-width]">
									<div className="px-4 py-2">
										<div className="grid grid-cols-2 gap-4 text-sm">
											<div>
												<p className="text-gray-600 mb-1">CPF</p>
												<p className="text-gray-900">
													{formatDocument(management.legislationCpf)}
												</p>
											</div>
											<div>
												<p className="text-gray-600 mb-1">Email</p>
												<p className="text-gray-900">
													{management.legislationEmail}
												</p>
											</div>
											<div>
												<p className="text-gray-600 mb-1">Telefone</p>
												<p className="text-gray-900">
													{management.legislationPhone}
												</p>
											</div>
											<div>
												<p className="text-gray-600 mb-1">Endereço</p>
												<p className="text-gray-900">
													{management.legislationAddress}
												</p>
											</div>
										</div>
									</div>
								</DropdownMenuContent>
							</DropdownMenu>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
