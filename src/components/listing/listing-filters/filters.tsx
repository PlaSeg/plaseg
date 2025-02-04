import { DatePickerDemo } from "@/components/listing/listing-filters/data-filter/data-picker";
import { CheckboxDemo } from "@/components/listing/listing-filters/checkbox";
import { Input } from "@/components/ui/input";


export function Filters(){
    return(
       
        <div className="flex flex-col w-[350px] h-[750px] bg-muted/50 p-4 gap-8 rounded-lg">
         
            <strong className="text-blue-500 text-2xl">Filtrar editais</strong>

            <div className="flex flex-col gap-2">
                <strong className="text-xl">Categoria</strong>
                <CheckboxDemo text='categoria 1'/>
                <CheckboxDemo text='categoria 2'/>
                <CheckboxDemo text='categoria 3'/>
                <CheckboxDemo text='categoria 4'/>
            </div>


            <div className="flex flex-col gap-2">
                <strong className="text-xl">Valor</strong>
                <div className="flex flex-row gap-6">
                    <Input type="text" placeholder="Valor mínimo" className="w-[130px]"></Input>
                    <Input type="text" placeholder="Valor máximo" className="w-[130px]"></Input>
                </div>
            </div>
                
            <div className="flex flex-col gap-2">
                <strong className="text-xl">Órgão responsável</strong>
                <Input type="text" placeholder="Digite o órgão responsável" className="w-[280px]"></Input>

            </div>


            <div className="flex flex-col text-xl gap-2">
                <strong>Selecione a data inicial</strong>
                <DatePickerDemo/>
            </div>

            <div className="flex flex-col text-xl gap-2">
                <strong>Selecione a data final</strong>
                <DatePickerDemo/>
            </div>

            <button className="w-[120px] bg-blue-500 p-2
                    rounded-lg text-white ">Filtrar</button>
           


        </div>
       






        
    
    );
}