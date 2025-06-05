import { useFieldArray } from "react-hook-form";
import { useState } from "react";
import { createProjectTypeRequestSchema } from "@/@schemas/project-type";
import { useFormMutation } from "@/hooks/common/use-form-mutation";
import { v4 as uuidv4 } from "uuid";

export function useCreateProjectType() {
	const [isCreateProjectTypeSheetOpen, setIsCreateProjectTypeSheetOpen] =
		useState(false);

	const form = useFormMutation({
		schema: createProjectTypeRequestSchema,
		defaultValues: {
			name: "",
			documents: [],
		},
		onSubmit: (data) => {
			const processedData = {
				...data,
				isActive: true,
				documents: (data.documents || []).map((doc) => ({
					...doc,
					id: doc.id || uuidv4(),
					fields: (doc.fields || []).map((field) => ({
						...field,
						id: field.id || uuidv4(),
					})),
				})),
			};

			console.log(processedData);
		},
	});

	const {
		fields: documentsFields,
		append: appendDocument,
		remove: removeDocument,
	} = useFieldArray({
		control: form.control,
		name: "documents",
	});


	const addDocument = () => {
		appendDocument({
			id: uuidv4(),
			name: "",
			fields: [],
		});
	};

	const addFieldToDocument = (documentIndex: number) => {
		const currentDocuments = form.getValues("documents") || [];
		const updatedDocuments = [...currentDocuments];
		if (!updatedDocuments[documentIndex].fields) {
			updatedDocuments[documentIndex].fields = [];
		}
		updatedDocuments[documentIndex].fields.push({
			id: uuidv4(),
			name: "",
			value: null,
		});
		form.setValue("documents", updatedDocuments);
	};

	const removeFieldFromDocument = (
		documentIndex: number,
		fieldIndex: number
	) => {
		const currentDocuments = form.getValues("documents") || [];
		const updatedDocuments = [...currentDocuments];
		updatedDocuments[documentIndex].fields?.splice(fieldIndex, 1);
		form.setValue("documents", updatedDocuments);
	};


	return {
		form,
		onSubmit: form.handleSubmitForm,
		documentsFields,
		addDocument,
		removeDocument,
		addFieldToDocument,
		removeFieldFromDocument,
		isCreateProjectTypeSheetOpen,
		setIsCreateProjectTypeSheetOpen,
	};
}
