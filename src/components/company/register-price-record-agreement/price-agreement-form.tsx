
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { PriceAgreementFormProduct } from "./price-agreement-form-product";
import { PriceAgreementFormInfo } from "./price-agreement-form-info";


export function PriceAgreementForm() {
	return (
        <div className="flex flex-col items-center gap-4">
            <div className="w-[1000px] flex items-center mb-4">
                <h2 className="text-xl font-semibold">Nova Ata de registro de preço</h2>

                <div className="flex ml-auto gap-2">
                    <Button variant="outline" asChild>
                        <Link to="/empresa/atas-de-registro-de-preco">Cancelar</Link>
                    </Button>
                    <Button type="submit">Salvar</Button>
                </div>
			</div>

            <div className="flex items-center flex-col gap-6">
                <PriceAgreementFormInfo/>
                <PriceAgreementFormProduct/>
		    </div>


        </div>
       
		

			

       
		
	);
}
