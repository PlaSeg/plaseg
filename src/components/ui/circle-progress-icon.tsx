import { CircleCheckBig } from "lucide-react";
import { cn } from "@/lib/utils";

export function CircleProgressIcon({
	percentage = 0,
	size = 24,
	className,
}: {
	percentage?: number;
	size?: number;
	className?: string;
}) {
	const normalizedPercentage = Math.max(0, Math.min(100, percentage));

	if (normalizedPercentage === 100) {
		return <CircleCheckBig className="text-primary" size={size} />;
	}

	const radius = 10;
	const strokeWidth = 2;
	const center = 12;
	const circumference = 2 * Math.PI * radius;
	const strokeDashoffset =
		circumference - (normalizedPercentage / 100) * circumference;

	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			className={cn("transform -rotate-90", className)}
			aria-label={
				locale === "pt"
					? `Ícone de progresso: ${normalizedPercentage}%`
					: `Progress icon: ${normalizedPercentage}%`
			}
		>
			<title>Progresso: {normalizedPercentage}%</title>
			{/* Círculo de fundo (slate) */}
			<circle
				cx={center}
				cy={center}
				r={radius}
				stroke="currentColor"
				strokeWidth={strokeWidth}
				fill="none"
				className="text-slate-300"
			/>
			{/* Círculo de progresso (azul) */}
			<circle
				cx={center}
				cy={center}
				r={radius}
				stroke="currentColor"
				strokeWidth={strokeWidth}
				fill="none"
				strokeDasharray={circumference}
				strokeDashoffset={strokeDashoffset}
				strokeLinecap="round"
				className="text-blue-500 transition-all duration-300 ease-in-out"
			/>
		</svg>
	);
}
