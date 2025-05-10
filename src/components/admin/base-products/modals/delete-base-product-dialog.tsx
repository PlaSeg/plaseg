import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

export function DeleteBaseProductDialog() {
	return (
		<Button variant="outline" size="icon" className="bg-red-50">
			<Trash2 className="h-4 w-4 text-red-500" />
			<span className="sr-only">Excluir produto base</span>
		</Button>
	);
}
