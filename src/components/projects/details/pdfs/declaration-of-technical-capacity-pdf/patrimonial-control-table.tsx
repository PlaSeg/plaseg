import { Text, View } from "@react-pdf/renderer";
import { createTw } from "react-pdf-tailwind";

const tw = createTw({
	theme: {
		fontFamily: {
			default: ["Arial"],
		},
	},
});

export interface PatrimonialControlItem {
	description: string;
	system: string;
	observations?: string;
}

export interface PatrimonialControlTableValue {
	items: PatrimonialControlItem[];
}

interface PatrimonialControlTableProps {
	value: PatrimonialControlTableValue;
}

// Legacy Portuguese interface for backward compatibility
interface LegacyPatrimonialControlItem {
	descricao: string;
	sistema: string;
	observacoes?: string;
}

interface LegacyPatrimonialControlTableValue {
	items: LegacyPatrimonialControlItem[];
}

// Transform legacy Portuguese data to English format
function transformLegacyData(data: any): PatrimonialControlTableValue {
	// Check if data is already in English format
	if (data?.items && data.items[0]?.description !== undefined) {
		return data as PatrimonialControlTableValue;
	}

	// Transform Portuguese data to English
	const legacyData = data as LegacyPatrimonialControlTableValue;
	return {
		items: (legacyData?.items || []).map((item) => ({
			description: item.descricao,
			system: item.sistema,
			observations: item.observacoes,
		})),
	};
}

export function PatrimonialControlTable({
	value,
}: PatrimonialControlTableProps) {
	const transformedData = transformLegacyData(value);
	const items = transformedData?.items || [];

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
							System Description
						</Text>
					</View>
					<View
						style={tw(
							"border-[1px] border-black border-t-0 border-b-0 border-r-0 px-2 py-1 w-[120px]"
						)}
					>
						<Text style={tw("text-center font-bold text-xs")}>System Type</Text>
					</View>
					<View
						style={tw(
							"border-[1px] border-black border-t-0 border-b-0 border-r-0 px-2 py-1 w-[150px]"
						)}
					>
						<Text style={tw("text-center font-bold text-xs")}>
							Observations
						</Text>
					</View>
				</View>

				{items.map((item, rowIndex) => (
					<View key={`${item.system}-${rowIndex}`} style={tw("flex-row")}>
						<View
							style={tw(
								`border-[1px] border-black px-2 py-1 flex-1 border-b-0 border-r-0 ${rowIndex === 0 ? "border-t-0" : ""} border-l-0`
							)}
						>
							<Text style={tw("text-xs")}>{item.description}</Text>
						</View>
						<View
							style={tw(
								`border-[1px] border-black px-2 py-1 w-[120px] border-b-0 border-r-0 ${rowIndex === 0 ? "border-t-0" : ""}`
							)}
						>
							<Text style={tw("text-center text-xs")}>{item.system}</Text>
						</View>
						<View
							style={tw(
								`border-[1px] border-black px-2 py-1 w-[150px] border-b-0 border-r-0 ${rowIndex === 0 ? "border-t-0" : ""}`
							)}
						>
							<Text style={tw("text-xs")}>{item.observations || "-"}</Text>
						</View>
					</View>
				))}
			</View>
		</View>
	);
}
