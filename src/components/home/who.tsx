import { ReactNode } from "react";

interface FeatureProps {
	title: string;
	text: string;
	children: ReactNode;
}

export function Who({ title, text, children }: FeatureProps) {
	return (
		<div
			className="p-8 flex flex-col gap-4 rounded-lg text-left w-[380px] h-[300px]
		hover:bg-muted/30 transition-colors duration-300"
		>
			{children}

			<div className="flex items-center gap-2">
				<strong className="text-lg">{title}</strong>
			</div>

			<p className="text-muted-foreground">{text}</p>
		</div>
	);
}
