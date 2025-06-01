import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Link } from "react-router";
import { FormInput } from "@/components/form/form-input";
import { FormDatePicker } from "@/components/form/form-date-picker";
import { Card, CardContent } from "@/components/ui/card";
import { PlusCircle } from "lucide-react";
import { ItensTable } from "@/components/company/price-registration-record/add-price-registration-record-form/itens-table";
import { AddItemDialog } from "@/components/company/price-registration-record/add-price-registration-record-form/add-item-dialog";
import { useCreatePriceRegistrationRecord } from "@/hooks/price-registration-records/use-create-record";
import { useRecordProductsStore } from "@/hooks/record";

export function AddPriceRegistrationRecordForm() {
	const { form } = useCreatePriceRegistrationRecord();
	const [open, setOpen] = useState(false);
	const recordProducts = useRecordProductsStore(
		(state) => state.recordProducts
	);

	return (
		<div className="flex flex-col gap-6 w-full">
			<Form {...form}>
				<form
					onSubmit={form.handleSubmitForm}
					className="flex flex-col gap-6 rounded-lg"
				>
					<div className="flex items-center justify-between w-full">
						<h2 className="text-xl font-semibold">
							Nova Ata de registro de preço
						</h2>

						<div className="flex gap-4 pr-0">
							<Button
								type="button"
								variant="outline"
								className="w-[100px]"
								asChild
							>
								<Link to="/empresa/atas-de-registro-de-preco">Cancelar</Link>
							</Button>

							<Button className="w-[100px]" type="submit">
								Salvar
							</Button>
						</div>
					</div>

					<div className="flex flex-col items-center gap-4 w-full ">
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
								entity="validity_in_months"
								label="Validade em Meses"
								placeholder="ex: 12"
								type="number"
							/>

							<FormInput
								form={form}
								entity="responsible_body"
								label="Órgão responsável"
								placeholder="Digite o órgão responsável"
								type="text"
							/>

							<FormDatePicker
								form={form}
								entity="date"
								label="Data de Assinatura"
								placeholder="dd/mm/aaaa"
							/>
						</div>
					</div>
				</form>
			</Form>

			<div className="w-full">
				<div className="mb-4 flex flex-row justify-between items-center">
					<h2 className="text-2xl font-bold">Itens</h2>

					<Button type="button" onClick={() => setOpen(true)} variant="default">
						<PlusCircle className="mr-2 h-4 w-4" /> Adicionar Item
					</Button>
				</div>

				<Card>
					<CardContent className="pt-6">
						<ItensTable items={recordProducts} />
					</CardContent>
				</Card>

				<AddItemDialog open={open} onOpenChange={setOpen} />
			</div>
		</div>
	);
}
