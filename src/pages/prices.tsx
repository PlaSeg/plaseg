import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

export function Prices() {
	const navigate = useNavigate();

	return (
		<div className="w-full h-screen grid grid-cols-3">
			<div className="flex items-center justify-center">
				<div className="space-y-2 m-4">
					<strong className="text-blue-500">Bem-vindo(a) ao Plaseg</strong>
					<h1 className="text-3xl font-bold">Selecione um plano</h1>
				</div>
			</div>

			<div className="col-span-2 flex items-center justify-center shadow-lg">
				<div className="space-y-4 m-4">
					<div
						className="w-[400px] border-2 border-blue-500 p-4 rounded-md
				flex justify-between hover:bg-slate-50 hover:cursor-pointer"
					>
						<div className="flex flex-col gap-2">
							<strong>Plano Empresa 1</strong>
							<span className="text-sm text-muted-foreground">
								Esse é o plano de 3 meses
							</span>
						</div>

						<div>
							<strong>R$ 9.000,00</strong>
						</div>
					</div>

					<div className="w-[400px] border-2 p-4 rounded-md flex justify-between hover:bg-slate-50 hover:cursor-pointer">
						<div className="flex flex-col gap-2">
							<strong>Plano Empresa 2</strong>
							<span className="text-sm text-muted-foreground">
								Esse é o plano de 6 meses
							</span>
						</div>

						<div>
							<strong>R$ 16.800,00</strong>
						</div>
					</div>

					<div
						className="w-[400px] border-2 p-4 rounded-md flex justify-between
					hover:bg-slate-50 hover:cursor-pointer"
					>
						<div className="flex flex-col gap-2">
							<strong>Plano Empresa 3</strong>
							<span className="text-sm text-muted-foreground">
								Esse é o plano de 9 meses
							</span>
						</div>

						<div>
							<strong>R$ 30.000,00</strong>
						</div>
					</div>

					<Button
						className="w-[400px] bg-blue-500"
						onClick={() => navigate("/pagamento")}
					>
						Continuar
					</Button>
				</div>
			</div>
		</div>
	);
}
