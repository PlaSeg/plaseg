import { Eye, LetterText, SquarePen, Trash } from "lucide-react";
import { Button } from "../ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { useMemo } from "react";

interface TableActionButtonProps {
	type: "edit" | "delete" | "view" | "summary";
}

export function TableActionButton({ type }: TableActionButtonProps) {
	const label = useMemo(() => {
		if (type === "edit") return "Editar";
		if (type === "delete") return "Excluir";
		if (type === "view") return "Ver Detalhes";
		if (type === "summary") return "Gerar Resumo";
	}, [type]);

	return (
		<Tooltip>
			<TooltipTrigger asChild>
				<Button variant="outline" size="icon">
					{type === "edit" && <SquarePen />}
					{type === "delete" && <Trash />}
					{type === "view" && <Eye />}
					{type === "summary" && <LetterText />}

					<span className="sr-only">{label}</span>
				</Button>
			</TooltipTrigger>

			<TooltipContent>{label}</TooltipContent>
		</Tooltip>
	);
}
