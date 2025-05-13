import { FormInput } from "@/components/form/form-input";
import { UseFormReturn } from "react-hook-form";
import { management } from "@/@types/municipality-sign-up/municipality-sign-in";
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface StepFiveProps {
	form: UseFormReturn<management>;
}

export function StepFive({ form }: StepFiveProps) {
	return (
		<div className="flex flex-col gap-6">
			<div className="space-y-4">
				<FormInput
					form={form}
					entity="initialDate"
					label="Data Inicial"
					placeholder="Digite o prazo médio de entrega"
					type="text"
				/>

				<FormInput
					form={form}
					entity="endDate"
					label="Data Final"
					placeholder="Digite o prazo médio de entrega"
					type="text"
				/>
			</div>

			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant="outline" className="w-full justify-between">
						Informações do Gerente
						<ChevronDown className="h-4 w-4" />
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent className="w-[var(--radix-dropdown-menu-trigger-width)] p-4 space-y-4">
					<FormInput
						form={form}
						entity="managerName"
						label="Nome do gerente"
						placeholder="Digite o nome do gerente"
						type="text"
						className="w-full"
					/>
					<FormInput
						form={form}
						entity="managerCpf"
						label="CPF do Gerente"
						placeholder="Digite o CPF do Gerente"
						type="text"
						className="w-full"
					/>
					<FormInput
						form={form}
						entity="managerEmail"
						label="E-mail do Gerente"
						placeholder="exemplo@email.com"
						type="email"
						className="w-full"
					/>
					<FormInput
						form={form}
						entity="managerAddress"
						label="Endereço do Gerente"
						placeholder="Digite o Endereço do Gerente"
						type="text"
						className="w-full"
					/>
					<FormInput
						form={form}
						entity="managerPhone"
						label="Telefone/Celular do Gerente"
						placeholder="(DDD) 00000-0000"
						type="text"
						className="w-full"
					/>
				</DropdownMenuContent>
			</DropdownMenu>

			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant="outline" className="w-full justify-between">
						Informações do Gerente Administrativo
						<ChevronDown className="h-4 w-4" />
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent className="w-[var(--radix-dropdown-menu-trigger-width)] p-4 space-y-2">
					<FormInput
						form={form}
						entity="adminManagerName"
						label="Nome do Gerente Administrativo"
						placeholder="Digite o Nome do Gerente Administrativo"
						type="text"
						className="w-full"
					/>
					<FormInput
						form={form}
						entity="adminManagerCpf"
						label="CPF do Gerente Administrativo"
						placeholder="Digite o CPF do Gerente Administrativo"
						type="text"
						className="w-full"
					/>
					<FormInput
						form={form}
						entity="adminManagerEmail"
						label="E-mail do Gerente Administrativo"
						placeholder="exemplo@email.com"
						type="email"
						className="w-full"
					/>
					<FormInput
						form={form}
						entity="adminManagerAddress"
						label="Endereço do Gerente Administrativo"
						placeholder="Digite o Endereço do Gerente Administrativo"
						type="text"
						className="w-full"
					/>
					<FormInput
						form={form}
						entity="adminManagerPhone"
						label="Telefone/Celular do Gerente Administrativo"
						placeholder="(DDD) 00000-0000"
						type="text"
						className="w-full"
					/>
				</DropdownMenuContent>
			</DropdownMenu>

			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant="outline" className="w-full justify-between">
						Informações do Legislativo
						<ChevronDown className="h-4 w-4" />
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent className="w-[var(--radix-dropdown-menu-trigger-width)] p-4 space-y-4">
					<FormInput
						form={form}
						entity="legislationName"
						label="Nome do Legislativo"
						placeholder="Digite o Nome do Legislativo"
						type="text"
						className="w-full"
					/>
					<FormInput
						form={form}
						entity="legislationCpf"
						label="CPF do Legislativo"
						placeholder="Digite o CPF do Legislativo"
						type="text"
						className="w-full"
					/>
					<FormInput
						form={form}
						entity="legislationEmail"
						label="E-mail do Legislativo"
						placeholder="exemplo@email.com"
						type="email"
						className="w-full"
					/>
					<FormInput
						form={form}
						entity="legislationAddress"
						label="Endereço do Legislativo"
						placeholder="Digite o Endereço do Legislativo"
						type="text"
						className="w-full"
					/>
					<FormInput
						form={form}
						entity="legislationPhone"
						label="Telefone/Celular do Legislativo"
						placeholder="(DDD) 00000-0000"
						type="text"
						className="w-full"
					/>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
}
