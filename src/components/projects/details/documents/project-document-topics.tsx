import { CircleProgressIcon } from "@/components/ui/circle-progress-icon";
import type { ProjectDocument } from "@/hooks/projects/use-get-project-document-by-id";

interface ProjectDocumentTopicsProps {
	document: ProjectDocument;
}

interface Field {
	id: string;
	name: string;
	value: string;
	isTitle: boolean;
	section: string;
	level: number;
	parentId: string | null;
	order: number;
	hasChildren: boolean;
	ready: boolean;
}

export function ProjectDocumentTopics({
	document,
}: ProjectDocumentTopicsProps) {
	type FieldWithChildren = Field & { children: FieldWithChildren[] };

	const buildHierarchy = (fields: Field[]): FieldWithChildren[] => {
		const fieldMap = new Map<string, FieldWithChildren>();

		// Criar mapa com todos os fields
		fields.forEach((field) => {
			fieldMap.set(field.id, { ...field, children: [] });
		});

		// Organizar hierarquia
		const rootFields: FieldWithChildren[] = [];

		fields.forEach((field) => {
			const fieldWithChildren = fieldMap.get(field.id)!;

			if (field.parentId && fieldMap.has(field.parentId)) {
				fieldMap.get(field.parentId)!.children.push(fieldWithChildren);
			} else {
				rootFields.push(fieldWithChildren);
			}
		});

		// Ordenar por order
		const sortFields = (fields: FieldWithChildren[]) => {
			fields.sort((a, b) => a.order - b.order);
			fields.forEach((field) => {
				if (field.children.length > 0) {
					sortFields(field.children);
				}
			});
		};

		sortFields(rootFields);
		return rootFields;
	};

	const renderField = (field: FieldWithChildren, depth = 0) => (
		<div key={field.id} className="flex flex-col">
			<div
				className="flex items-center gap-2 py-1"
				style={{ paddingLeft: `${depth * 24}px` }}
			>
				{!field.hasChildren && field.ready && (
					<CircleProgressIcon percentage={100} size={16} />
				)}

				{!field.hasChildren && !field.ready && (
					<CircleProgressIcon percentage={0} size={16} />
				)}

				<span
					className={`text-sm font-medium ${field.hasChildren && "text-muted-foreground"}`}
				>
					{field.name}
				</span>
			</div>

			{field.children.map((child) => renderField(child, depth + 1))}
		</div>
	);

	const hierarchicalFields: FieldWithChildren[] = buildHierarchy(
		document.fields
	);

	return (
		<div className="flex flex-col gap-6">
			<div className="flex items-center justify-between">
				<h2 className="text-xl font-semibold">Tópicos</h2>
				<span className="text-muted-foreground text-sm">
					{document.fields.filter((f) => f.ready && !f.hasChildren).length} de{" "}
					{document.fields.length} concluídos
				</span>
			</div>

			<div className="flex flex-col">
				{hierarchicalFields.map((field) => renderField(field))}
			</div>
		</div>
	);
}
