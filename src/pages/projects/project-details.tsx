import { useParams } from "react-router";
import { ProjectDetailsContainer } from "@/components/projects/details/project-details-container";
import { useGetProjectById } from "@/hooks/projects/use-get-project-by-id";
import { ProjectsDetailsSkeleton } from "./project-details-skeleton";

export default function ProjectDetails() {
	const { projectId } = useParams<{ projectId: string }>();

	const { project, isLoadingGetProjectById } = useGetProjectById(
		projectId ?? ""
	);

	if (isLoadingGetProjectById) return <ProjectsDetailsSkeleton />;

	if (project) return <ProjectDetailsContainer project={project} />;
}
