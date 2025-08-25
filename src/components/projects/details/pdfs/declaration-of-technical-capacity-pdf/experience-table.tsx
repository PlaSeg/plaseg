import { Text, View } from "@react-pdf/renderer";
import { createTw } from "react-pdf-tailwind";

const tw = createTw({
	theme: {
		fontFamily: {
			default: ["Arial"],
		},
	},
});

export interface ExperienceItem {
	term: string;
	object: string;
	superior_organization: string;
	status: string;
}

export interface ExperienceTableValue {
	projects: ExperienceItem[];
	summary?: {
		approved_projects: number;
		completed_projects: number;
		projects_in_execution: number;
	};
	total_projects?: number;
}

interface ExperienceTableProps {
	value: ExperienceTableValue;
}

interface LegacyExperienceItem {
	termo: string;
	objeto: string;
	orgaoSuperior: string;
	situacao: string;
}

interface LegacyExperienceTableValue {
	projetos: LegacyExperienceItem[];
	resumo?: {
		projetos_aprovados: number;
		projetos_concluidos: number;
		projetos_em_execucao: number;
	};
	total_projetos?: number;
}

function transformLegacyData(data: any): ExperienceTableValue {
	if (data?.projects) {
		return data as ExperienceTableValue;
	}

	const legacyData = data as LegacyExperienceTableValue;
	return {
		projects: (legacyData?.projetos || []).map((item) => ({
			term: item.termo,
			object: item.objeto,
			superior_organization: item.orgaoSuperior,
			status: item.situacao,
		})),
		summary: legacyData?.resumo
			? {
					approved_projects: legacyData.resumo.projetos_aprovados,
					completed_projects: legacyData.resumo.projetos_concluidos,
					projects_in_execution: legacyData.resumo.projetos_em_execucao,
				}
			: undefined,
		total_projects: legacyData?.total_projetos,
	};
}

export function ExperienceTable({ value }: ExperienceTableProps) {
	const transformedData = transformLegacyData(value);
	const projects = transformedData?.projects || [];

	return (
		<View style={tw("mb-4")}>
			<View style={tw("w-full border-[1px] border-black")}>
				<View style={tw("flex-row border-b-[1px] border-black bg-gray-100")}>
					<View
						style={tw(
							"border-[1px] border-black border-t-0 border-b-0 border-r-0 border-l-0 px-2 py-1 w-[80px]"
						)}
					>
						<Text style={tw("text-center font-bold text-xs")}>TERMO</Text>
					</View>

					<View
						style={tw(
							"border-[1px] border-black border-t-0 border-b-0 border-r-0 px-2 py-1 flex-1"
						)}
					>
						<Text style={tw("text-center font-bold text-xs")}>OBJETO</Text>
					</View>
					<View
						style={tw(
							"border-[1px] border-black border-t-0 border-b-0 border-r-0 px-2 py-1 w-[120px]"
						)}
					>
						<Text style={tw("text-center font-bold text-xs")}>
							ÓRGÃO SUPERIOR
						</Text>
					</View>
					<View
						style={tw(
							"border-[1px] border-black border-t-0 border-b-0 border-r-0 px-2 py-1 w-[100px]"
						)}
					>
						<Text style={tw("text-center font-bold text-xs")}>SITUAÇÃO</Text>
					</View>
				</View>

				{projects.map((item, rowIndex) => (
					<View key={`${item.term}-${rowIndex}`} style={tw("flex-row")}>
						<View
							style={tw(
								`border-[1px] border-black px-2 py-1 w-[80px] border-b-0 border-r-0 ${rowIndex === 0 ? "border-t-0" : ""} border-l-0`
							)}
						>
							<Text style={tw("text-center text-xs")}>{item.term}</Text>
						</View>
						<View
							style={tw(
								`border-[1px] border-black px-2 py-1 flex-1 border-b-0 border-r-0 ${rowIndex === 0 ? "border-t-0" : ""}`
							)}
						>
							<Text style={tw("text-xs")}>{item.object}</Text>
						</View>
						<View
							style={tw(
								`border-[1px] border-black px-2 py-1 w-[120px] border-b-0 border-r-0 ${rowIndex === 0 ? "border-t-0" : ""}`
							)}
						>
							<Text style={tw("text-center text-xs")}>
								{item.superior_organization}
							</Text>
						</View>
						<View
							style={tw(
								`border-[1px] border-black px-2 py-1 w-[100px] border-b-0 border-r-0 ${rowIndex === 0 ? "border-t-0" : ""}`
							)}
						>
							<Text style={tw("text-center text-xs")}>{item.status}</Text>
						</View>
					</View>
				))}
			</View>
		</View>
	);
}
