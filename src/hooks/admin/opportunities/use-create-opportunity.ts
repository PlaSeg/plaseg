import { useFieldArray } from "react-hook-form";
import { useState } from "react";
import { createOpportunityRequestSchema } from "@/@schemas/opportunity";
import { useFormMutation } from "@/hooks/common/use-form-mutation";
import { v4 as uuidv4 } from "uuid";

export function useCreateOpportunity() {
	const [isCreateOpportunitySheetOpen, setIsCreateOpportunitySheetOpen] =
		useState(false);

	const form = useFormMutation({
		schema: createOpportunityRequestSchema,
		defaultValues: {
			title: "",
			responsibleAgency: "",
			initialDeadline: "",
			finalDeadline: "",
			minValue: 0,
			maxValue: 0,
			description: "",
			requiresCounterpart: false,
			counterpartPercentage: 0,
			requiredDocuments: [],
			documents: [],
		},
		onSubmit: (data) => {
			const processedData = {
				...data,
				availableValue: data.maxValue,
				typeId: uuidv4(),
				isActive: true,
				requiredDocuments: (data.requiredDocuments || []).map((doc) => ({
					...doc,
					id: doc.id || uuidv4(),
				})),
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
		fields: requiredDocumentsFields,
		append: appendRequiredDocument,
		remove: removeRequiredDocument,
	} = useFieldArray({
		control: form.control,
		name: "requiredDocuments",
	});

	const {
		fields: documentsFields,
		append: appendDocument,
		remove: removeDocument,
	} = useFieldArray({
		control: form.control,
		name: "documents",
	});

	const addRequiredDocument = () => {
		appendRequiredDocument({
			id: uuidv4(),
			name: "",
			description: "",
			model: "",
		});
	};

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
			parentId: null,
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

	const getAllFieldsForParentSelection = (
		documentIndex: number,
		currentFieldIndex: number
	) => {
		const documents = form.watch("documents");
		const allFields: Array<{ id: string; name: string; documentName: string }> =
			[];

		documents?.forEach((doc, docIndex) => {
			doc.fields?.forEach((field, fieldIndex) => {
				if (
					!(docIndex === documentIndex && fieldIndex === currentFieldIndex) &&
					field.name &&
					field.id
				) {
					allFields.push({
						id: field.id,
						name: field.name,
						documentName: doc.name || `Documento ${docIndex + 1}`,
					});
				}
			});
		});

		return allFields;
	};

	return {
		form,
		onSubmit: form.handleSubmitForm,
		requiredDocumentsFields,
		documentsFields,
		addRequiredDocument,
		removeRequiredDocument,
		addDocument,
		removeDocument,
		addFieldToDocument,
		removeFieldFromDocument,
		getAllFieldsForParentSelection,
		isCreateOpportunitySheetOpen,
		setIsCreateOpportunitySheetOpen,
	};
}
