import type { Field } from "@/@types/project/project";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Textarea } from "@/components/ui/textarea";
import { env } from "@/env";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { useMutation } from "@tanstack/react-query";
import { generateText } from "ai";
import { Check, SquarePen } from "lucide-react";
import { useState } from "react";
import { ProjectSectionsAiDropdownMenu } from "./project-sections-ai-dropdown-menu";

const google = createGoogleGenerativeAI({
	apiKey: env.VITE_GOOGLE_GENERATIVE_AI_API_KEY,
});

interface ProjectSectionTopicProps {
	field: Field;
}

async function improveText(text: string): Promise<string> {
	const model = google("gemini-1.5-flash");

	const { text: improvedText } = await generateText({
		model,
		prompt: `Melhore e aprimore o seguinte texto em português,
		mantendo o sentido original mas tornando-o mais claro,
		profissional, bem estruturado e eloquente.
		Retorne apenas o texto melhorado, sem explicações: "${text}"`,
	});

	return improvedText;
}

export function ProjectSectionTopic({ field }: ProjectSectionTopicProps) {
	const [fieldValue, setFieldValue] = useState(
		field.fields !== null ? field.fields[0].value : field.value
	);
	const [isEditing, setIsEditing] = useState(false);
	const [isDone, setIsDone] = useState(false);

	const enhanceTextMutation = useMutation({
		mutationFn: improveText,
		onSuccess: (improvedText) => {
			setFieldValue(improvedText);
			setIsEditing(false);
			setIsDone(false);
			console.log("Texto melhorado:", improvedText);
		},
		onError: (error) => {
			console.error("Erro ao melhorar texto:", error);
		},
	});

	const handleSave = () => {
		if (fieldValue) {
			enhanceTextMutation.mutate(fieldValue);
		}
	};

	return (
		<div className="flex flex-col gap-6">
			<div className="flex items-end justify-between">
				<div className="flex flex-col gap-6">
					<h2 className="text-xl font-semibold">{field.name}</h2>

					{field.fields !== null && (
						<h2 className="text-xl font-semibold">{field.fields[0].name}</h2>
					)}
				</div>

				<div className="flex items-center gap-2">
					{!isDone && (
						<Button variant="outline" onClick={() => setIsDone(true)}>
							<Check />
							Aceitar alterações
						</Button>
					)}

					<Button
						variant="outline"
						size="icon"
						onClick={() => setIsEditing(true)}
					>
						<SquarePen />
					</Button>
				</div>
			</div>

			{isEditing && (
				<span className="text-xs text-slate-600">
					Em relação a esse tópico o proponente deverá evidenciar a
					compatibilidade entre as atribuições institucionais dos partícipes e o
					objeto proposto. (Realizar conexão com os preceitos constitucionais e
					demais normativos vigentes aplicados ao caso, como por exemplo a Lei
					nº 13.675/2018 (Institui o Sistema Único de Segurança.
				</span>
			)}

			{!enhanceTextMutation.isPending && isEditing && (
				<Textarea
					className="bg-white !text-base resize-y"
					value={fieldValue ?? ""}
					onChange={(e) => setFieldValue(e.target.value)}
				/>
			)}

			{!enhanceTextMutation.isPending && !isEditing && (
				<p className="text-slate-600">{fieldValue}</p>
			)}

			{enhanceTextMutation.isPending && (
				<div className="flex flex-col gap-2">
					<Skeleton className="h-4 w-full bg-slate-200" />
					<Skeleton className="h-4 w-full bg-slate-200" />
					<Skeleton className="h-4 w-full bg-slate-200" />
					<Skeleton className="h-4 w-1/2 bg-slate-200" />
				</div>
			)}

			{isEditing && (
				<div className="flex items-center gap-2 self-end">
					<ProjectSectionsAiDropdownMenu
						isLoading={enhanceTextMutation.isPending}
						enhanceText={handleSave}
					/>

					<Button
						variant="outline"
						onClick={() => setIsEditing(false)}
						disabled={enhanceTextMutation.isPending}
					>
						Descartar alterações
					</Button>

					<Button
						variant="outline"
						className="bg-black hover:bg-black/90 text-white hover:text-white"
						onClick={() => {
							setIsEditing(false);
							setIsDone(true);
						}}
					>
						Salvar
					</Button>
				</div>
			)}
		</div>
	);
}
