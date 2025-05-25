import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Brain, LoaderCircle } from "lucide-react";

interface ProjectSectionsAiDropdownMenuProps {
	isLoading: boolean;
	enhanceText: () => void;
}

export function ProjectSectionsAiDropdownMenu({
	isLoading,
	enhanceText,
}: ProjectSectionsAiDropdownMenuProps) {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline" size="icon">
					{isLoading && <LoaderCircle className="animate-spin" />}

					{!isLoading && <Brain />}
				</Button>
			</DropdownMenuTrigger>

			<DropdownMenuContent className="w-56">
				<DropdownMenuLabel>Pedir para a IA</DropdownMenuLabel>

				<DropdownMenuSeparator />

				<DropdownMenuGroup>
					<DropdownMenuItem onClick={enhanceText}>
						Melhorar o texto
					</DropdownMenuItem>

					<DropdownMenuItem disabled>Sugerir um texto novo</DropdownMenuItem>
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
