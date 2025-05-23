import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";

interface Task {
	id: string;
	title: string;
	completed: boolean;
	assignee: {
		name: string;
		avatar: string;
	};
	category: "mine" | "consultant" | "all";
}

export function ProjectTasks() {
	const initialTasks: Task[] = [
		{
			id: "1",
			title: "Preencher Dados do Município",
			completed: true,
			assignee: {
				name: "Izaías",
				avatar: "/placeholder.svg?height=32&width=32",
			},
			category: "mine",
		},
		{
			id: "2",
			title: "Preencher Dados do Prefeito",
			completed: true,
			assignee: {
				name: "Izaías",
				avatar: "/placeholder.svg?height=32&width=32",
			},
			category: "mine",
		},
		{
			id: "3",
			title: "Preencher Dados do Responsável Técnico",
			completed: false,
			assignee: {
				name: "Jailson",
				avatar: "/placeholder.svg?height=32&width=32",
			},
			category: "mine",
		},
		{
			id: "4",
			title: "Preencher Dados do Destinatário",
			completed: false,
			assignee: {
				name: "Jailson",
				avatar: "/placeholder.svg?height=32&width=32",
			},
			category: "consultant",
		},
		{
			id: "5",
			title: "Preencher Dados do Consultor",
			completed: false,
			assignee: {
				name: "Jailson",
				avatar: "/placeholder.svg?height=32&width=32",
			},
			category: "consultant",
		},
	];

	const [tasks, setTasks] = useState<Task[]>(initialTasks);
	const [showCompleted, setShowCompleted] = useState(true);
	const [activeTab, setActiveTab] = useState("mine");

	const completedCount = tasks.filter((task) => task.completed).length;
	const totalCount = tasks.length;

	const toggleTaskCompletion = (taskId: string) => {
		setTasks((prevTasks) =>
			prevTasks.map((task) =>
				task.id === taskId ? { ...task, completed: !task.completed } : task
			)
		);
	};

	const getFilteredTasks = () => {
		let filteredTasks = tasks;

		if (activeTab !== "all") {
			filteredTasks = filteredTasks.filter(
				(task) => task.category === activeTab || task.category === "all"
			);
		}

		if (!showCompleted) {
			filteredTasks = filteredTasks.filter((task) => !task.completed);
		}

		return filteredTasks;
	};

	const filteredTasks = getFilteredTasks();

	return (
		<div className="w-full max-w-md mx-auto bg-white rounded-lg shadow p-6">
			<div className="flex justify-between items-center mb-4">
				<h2 className="text-xl font-semibold">Tarefas</h2>
				<span className="text-sm text-gray-500">
					{completedCount} de {totalCount} concluídos
				</span>
			</div>

			<Tabs
				defaultValue="mine"
				className="w-full"
				onValueChange={(value) => setActiveTab(value)}
			>
				<TabsList className="grid w-full grid-cols-3 mb-6">
					<TabsTrigger value="mine">Município</TabsTrigger>
					<TabsTrigger value="consultant">Consultor</TabsTrigger>
					<TabsTrigger value="all">Todas</TabsTrigger>
				</TabsList>

				{["mine", "consultant", "all"].map((tab) => (
					<TabsContent key={tab} value={tab} className="space-y-4">
						{filteredTasks.length > 0 ? (
							filteredTasks.map((task) => (
								<div
									key={task.id}
									className="flex items-center justify-between"
								>
									<div className="flex items-center gap-3">
										<Checkbox
											id={`task-${task.id}`}
											checked={task.completed}
											onCheckedChange={() => toggleTaskCompletion(task.id)}
											className="data-[state=checked]:bg-black
											data-[state=checked]:border-black data-[state=checked]:text-white"
										/>

										<label
											htmlFor={`task-${task.id}`}
											className={`text-sm font-medium ${task.completed ? "line-through text-gray-400" : ""}`}
										>
											{task.title}
										</label>
									</div>

									<Avatar className="h-8 w-8">
										<AvatarImage
											src={task.assignee.avatar || "/placeholder.svg"}
											alt={task.assignee.name}
										/>
										<AvatarFallback>
											{task.assignee.name.charAt(0)}
										</AvatarFallback>
									</Avatar>
								</div>
							))
						) : (
							<p className="text-center text-gray-500 py-4">
								Nenhuma tarefa para exibir
							</p>
						)}
					</TabsContent>
				))}
			</Tabs>

			<div className="flex items-center space-x-2 mt-6">
				<Switch
					id="show-completed"
					checked={showCompleted}
					onCheckedChange={setShowCompleted}
					className="data-[state=checked]:bg-black"
				/>

				<Label htmlFor="show-completed">Exibir concluídas</Label>
			</div>
		</div>
	);
}
