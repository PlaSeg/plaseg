import { Button } from "@/components/ui/button";

interface CardProps {
	title: string;
	responsible: string;
	code: string;
	objectives: string;
	submission: string;
	minValue: string;
	maxValue: string;
}

export function Card(props: CardProps) {
	return (
		<div
			className="flex w-full p-6 rounded-lg justify-between border border-muted	shadow-sm"
		>
			<div className="flex flex-col gap-6">
				<div className="flex flex-col">
					<strong className="text-xl">{props.title}</strong>
					<span className="text-base text-blue-500">{props.responsible}</span>
					<span className="text-xs text-gray-500 ">Código:{props.code}</span>
				</div>

				<div className="flex flex-col gap-8">
					<span>Objetivos: {props.objectives}</span>
				</div>
			</div>

			<div className="flex flex-col gap-4 w-[300px]">
				<div className="flex flex-col">
					<span className="text-sm">Prazo para submissão: </span>
					<strong>{props.submission}</strong>
				</div>

				<div className="flex flex-col">
					<span className="text-sm">Valor mínimo:</span>
					<strong>{props.minValue}</strong>
				</div>

				<div className="flex flex-col">
					<span className="text-sm">Valor máximo</span>
					<strong>{props.maxValue}</strong>
				</div>

				<Button>Participar</Button>
			</div>
		</div>
	);
}
