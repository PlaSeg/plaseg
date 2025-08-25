import { Text, View } from "@react-pdf/renderer";
import { createTw } from "react-pdf-tailwind";

const tw = createTw({
	theme: {
		fontFamily: {
			default: ["Arial"],
		},
	},
});

export interface ResponsibleDataItem {
	legislative_data?: {
		responsible_name: string;
		responsible_email: string;
		recipient_type: string;
	};
	general_information?: {
		unit_type: string;
		municipality_name: string;
		federative_unit: string;
	};
	technical_responsible?: {
		name: string;
		email: string;
		landline_phone: string;
		mobile_phone: string;
	};
	administrative_management_responsible?: {
		name: string;
		email: string;
		landline_phone: string;
		mobile_phone: string;
	};
}

export interface ResponsibleDataTableValue {
	value: ResponsibleDataItem;
}

interface ResponsibleDataTableProps {
	value: ResponsibleDataTableValue;
}

interface LegacyResponsibleDataItem {
	dados_legislativo?: {
		nome_responsavel: string;
		email_responsavel: string;
		tipo_destinatario: string;
	};
	informacoes_gerais?: {
		tipo_unidade: string;
		nome_municipio: string;
		unidade_federativa: string;
	};
	responsavel_tecnico?: {
		nome: string;
		email: string;
		telefone_fixo: string;
		telefone_celular: string;
	};
	responsavel_gestao_administrativa?: {
		nome: string;
		email: string;
		telefone_fixo: string;
		telefone_celular: string;
	};
}

interface LegacyResponsibleDataTableValue {
	value: LegacyResponsibleDataItem;
}

function transformLegacyData(data: any): ResponsibleDataTableValue {
	if (data?.value?.general_information !== undefined) {
		return data as ResponsibleDataTableValue;
	}

	const legacyData = data as LegacyResponsibleDataTableValue;
	const legacy = legacyData?.value || {};

	return {
		value: {
			legislative_data: legacy.dados_legislativo
				? {
						responsible_name: legacy.dados_legislativo.nome_responsavel,
						responsible_email: legacy.dados_legislativo.email_responsavel,
						recipient_type: legacy.dados_legislativo.tipo_destinatario,
					}
				: undefined,
			general_information: legacy.informacoes_gerais
				? {
						unit_type: legacy.informacoes_gerais.tipo_unidade,
						municipality_name: legacy.informacoes_gerais.nome_municipio,
						federative_unit: legacy.informacoes_gerais.unidade_federativa,
					}
				: undefined,
			technical_responsible: legacy.responsavel_tecnico
				? {
						name: legacy.responsavel_tecnico.nome,
						email: legacy.responsavel_tecnico.email,
						landline_phone: legacy.responsavel_tecnico.telefone_fixo,
						mobile_phone: legacy.responsavel_tecnico.telefone_celular,
					}
				: undefined,
			administrative_management_responsible:
				legacy.responsavel_gestao_administrativa
					? {
							name: legacy.responsavel_gestao_administrativa.nome,
							email: legacy.responsavel_gestao_administrativa.email,
							landline_phone:
								legacy.responsavel_gestao_administrativa.telefone_fixo,
							mobile_phone:
								legacy.responsavel_gestao_administrativa.telefone_celular,
						}
					: undefined,
		},
	};
}

export function ResponsibleDataTable({ value }: ResponsibleDataTableProps) {
	const transformedData = transformLegacyData(value);
	const data = transformedData?.value || {};

	const renderSectionHeader = (title: string, isFirst: boolean = false) => (
		<View style={tw("flex-row")}>
			<View
				style={tw(
					`px-2 py-1 w-full bg-gray-200 border-black text-center ${
						isFirst
							? "border-t border-l border-r border-b"
							: "border-l border-r border-b"
					}`
				)}
			>
				<Text style={tw("text-xs font-bold uppercase text-center")}>
					{title}
				</Text>
			</View>
		</View>
	);

	const renderDataRow = (
		label: string,
		value: string,
		isLast: boolean = false
	) => (
		<View style={tw("flex-row")}>
			<View
				style={tw(
					`px-2 py-1 w-[200px] bg-gray-100 border-black border-l border-r ${
						isLast ? "border-b" : "border-b"
					}`
				)}
			>
				<Text style={tw("text-xs font-bold")}>{label}</Text>
			</View>
			<View
				style={tw(
					`px-2 py-1 flex-1 border-black border-r ${isLast ? "border-b" : "border-b"}`
				)}
			>
				<Text style={tw("text-xs")}>{value}</Text>
			</View>
		</View>
	);

	return (
		<View style={tw("mb-4")}>
			<View>
				{data.general_information && (
					<>
						{renderSectionHeader("Informações Gerais", true)}
						{renderDataRow(
							"Tipo de Unidade",
							data.general_information.unit_type
						)}
						{renderDataRow(
							"Município",
							data.general_information.municipality_name
						)}
						{renderDataRow("Estado", data.general_information.federative_unit)}
					</>
				)}

				{data.administrative_management_responsible && (
					<>
						{renderSectionHeader("Responsável pela Gestão Administrativa")}
						{renderDataRow(
							"Nome",
							data.administrative_management_responsible.name
						)}
						{renderDataRow(
							"Email",
							data.administrative_management_responsible.email
						)}
						{renderDataRow(
							"Telefone Fixo",
							data.administrative_management_responsible.landline_phone
						)}
						{renderDataRow(
							"Telefone Celular",
							data.administrative_management_responsible.mobile_phone
						)}
					</>
				)}

				{data.technical_responsible && (
					<>
						{renderSectionHeader("Responsável Técnico")}
						{renderDataRow("Nome", data.technical_responsible.name)}
						{renderDataRow("Email", data.technical_responsible.email)}
						{renderDataRow(
							"Telefone Fixo",
							data.technical_responsible.landline_phone
						)}
						{renderDataRow(
							"Telefone Celular",
							data.technical_responsible.mobile_phone
						)}
					</>
				)}

				{data.legislative_data && (
					<>
						{renderSectionHeader("Dados Legislativos")}
						{renderDataRow("Nome", data.legislative_data.responsible_name)}
						{renderDataRow("Email", data.legislative_data.responsible_email)}
						{renderDataRow("Tipo", data.legislative_data.recipient_type)}
					</>
				)}
			</View>
		</View>
	);
}
