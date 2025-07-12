import { Eye, LetterText, SquarePen, Trash } from "lucide-react";
import { useMemo } from "react";
import { Button } from "../ui/button";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "../ui/tooltip";

interface TableActionButtonProps {
	type: "edit" | "delete" | "view" | "summary";
	disabled?: boolean;
	withTooltip?: boolean;
}

export function TableActionButton({
	type,
	disabled,
	withTooltip = true,
}: TableActionButtonProps) {
	const label = useMemo(() => {
		if (type === "edit") return "Editar";
		if (type === "delete") return "Excluir";
		if (type === "view") return "Ver Detalhes";
		if (type === "summary") return "Gerar Resumo";
	}, [type]);

	const buttonContent = (
		<Button variant="outline" size="icon" disabled={disabled}>
			{type === "edit" && <SquarePen />}
			{type === "delete" && <Trash />}
			{type === "view" && <Eye />}
			{type === "summary" && <LetterText />}
			<span className="sr-only">{label}</span>
		</Button>
	);

	if (!withTooltip) {
		return buttonContent;
	}

	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger asChild>{buttonContent}</TooltipTrigger>
				<TooltipContent>{label}</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
}
