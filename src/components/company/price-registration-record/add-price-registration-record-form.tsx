import { useState } from 'react';
import { Button } from "@/components/ui/button";
import {Form} from "@/components/ui/form";
import { Link } from "react-router";
import { FormInput } from "@/components/form/form-input";
import { FormDatePicker } from "@/components/form/form-date-picker";
import { usePriceAgreement } from "@/hooks/use-price-agreement";
import { Card, CardContent } from '@/components/ui/card';
import { PlusCircle } from 'lucide-react';
import { ItensTable } from '@/components/company/price-registration-record/add-price-registration-record-form/itens-table';
import { AddItemDialog } from '@/components/company/price-registration-record/add-price-registration-record-form/add-item-dialog';


export function AddPriceRegistrationRecordForm() {
	const { form } = usePriceAgreement();
	const [items] = useState([]);
	const [open, setOpen] = useState(false);

	
	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmitForm}
				className="flex flex-col gap-6 rounded-lg"
			>
				<div className="flex flex-col items-center gap-4 w-full ">
					<div className="flex items-center mb-4 w-full">
						<h2 className="text-xl font-semibold">Nova Ata de registro de preço</h2>
					</div>

					<div className="grid grid-cols-2 gap-x-6 gap-y-4 p-6 rounded-lg border w-full">
						<FormInput
							form={form}
							entity="number"
							label="Número da ata"
							placeholder="Digite o número da ata"
							type="number"
						/>

						<FormInput
							form={form}
							entity="year"
							label="Ano da ata"
							placeholder="Digite o ano da ata"
							type="number"
						/>

						<FormInput
							form={form}
							entity="validityInMonths"
							label="Validade"
							placeholder="ex: 12"
							type="number"
						/>

						<FormInput
							form={form}
							entity="responsibleBody"
							label="Órgão responsável"
							placeholder="Digite o órgão responsável"
							type="text"
						/>

						<FormDatePicker
							form={form}
							label="Data de Assinatura"
							placeholder="dd/mm/aaaa"
							entity="date"
						/>
	
					</div>

					<div className='w-full'>
						<div className="mb-4 flex flex-row justify-between items-center">
							<h2 className="text-2xl font-bold">Itens</h2>
							<Button onClick={() => setOpen(true)} variant="default">
							<PlusCircle className="mr-2 h-4 w-4" /> Adicionar Item
							</Button>
						</div>
						
						<Card>
							<CardContent className="pt-6">
							<ItensTable items={items} />
							</CardContent>
						</Card>
						
						<AddItemDialog 
							open={open} 
							onOpenChange={setOpen} 

						/>

						<div className="flex justify-end gap-2 pr-0 pt-6 ">
							<Button variant="outline" asChild>
								<Link to="/empresa/atas-de-registro-de-preco">Cancelar</Link>
							</Button>
							<Button type="submit">Salvar</Button>
						</div>

					</div>


					
				</div>

			</form>
			
		</Form>

	);
}
