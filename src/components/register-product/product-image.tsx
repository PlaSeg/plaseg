import { CustomUI } from "../global/dropfile";
import { CardTitle } from "../ui/card";

export function ProductImage() {
    return(
        <div className="w-[350px] rounded-lg shadow-md">
            <div className="border border-muted border-b-2 p-4">
                <CardTitle>Imagem do Produto</CardTitle>
            </div>
            <div className="p-6">
                <CustomUI onDrop={() => console.log("")}/>
            </div>
        </div>
    )
}