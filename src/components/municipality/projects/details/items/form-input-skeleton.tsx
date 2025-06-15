import { Label } from "@/components/ui/label";
import { LoaderCircle } from "lucide-react";

interface FormInputSkeletonProps {
	label: string;
	message: string;
}

export function FormInputSkeleton({ label, message }: FormInputSkeletonProps) {
	return (
		<div className="space-y-2">
			<Label>{label}</Label>

			<div
				className="flex items-center justify-center py-2 border rounded-md
							shadow-sm"
			>
				<LoaderCircle className="h-3 w-3 animate-spin mr-2 text-muted-foreground" />

				<span className="text-sm text-muted-foreground">
					{message}
				</span>
			</div>
		</div>
	);
}
