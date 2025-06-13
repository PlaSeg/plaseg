import { formatCurrency } from "@/utils/format-currency";
import { DollarSign } from "lucide-react";

interface ProjectValueProps {
	title: string;
	value: number;
}

export function ProjectValue({ title, value }: ProjectValueProps) {
	return (
		<div className="flex flex-col gap-2">
			<span className="text-sm text-muted-foreground">{title}</span>

			<div className="flex items-center gap-2">
				<div
					className="w-10 h-10 border-2 border-slate-300 rounded-full flex
							items-center justify-center"
				>
					<DollarSign size={18} />
				</div>

				<span className="font-medium">
					{value && formatCurrency(value)}

					{!value && "Indefinito"}
				</span>
			</div>
		</div>
	);
}
