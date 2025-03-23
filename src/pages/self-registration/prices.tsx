import { PaymentPlan } from "@/components/payment/payment-plan";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

export default function Prices() {
	const navigate = useNavigate();

	return (
		<div className="w-full h-screen grid grid-cols-3">
			<div className="flex items-center justify-center bg-muted/30">
				<div className="space-y-2 m-4">
					<strong className="text-blue-500">Bem-vindo(a) ao Plaseg</strong>
					<h1 className="text-3xl font-bold">
						Selecione um plano <br /> para seu município
					</h1>
				</div>
			</div>

			<div className="col-span-2 flex items-center justify-center">
				<div className="w-[450px] space-y-4 m-4">
					<PaymentPlan
						isSelected={true}
						title="Básico - 3 meses"
						description={`Funcionalidades essenciais e suporte básico.`}
						price="R$ 9.000,00"
					/>

					<PaymentPlan
						title="Intermediário - 6 meses"
						description=" Suporte prioritário e integrações extras."
						price="R$ 16.800,00"
					/>

					<PaymentPlan
						title="Avançado - 12 meses"
						description="Personalização, automação e suporte premium."
						price="R$ 30.000,00"
					/>

					<Button
						className="bg-blue-500 w-full"
						onClick={() => navigate("/pagamento")}
					>
						Continuar
					</Button>
				</div>
			</div>
		</div>
	);
}
