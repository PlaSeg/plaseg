import { SavePaymentInfo } from "@/components/payment/save-payment-info";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router";

export function Payment() {
	const navigate = useNavigate();

	return (
		<div className="w-full h-screen grid grid-cols-3">
			<div className="h-screen flex items-center justify-center bg-muted/30">
				<div className="w-[400px] h-[500px] rounded-lg p-4 flex flex-col gap-4">
					<strong className="text-xl">Plaseg</strong>

					<div className="flex flex-col">
						<span className="text-muted-foreground">Valor da compra</span>
						<strong className="text-3xl">R$ 16.800,00</strong>
					</div>

					<div className="mt-4 w-full flex justify-between items-center">
						<span className="text-muted-foreground">
							Plano Município - 6 meses
						</span>
						<strong>R$ 16.800,00</strong>
					</div>

					<hr />

					<div className="mt-4 w-full flex justify-between items-center">
						<span className="text-muted-foreground">Valor Total</span>
						<strong>R$ 16.800,00</strong>
					</div>
				</div>
			</div>

			<div className="col-span-2 flex items-center justify-center flex-col gap-2">
				<div className="w-[400px] flex flex-col gap-4">
					<strong className="text-xl">Informações de pagamento</strong>

					<form className="space-y-4">
						<div className="space-y-2">
							<Label>Email</Label>
							<Input type="email" placeholder="Digite seu email" />
						</div>

						<div className="space-y-2">
							<Label>Informações de Endereço</Label>

							<div className="space-y-2">
								<Input type="name" placeholder="Digite seu nome" />
								<Input type="text" placeholder="Digite seu endereço" />
							</div>
						</div>

						<div className="space-y-4">
							<Label>Detalhes de Pagamento</Label>

							<div className="space-y-2">
								<div className="space-y-2">
									<Label>Número do cartão</Label>
									<Input type="number" placeholder="1234 1234 1234 1234" />
								</div>

								<div className="grid grid-cols-2 gap-2">
									<div className="space-y-2">
										<Label>Validade</Label>
										<Input type="number" placeholder="MM / AA" />
									</div>

									<div className="space-y-2">
										<Label>Código de Segurança</Label>
										<Input type="number" placeholder="CCV" />
									</div>
								</div>
							</div>
						</div>

						<SavePaymentInfo />

						<Button
							className="w-full"
							onClick={() => navigate("/cadastrar-municipio")}
						>
							Finalizar Pagamento
						</Button>

						<span className="w-full flex justify-center">Ou</span>

						<Button
							className="w-full"
							variant="secondary"
							onClick={() => navigate("/cadastrar-municipio")}
						>
							<img src="/src/assets/pix.svg" alt="pix" className="w-4 h-4" />
							Pagar via pix
						</Button>
					</form>
				</div>
			</div>
		</div>
	);
}
