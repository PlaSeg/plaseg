import { MapPin, Calendar, UserCheck } from "lucide-react";
import { formatDate } from "@/utils/format-date";

interface GeralInfoSectionProps {
	name: string;
	federativeUnit: string;
	unitType: string;
	createdAt: Date | string;
	guardCount: number;
	guardInitialDate: Date | string;
	trafficCount: number;
	trafficInitialDate: Date | string;
}

export function GeralInfoSection({
	name,
	federativeUnit,
	unitType,
	createdAt,
	guardCount,
	guardInitialDate,
	trafficCount,
	trafficInitialDate,
}: GeralInfoSectionProps) {
	return (
		<div className="max-w-7xl mx-auto px-6 py-2">
			<div className="mb-8 mt-4">
				<h1 className="text-3xl font-bold text-gray-900 mb-4 ">{name}</h1>
				<div className="flex flex-row items-center gap-4 text-gray-600">
					<div className="flex items-center gap-2 bg-white px-3 py-2 rounded-full shadow-sm border border-gray-100">
						<MapPin className="h-4 w-4 " />
						<span className="text-sm font-medium">
							{federativeUnit} • {unitType}
						</span>
					</div>
					<div className="flex items-center gap-2 bg-white px-3 py-2 rounded-full shadow-sm border border-gray-100">
						<Calendar className="h-4 w-4 " />
						<span className="text-sm font-medium">
							Criado em {formatDate(createdAt)}
						</span>
					</div>
				</div>
			</div>

			<div className="p-6 border-gray-300 bg-white ">
				<div className="flex items-center gap-2 mb-4">
					<UserCheck className="h-5 w-5  text-gray-600" />
					<h3 className="text-lg font-medium text-gray-900">
						Efetivos da Unidade
					</h3>
				</div>

				<div className="grid grid-cols-2 gap-6">
					<div className="border-l-2 border-gray-200 pl-4">
						<p className="text-base font-semibold text-gray-900 mb-1">
							Guardas Municipais
						</p>
						<p className="text-sm text-gray-600 mb-2">{guardCount}</p>
						<div className="flex items-center gap-1 text-sm text-gray-500">
							<Calendar className="h-3 w-3" />
							<span>Desde {formatDate(guardInitialDate)}</span>
						</div>
					</div>

					<div className="border-l-2 border-gray-200 pl-4">
						<p className="text-base font-semibold text-gray-900 mb-1">
							Agentes de Trânsito
						</p>
						<p className="text-sm text-gray-600 mb-2">{trafficCount}</p>
						<div className="flex items-center gap-1 text-sm text-gray-500">
							<Calendar className="h-3 w-3" />
							<span>Desde {formatDate(trafficInitialDate)}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
