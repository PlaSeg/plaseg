import { Button } from "@/components/ui/button";

export function Prices() {
	return (
		<div className="w-full h-screen flex items-center justify-center">
			<div className="bg-slate-100 w-[1200px] h-[500px] grid grid-cols-2 p-4
			rounded-lg " >
				<div className="space-y-2 m-4" >
					<strong className="text-blue-500">Bem-vindo(a) ao Plaseg</strong>
					<h1 className="text-5xl font-bold">Selecione um plano</h1>
				</div>

				<div className="space-y-4 m-4">
					<div
						className="w-[300px] border-2 bg-white border-blue-500 p-2 rounded-md
				flex justify-between"
					>
						<div className="flex flex-col">
							<strong>Trimestral</strong>
							<span className="text-sm">Esse é o plano de 3 meses</span>
						</div>

						<div>
							<strong>R$ 9.000</strong>
						</div>
					</div>

					<div
						className="w-[300px] border-2 bg-white  p-2 rounded-md
				flex justify-between"
					>
						<div className="flex flex-col">
							<strong>Semestral</strong>
							<span className="text-sm">Esse é o plano de 6 meses</span>
						</div>

						<div>
							<strong>R$ 16.800</strong>
						</div>
					</div>

					<div
						className="w-[300px] border-2 bg-white  p-2 rounded-md
				flex justify-between"
					>
						<div className="flex flex-col">
							<strong>Anual</strong>
							<span className="text-sm">Esse é o plano de 12 meses</span>
						</div>

						<div>
							<strong>R$ 30.000</strong>
						</div>
					</div>

					<Button className="w-[300px] bg-blue-500">
						Continuar
					</Button>
				</div>
			</div>
		</div>
	);
}
