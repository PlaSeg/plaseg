import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";
import { Eye, Calendar, FileText, Tag } from "lucide-react";
import { useGetOpportunityById } from "@/hooks/opportunities/use-get-opportunity-by-id";
import { formatDate } from "@/utils/format-date";
import { formatCurrency } from "@/utils/format-currency";

interface OpportunityDetailSheetProps {
	className?: string;
	opportunityId: string;
}

export function OpportunityDetailSheet({
	className,
	opportunityId,
}: OpportunityDetailSheetProps) {
	const [isOpportunityDetailSheetOpen, setIsOpportunityDetailSheetOpen] =
		useState(false);

	const { opportunity: opportunityData } = useGetOpportunityById(opportunityId);

	return (
		<Sheet
			open={isOpportunityDetailSheetOpen}
			onOpenChange={setIsOpportunityDetailSheetOpen}
		>
			<SheetTrigger asChild>
				<Button className={className} variant="outline" size="icon">
					<Eye className="h-4 w-4" />
				</Button>
			</SheetTrigger>

			<SheetContent className="w-full min-w-[1000px] overflow-y-auto">
				{opportunityData && (
					<div className="flex flex-col gap-6">
						<SheetHeader className="space-y-3">
							<div
								className="text-xl font-bold leading-tight"
								aria-hidden="true"
							>
								{opportunityData.title}
							</div>
							<SheetDescription className="flex items-center gap-2 text-base">
								{opportunityData?.responsibleAgency}
							</SheetDescription>
						</SheetHeader>

						<div className="space-y-6">
							<div className="bg-gray-50 rounded-lg p-4">
								<h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
									<Calendar className="h-5 w-5" />
									Vigência
								</h3>
								<div className="grid grid-cols-2 gap-4">
									<div className="space-y-1">
										<p className="text-sm font-medium text-gray-600">
											Data de Início
										</p>
										<p className="text-base">
											{formatDate(opportunityData?.initialDeadline)}
										</p>
									</div>
									<div className="space-y-1">
										<p className="text-sm font-medium text-gray-600">
											Data de Término
										</p>
										<p className="text-base">
											{formatDate(opportunityData?.finalDeadline)}
										</p>
									</div>
								</div>
							</div>

							<div className="bg-gray-50 rounded-lg p-4">
								<h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
									<Tag className="h-5 w-5" />
									Informações Gerais
								</h3>
								<div className="grid grid-cols-2 gap-4">
									<div className="space-y-1">
										<p className="text-sm font-medium text-gray-600">
											Tipo de Oportunidade
										</p>
										<p className="text-base">{opportunityData?.type}</p>
									</div>
									<div className="space-y-1">
										<p className="text-sm font-medium text-gray-600 flex items-center gap-1">
											Valor de Contrapartida
										</p>
										<p className="text-base">
											{opportunityData?.counterpartPercentage}%
										</p>
									</div>
								</div>
								<div className="grid grid-cols-2 gap-4 mt-4">
									<div className="space-y-1">
										<p className="text-sm font-medium text-gray-600">
											Valor Disponível
										</p>
										<p className="text-base">
											{formatCurrency(opportunityData?.availableValue)}
										</p>
									</div>

									<div className="space-y-1">
										<p className="text-sm font-medium text-gray-600">
											Valor Mínimo de Financiamento
										</p>
										<p className="text-base">
											{formatCurrency(opportunityData?.minValue)}
										</p>
									</div>

									<div className="space-y-1">
										<p className="text-sm font-medium text-gray-600">
											Valor Máximo de Financiamento
										</p>
										<p className="text-base">
											{formatCurrency(opportunityData?.maxValue)}
										</p>
									</div>
								</div>
							</div>

							{opportunityData?.description && (
								<div className="bg-gray-50 rounded-lg p-4">
									<h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
										<FileText className="h-5 w-5" />
										Descrição
									</h3>
									<div>
										<p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
											{opportunityData.description}
										</p>
									</div>
								</div>
							)}

							{opportunityData?.attachments.length > 0 && (
								<div className="bg-gray-50 rounded-lg p-4">
									<h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
										Anexos
									</h3>
									<div className="space-y-2">
										{opportunityData?.attachments.map((attachment) => (
											<div
												key={attachment.id}
												className="flex items-center justify-between"
											>
												<span>{attachment.name}</span>
												<a
													href={attachment.model}
													target="_blank"
													rel="noopener noreferrer"
													className="text-black-600 hover:underline"
												>
													Abrir
												</a>
											</div>
										))}
									</div>
								</div>
							)}

							{opportunityData?.documents.length > 0 && (
								<div className="bg-gray-50 rounded-lg p-4">
									<h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
										Documentos
									</h3>
									<div className="space-y-2">
										{opportunityData?.documents.map((document) => (
											<div
												key={document.id}
												className="flex items-center justify-between"
											>
												<span>{document.name}</span>
												<a
													href={`/documents/${document.id}`}
													target="_blank"
													rel="noopener noreferrer"
													className="text-black-600 hover:underline"
												>
													Abrir
												</a>
											</div>
										))}
									</div>
								</div>
							)}
						</div>
					</div>
				)}
			</SheetContent>
		</Sheet>
	);
}
