import { Button } from "@/components/ui/button";

export function Prices() {
	return (
		<div className="w-full h-screen flex items-center justify-center">
			<div className="bg-slate-100 w-[1200px] h-[500px] grid grid-cols-2 p-4
			rounded-lg">
				<div>
					<strong>Bem-vindo(a) ao Plaseg</strong>
					<h1 className="text-5xl font-bold">Selecione um plano</h1>
				</div>

				<div className="space-y-4">
					<div
						className="w-[300px] border-2 bg-white border-blue-500 p-2 rounded-md
				flex justify-between"
					>
						<div className="flex flex-col">
							<strong>Básico</strong>
							<span>Esse é o plano báisco</span>
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
							<strong>Básico</strong>
							<span>Esse é o plano báisco</span>
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
							<strong>Básico</strong>
							<span>Esse é o plano báisco</span>
						</div>

						<div>
							<strong>R$ 9.000</strong>
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
