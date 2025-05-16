import { useState } from "react";

export function useEditMandatoryDocument() {
	const [isEditDocumentSheetOpen, setIsEditDocumentSheetOpen] = useState(false);

	return {
		isEditDocumentSheetOpen,
		setIsEditDocumentSheetOpen,
	};
}
