import { CardWithFormDescription } from "@/components/register-product/card-description";
import { CardWithFormStatus } from "@/components/register-product/card-status";
import {ProductImage} from "@/components/register-product/product-image";

export function RegisterProduct() {
    return(

        <div>
            <header className="flex bg-white border-b p-4 pl-6">
				<h1 className="text-2xl font-bold">Plaseg</h1>
			</header>
            <div className="flex gap-6 p-6">
                <div className="flex flex-col gap-6">
                    <ProductImage />
                    <CardWithFormStatus />
                </div>

                <div className="flex flex-1">
                    <CardWithFormDescription />
                </div>
            </div>
        </div>
    )
}