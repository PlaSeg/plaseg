import { Card } from "@/components/listing/card";
import { Filters } from "@/components/listing/listing-filters/filters";
import { Input } from "@/components/ui/input";


const editais = [ 
  {
    title: "Fomento à Segurança Pública Municipal",
    responsible: "Secretaria Nacional de Segurança Pública (SENASP)",
    code: "01/2025",
    objectives: "Capacitação da Guarda Municipal; Aquisição de Equipamentos",
    submission: "01/03/2025 a 30/04/2025",
    minValue: "R$ 500.000,00",
    maxValue: "R$ 3.000.000,00",
  },
  {
    title: "Fomento à Segurança Pública Municipal",
    responsible: "Secretaria Nacional de Segurança Pública (SENASP)",
    code: "01/2025",
    objectives: "Capacitação da Guarda Municipal; Aquisição de Equipamentos",
    submission: "01/03/2025 a 30/04/2025",
    minValue: "R$ 500.000,00",
    maxValue: "R$ 3.000.000,00",
  },
  {
    title: "Fomento à Segurança Pública Municipal",
    responsible: "Secretaria Nacional de Segurança Pública (SENASP)",
    code: "01/2025",
    objectives: "Capacitação da Guarda Municipal; Aquisição de Equipamentos",
    submission: "01/03/2025 a 30/04/2025",
    minValue: "R$ 500.000,00",
    maxValue: "R$ 3.000.000,00",
  },
];


export  function Listing(){
    return(
      <div className="flex flex-col">
        <header className="flex flex-row  h-[100px] bg-blue-500">
          <h1 className="text-4xl text-white font-bold m-6 ml-8">Plaseg</h1>
        </header>
       
        <div className="flex flex-row " >
          <div className="flex mr-auto ml-10 mt-4 ">
              <Filters/>
          </div>

          <div className=" flex flex-col ">
              {editais.map((edital, index) => (
              <Card key={index} {...edital} />
            ))}

          </div>

        </div>

      </div>

      
     
       
    );
}