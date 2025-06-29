import { Project } from "@/@schemas/project";

export function measureProjectProgress(project: Project): number {
	if (!project) {
		return 0;
	}

	let progress = 0;

	const responsibleDataComplete =
		project.responsibleCpf &&
		project.responsibleName &&
		project.responsibleEmail &&
		project.responsiblePhone &&
		project.baseValue > 0;

	if (responsibleDataComplete) {
		progress += 33.3;
	}

	const childFieldsComplete = checkChildFieldsCompletion(project.documents);
	if (childFieldsComplete) {
		progress += 33.3;
	}

	if (project.requestedItems && project.requestedItems.length > 0) {
		progress += 33.3;
	}

	return Math.round(progress);
}

function checkChildFieldsCompletion(documents: Project["documents"]): boolean {
	if (!documents || documents.length === 0) {
		return false;
	}

	const allFields: Project["documents"][0]["fields"] = [];
	documents.forEach((doc) => {
		if (doc.fields) {
			allFields.push(...doc.fields);
		}
	});

	if (allFields.length === 0) {
		return false;
	}

	const childFields = allFields.filter((field) => field.parentId);

	if (childFields.length === 0) {
		return false;
	}

	const allChildFieldsComplete = childFields.every(
		(field) => field.value && field.value.trim() !== ""
	);

	return allChildFieldsComplete;
}
