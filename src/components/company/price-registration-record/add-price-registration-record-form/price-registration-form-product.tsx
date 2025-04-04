import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormDatePicker } from "@/components/form/form-date-picker";
import { usePriceAgreement } from "@/hooks/use-price-agreement";

export function PriceRegistrationRecordFormProduct() {
	const { form } = usePriceAgreement();

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmitForm} className="w-full">
				<div className="flex items-center">
					<h3 className="text-xl font-semibold mb-2">Adicionar item</h3>
				</div>

				<div className="grid grid-row rounded-lg border">
					{form.getValues("products").map((_, index) => (
						<div key={index} className="grid grid-cols-3 gap-x-6 gap-y-4 p-6">
							<FormField
								control={form.control}
								name={`products.${index}.productID`}
								render={({ field }) => (
									<FormItem>
										<FormLabel>Código do produto</FormLabel>
										<FormControl>
											<Input
												placeholder="Digite o código do produto"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name={`products.${index}.unit`}
								render={({ field }) => (
									<FormItem>
										<FormLabel>Unidade</FormLabel>
										<FormControl>
											<Input placeholder="Digite a unidade" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name={`products.${index}.quantityAvailable`}
								render={({ field }) => (
									<FormItem>
										<FormLabel>Quantidade disponível</FormLabel>
										<FormControl>
											<Input
												placeholder="Digite a quantidade disponível"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name={`products.${index}.currency`}
								render={({ field }) => (
									<FormItem>
										<FormLabel>Moeda</FormLabel>
										<FormControl>
											<Select
												onValueChange={field.onChange}
												defaultValue={field.value}
											>
												<SelectTrigger>
													<SelectValue placeholder="Selecione a moeda" />
												</SelectTrigger>

												<SelectContent>
													<SelectItem value="real">Real (R$)</SelectItem>
													<SelectItem value="dólar">Dólar (US$) </SelectItem>
													<SelectItem value="Euro">Euro (£) </SelectItem>
												</SelectContent>
											</Select>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name={`products.${index}.unitPriceSourceCurrency`}
								render={({ field }) => (
									<FormItem>
										<FormLabel>Valor unitário na moeda</FormLabel>
										<FormControl>
											<Input placeholder="Ex: US$ 500,00" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name={`products.${index}.totalValueCurrency`}
								render={({ field }) => (
									<FormItem>
										<FormLabel>Valor total na moeda</FormLabel>
										<FormControl>
											<Input placeholder="Ex: US$ 5.000,00" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name={`products.${index}.unitPriceBrl`}
								render={({ field }) => (
									<FormItem>
										<FormLabel>Valor unitário em real</FormLabel>
										<FormControl>
											<Input placeholder="Ex: R$ 1.000,00" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name={`products.${index}.totalValueBrl`}
								render={({ field }) => (
									<FormItem>
										<FormLabel>Valor total em real</FormLabel>
										<FormControl>
											<Input placeholder="Ex: R$ 10.000,00" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name={`products.${index}.conversionRate`}
								render={({ field }) => (
									<FormItem>
										<FormLabel>Taxa de conversão</FormLabel>
										<FormControl>
											<Input
												placeholder="Digite a taxa de conversão"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormDatePicker
								form={form}
								label="Data da taxa de conversão"
								placeholder="Data da taxa de conversão"
								entity={`products.${index}.conversionRateDate`}
							/>

							<FormField
								control={form.control}
								name={`products.${index}.minimumQtyForMembership`}
								render={({ field }) => (
									<FormItem>
										<FormLabel>Quantidade mínima para adesão</FormLabel>
										<FormControl>
											<Input placeholder="" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name={`products.${index}.maximumQtyForMembership`}
								render={({ field }) => (
									<FormItem>
										<FormLabel>Quantidade máxima para adesão</FormLabel>
										<FormControl>
											<Input placeholder="" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
					))}

					<Button type="button" className="w-[150px] m-4">
						Adicionar item
					</Button>
				</div>
			</form>
		</Form>
	);
}
