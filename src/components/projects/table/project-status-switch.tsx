import { Switch } from "@/components/ui/switch";
import { useUpdateProjectStatus } from "@/hooks/projects/use-update-project-status";

interface ProjectStatusSwitchProps {
	projectId: string;
	isActive: boolean;
}

export const ProjectStatusSwitch = ({
	projectId,
	isActive,
}: ProjectStatusSwitchProps) => {
	const { updateProjectStatusFn, isLoadingUpdateProjectStatus } =
		useUpdateProjectStatus();

	const handleStatusChange = async () => {
		await updateProjectStatusFn({ projectId });
	};

	return (
		<Switch
			checked={isActive}
			onCheckedChange={handleStatusChange}
			disabled={isLoadingUpdateProjectStatus}
		/>
	);
};
