import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { PriceRegistrationRecordFormProduct } from "./add-price-registration-record-form/price-registration-form-product";
import { PriceRegistrationRecordFormInfo } from "./add-price-registration-record-form/price-registration-record-form-info";

export function AddPriceRegistrationRecordForm() {
	return (
		<div className="flex flex-col items-center gap-4 w-full ">
			<div className="flex items-center mb-4 w-full">
				<h2 className="text-xl font-semibold">Nova Ata de registro de preço</h2>

				<div className="flex ml-auto gap-2">
					<Button variant="outline" asChild>
						<Link to="/empresa/atas-de-registro-de-preco">Cancelar</Link>
					</Button>
					<Button type="submit">Salvar</Button>
				</div>
			</div>

			<div className="flex items-center flex-col gap-6 w-full">
				<PriceRegistrationRecordFormInfo />

				<PriceRegistrationRecordFormProduct />
			</div>
		</div>
	);
}
