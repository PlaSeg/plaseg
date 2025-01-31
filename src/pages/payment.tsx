import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function Payment() {
	return (
		<div className="w-full h-screen grid grid-cols-3">
			<div className="h-screen bg-muted"></div>

			<div className="col-span-2 flex items-center justify-center flex-col gap-2">
				<div className="w-[400px] flex flex-col gap-4">
					<strong className="text-xl">Informações de pagamento</strong>

					<form className="space-y-4">
						<div className="space-y-2">
							<Label>Email</Label>
							<Input type="email" placeholder="Digite seu email" />
						</div>

						<div className="space-y-2">
							<Label>Endereço</Label>

							<div className="space-y-2">
								<Input type="email" placeholder="Digite seu email" />
								<Input type="email" placeholder="Digite seu email" />
								<Input type="email" placeholder="Digite seu email" />
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
