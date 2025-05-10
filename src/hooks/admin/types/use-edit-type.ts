import { useState } from "react";

export function useEditType() {
	const [isEditTypeSheetOpen, setIsEditTypeSheetOpen] = useState(false);

	return {
		isEditTypeSheetOpen,
		setIsEditTypeSheetOpen,
	};
}
