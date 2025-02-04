import { Button } from "@/components/ui/button";


interface CardProps{
    title:string;
    responsible:string;
    code:string;
    objectives:string;
    submission:string;
    minValue:string;
    maxValue:string;

}


export  function Card(props:CardProps){
    return(
        <div className="flex ml-auto mr-16 p-4">
			<div
				className="bg-muted/50 w-[900px] h-[250px]  p-4
			rounded-lg flex justify-between"
			>
                <div className='flex flex-col gap-6'>
                <div className='flex flex-col'>
                    <strong className='text-3xl'>{props.title}</strong>
                    <span className='text-base text-blue-500'>{props.responsible}</span>
                    <span className='text-xs text-gray-500 '>Código:{props.code}</span>
                </div>
                    
                <div className='flex flex-col gap-8'>
                    <span>Objetivos: {props.objectives}</span>
                </div>
                
                </div>

                <div className='flex flex-col gap-4'>
                    <div className='flex flex-col'>
                    <span className='text-sm'>Prazo para submissão: </span>
                    <strong className='text-blue-500'>{props.submission}</strong>
                    </div>

                    <div className='flex flex-col'>
                    <span className='text-sm'>Valor mínimo:</span>
                    <strong>{props.minValue}</strong>
                    </div>

                    <div className='flex flex-col'>
                    <span className='text-sm'>Valor máximo</span>
                    <strong>{props.maxValue}</strong>
                    </div>

                    <Button className="w-[150px] bg-blue-500 p-2
                    rounded-full">Participar</Button>
                </div>

			</div>
		</div>
       
    );
}