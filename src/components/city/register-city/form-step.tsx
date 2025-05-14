import { useStepsStore } from "@/store/step";
import {
	Building2,
	Check,
	UsersRound,
	Folders,
	Handshake,
	Landmark,
	UserCog2,
} from "lucide-react";
import { useEffect, useState } from "react";

interface FormStepProps {
	step: number;
}

export function FormStep({ step }: FormStepProps) {
	const { steps } = useStepsStore();
	
	const isCompleted = steps[step - 1].status === "completed";
	const isProgress = steps[step - 1].status === "progress";
	const isPending = steps[step - 1].status === "pending";

	const styles = isCompleted
		? "border-blue-500 bg-blue-500 text-white"
		: isProgress
			? "border-blue-500 text-blue-500"
			: "border-muted-foreground/50 text-muted-foreground/50";

	const [animate, setAnimate] = useState(false);

	useEffect(() => {
		if (isCompleted) {
			setAnimate(true);
		}
	}, [isCompleted]);

	return (
		<>
			<div className="flex gap-4 items-center">
				<div
					className={`w-12 h-12 rounded-full flex items-center justify-center border-2 ${styles}`}
				>
					{isCompleted && <Check size={24} />}

					{!isCompleted && (
						<>
							{step === 1 && <Building2 size={24} />}
							{step === 2 && <UsersRound size={24} />}
							{step === 3 && <Folders size={24} />}
							{step === 4 && <Landmark size={24} />}
							{step === 5 && <UserCog2 size={24} />}
							{step === 6 && <Handshake size={24} />}
						</>
					)}
				</div>

				<div className="flex flex-col">
					<strong className={isPending ? "text-muted-foreground/50" : ""}>
						{steps[step - 1].title}
					</strong>

					{!isCompleted && (
						<span className={isPending ? "text-muted-foreground/50" : ""}>
							Pendente
						</span>
					)}

					{isCompleted && <span className="text-blue-500">Completo</span>}
				</div>
			</div>

			{step !== 6 && (
				<div className="w-[3px] h-5 ml-5 my-3 rounded-lg relative overflow-hidden bg-muted-foreground/50">
					<div
						className={`absolute inset-0 ${
							isCompleted ? "bg-blue-500" : ""
						} transition-transform duration-500 ${
							animate ? "translate-y-0" : "-translate-y-full"
						}`}
					/>
				</div>
			)}
		</>
	);
}
