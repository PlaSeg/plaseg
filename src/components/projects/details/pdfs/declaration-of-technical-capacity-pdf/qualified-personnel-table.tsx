import { Text, View } from "@react-pdf/renderer";
import { createTw } from "react-pdf-tailwind";

const tw = createTw({
	theme: {
		fontFamily: {
			default: ["Arial"],
		},
	},
});

export interface QualifiedPersonnelItem {
	professional: string;
	sector: string;
	education: string;
	experience_time: string;
	public_administration_link: string;
	document?: string;
	responsible?: string;
}

export interface QualifiedPersonnelTableValue {
	professionals: QualifiedPersonnelItem[];
	summary_by_sector?: Record<string, number>;
	summary_by_link?: Record<string, number>;
	total_professionals?: number;
}

interface QualifiedPersonnelTableProps {
	value: QualifiedPersonnelTableValue;
}

interface LegacyQualifiedPersonnelItem {
	profissional: string;
	setor: string;
	formacao: string;
	tempo_experiencia: string;
	vinculo_administracao_publica: string;
	documento?: string;
	responsavel?: string;
}

interface LegacyQualifiedPersonnelTableValue {
	profissionais: LegacyQualifiedPersonnelItem[];
	resumo_por_setor?: Record<string, number>;
	resumo_por_vinculo?: Record<string, number>;
	total_profissionais?: number;
}

function transformLegacyData(data: any): QualifiedPersonnelTableValue {
	if (data?.professionals) {
		return data as QualifiedPersonnelTableValue;
	}

	const legacyData = data as LegacyQualifiedPersonnelTableValue;
	return {
		professionals: (legacyData?.profissionais || []).map((item) => ({
			professional: item.profissional,
			sector: item.setor,
			education: item.formacao,
			experience_time: item.tempo_experiencia,
			public_administration_link: item.vinculo_administracao_publica,
			document: item.documento,
			responsible: item.responsavel,
		})),
		summary_by_sector: legacyData?.resumo_por_setor,
		summary_by_link: legacyData?.resumo_por_vinculo,
		total_professionals: legacyData?.total_profissionais,
	};
}

export function QualifiedPersonnelTable({
	value,
}: QualifiedPersonnelTableProps) {
	const transformedData = transformLegacyData(value);
	const professionals = transformedData?.professionals || [];

	return (
		<View style={tw("mb-4")}>
			<View style={tw("w-full border-[1px] border-black")}>
				<View style={tw("flex-row border-b-[1px] border-black bg-gray-100")}>
					<View
						style={tw(
							"border-[1px] border-black border-t-0 border-b-0 border-r-0 border-l-0 px-2 py-1 flex-1"
						)}
					>
						<Text style={tw("text-center font-bold text-xs")}>
							Profissional
						</Text>
					</View>
					<View
						style={tw(
							"border-[1px] border-black border-t-0 border-b-0 border-r-0 px-2 py-1 w-[80px]"
						)}
					>
						<Text style={tw("text-center font-bold text-xs")}>Setor</Text>
					</View>
					<View
						style={tw(
							"border-[1px] border-black border-t-0 border-b-0 border-r-0 px-2 py-1 w-[120px]"
						)}
					>
						<Text style={tw("text-center font-bold text-xs")}>Formação</Text>
					</View>
					<View
						style={tw(
							"border-[1px] border-black border-t-0 border-b-0 border-r-0 px-2 py-1 w-[80px]"
						)}
					>
						<Text style={tw("text-center font-bold text-xs")}>
							Tempo de Experiência na Área
						</Text>
					</View>
					<View
						style={tw(
							"border-[1px] border-black border-t-0 border-b-0 border-r-0 px-2 py-1 w-[100px]"
						)}
					>
						<Text style={tw("text-center font-bold text-xs")}>
							Vínculo na Administração Pública
						</Text>
					</View>
				</View>

				{professionals.map((item, rowIndex) => (
					<View key={`${item.professional}-${rowIndex}`} style={tw("flex-row")}>
						<View
							style={tw(
								`border-[1px] border-black px-2 py-1 flex-1 border-b-0 border-r-0 ${rowIndex === 0 ? "border-t-0" : ""} border-l-0`
							)}
						>
							<Text style={tw("text-xs")}>{item.professional}</Text>
						</View>
						<View
							style={tw(
								`border-[1px] border-black px-2 py-1 w-[80px] border-b-0 border-r-0 ${rowIndex === 0 ? "border-t-0" : ""}`
							)}
						>
							<Text style={tw("text-center text-xs")}>{item.sector}</Text>
						</View>
						<View
							style={tw(
								`border-[1px] border-black px-2 py-1 w-[120px] border-b-0 border-r-0 ${rowIndex === 0 ? "border-t-0" : ""}`
							)}
						>
							<Text style={tw("text-xs")}>{item.education}</Text>
						</View>
						<View
							style={tw(
								`border-[1px] border-black px-2 py-1 w-[80px] border-b-0 border-r-0 ${rowIndex === 0 ? "border-t-0" : ""}`
							)}
						>
							<Text style={tw("text-center text-xs")}>
								{item.experience_time}
							</Text>
						</View>
						<View
							style={tw(
								`border-[1px] border-black px-2 py-1 w-[100px] border-b-0 border-r-0 ${rowIndex === 0 ? "border-t-0" : ""}`
							)}
						>
							<Text style={tw("text-center text-xs")}>
								{item.public_administration_link}
							</Text>
						</View>
					</View>
				))}
			</View>
		</View>
	);
}
