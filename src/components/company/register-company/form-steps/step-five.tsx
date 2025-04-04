import { Textarea } from "@/components/ui/textarea";
import { FormField } from "../form-field";
import { Label } from "@/components/ui/label";
import { ProductCategorySelect } from "../product-category-select";
import { StateServedSelect } from "../states-served-select";
import { CitiesServedSelect } from "../cities-served-select";
import { PaymentMethodsSelect } from "../payment-method-select";

export function StepFive() {
	return (
		<div className="flex flex-col gap-6">
			<div className="text-left space-y-2">
				<Label htmlFor="service-description">
					Descrição dos Produtos e Serviços Oferecidos
				</Label>
				<Textarea placeholder="Descreva seus produtos e serviços" />
			</div>

			<div className="text-left space-y-2">
				<Label htmlFor="service-description">Categoria de Produtos</Label>
				<ProductCategorySelect />
			</div>

			<div className="text-left space-y-2">
				<Label htmlFor="states-served">Estados Atendidos</Label>
				<StateServedSelect />
			</div>

			<div className="text-left space-y-2">
				<Label htmlFor="cities-served">Municípios Atendidos</Label>
				<CitiesServedSelect />
			</div>

			<FormField
				type="number"
				label="Prazo Médio de Entrega"
				id="avarege-due"
				placeholder="Digite o prazo médio de entrega"
			/>

			<div className="text-left space-y-2">
				<Label htmlFor="payment-methods">Formas de Pagamento Aceitas</Label>
				<PaymentMethodsSelect />
			</div>
		</div>
	);
}
