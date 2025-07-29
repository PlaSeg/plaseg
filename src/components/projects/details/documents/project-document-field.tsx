import { Check, LoaderCircle, SquarePen } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useAcceptFieldValueSuggestion } from "@/hooks/projects/use-accept-field-value-suggestion";
import type { ProjectDocument } from "@/hooks/projects/use-get-project-document-by-id";
import { useUpdateDocumentFieldValue } from "@/hooks/projects/use-update-document-field-value";
import { ProjectFieldCancelationDialog } from "./project-field-cancelation-dialog";

interface ProjectDocumentFieldProps {
	field: ProjectDocument["fields"][number];
	projectId: string;
	documentId: string;
}

export function ProjectDocumentField({
	field,
	projectId,
	documentId,
}: ProjectDocumentFieldProps) {
	const [fieldValue, setFieldValue] = useState(field.value);
	const [isEditing, setIsEditing] = useState(false);
	const [isDone, setIsDone] = useState(false);

	const { updateDocumentFieldValueFn, isLoadingUpdateDocumentFieldValue } =
		useUpdateDocumentFieldValue({
			fieldId: field.id,
			onSuccess: () => {
				setIsEditing(false);
				setIsDone(true);
			},
		});

	const { acceptFieldValueSuggestionFn, isLoadingAcceptFieldValueSuggestion } =
		useAcceptFieldValueSuggestion();

	return (
		<div className={`flex flex-col ${field.value ? "mb-12" : ""}`}>
			<div className="flex items-end justify-between mb-3">
				<div className="flex flex-col gap-6">
					<h2 className="text-xl font-semibold flex gap-2">
						{field.section}.<span>{field.name}</span>
					</h2>
				</div>

				<div className="flex items-center gap-2">
					{!isDone && field.value && !field.ready && (
						<>
							{!isEditing && (
								<Button
									variant="outline"
									onClick={async () => {
										await acceptFieldValueSuggestionFn({
											projectId,
											fieldId: field.id,
											documentId,
										});
										setIsDone(true);
									}}
									disabled={isLoadingAcceptFieldValueSuggestion}
								>
									{isLoadingAcceptFieldValueSuggestion ? (
										<LoaderCircle className="animate-spin" />
									) : (
										<Check />
									)}
									Aceitar sugestão
								</Button>
							)}

							{isEditing && (
								<ProjectFieldCancelationDialog>
									<Button
										variant="outline"
										onClick={async () => {
											await acceptFieldValueSuggestionFn({
												projectId,
												fieldId: field.id,
												documentId,
											});
											setIsDone(true);
										}}
										disabled={isLoadingAcceptFieldValueSuggestion}
									>
										{isLoadingAcceptFieldValueSuggestion ? (
											<LoaderCircle className="animate-spin" />
										) : (
											<Check />
										)}
										Aceitar sugestão
									</Button>
								</ProjectFieldCancelationDialog>
							)}
						</>
					)}

					{field.value && (
						<Button
							variant="outline"
							size="icon"
							onClick={() => setIsEditing(true)}
						>
							<SquarePen />
						</Button>
					)}
				</div>
			</div>

			{typeof fieldValue !== "string" && (
				<div className="text-slate-600">
					Este campo não pode ser editado.
				</div>
			)}

			{typeof fieldValue === "string" && isEditing && (
				<Textarea
					className="bg-white !text-base h-[150px] mb-4"
					value={fieldValue ?? ""}
					onChange={(e) => setFieldValue(e.target.value)}
				/>
			)}

			{typeof fieldValue === "string" && !isEditing && (
				<p className="text-slate-600">{fieldValue}</p>
			)}

			{isEditing && (
				<div className="flex items-center gap-2 justify-end">
					<Button variant="outline" onClick={() => setIsEditing(false)}>
						Cancelar
					</Button>

					<Button
						variant="outline"
						className="w-[150px] bg-black hover:bg-black/90 text-white hover:text-white outline-none"
						onClick={() => {
							updateDocumentFieldValueFn(
								typeof fieldValue === "string"
									? fieldValue
									: JSON.stringify(fieldValue)
							);
						}}
						disabled={isLoadingUpdateDocumentFieldValue}
					>
						{isLoadingUpdateDocumentFieldValue && (
							<LoaderCircle className="animate-spin" />
						)}

						{!isLoadingUpdateDocumentFieldValue && "Salvar"}
					</Button>
				</div>
			)}
		</div>
	);
}
