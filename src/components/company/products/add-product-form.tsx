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
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { useAddProduct } from "@/hooks/use-add-product";
import { BrandSelect } from "./add-product-form/brands-select";
import { Link } from "react-router";
import { AttachmentsUploader } from "./add-product-form/attachments-uploader";
import { DatePicker } from "@/components/ui/date-picker";

export function AddProductForm() {
	const { form } = useAddProduct();

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmitForm}
				className="flex flex-col gap-6 rounded-lg"
			>
				<div className="flex items-center">
					<h2 className="text-xl font-semibold">Novo Produto</h2>

					<div className="flex ml-auto gap-2">
						<Button variant="outline" asChild>
							<Link to="/empresa/produtos">Cancelar</Link>
						</Button>
						<Button type="submit">Salvar</Button>
					</div>
				</div>

				<div className="flex gap-6">
					<div className="w-[1000px] grid grid-cols-2 space-y-4 gap-x-6 p-6 rounded-lg border">
						<div className="col-span-2">
							<h3 className="text-lg font-medium">Detalhes do Produto</h3>
						</div>

						<FormField
							control={form.control}
							name="productName"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Nome</FormLabel>
									<FormControl>
										<Input placeholder="Digite o nome do produto" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="productCode"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Código</FormLabel>
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
							name="itemType"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Tipo do Item</FormLabel>
									<FormControl>
										<Select
											onValueChange={field.onChange}
											defaultValue={field.value}
										>
											<SelectTrigger>
												<SelectValue placeholder="Selecione o tipo do item" />
											</SelectTrigger>

											<SelectContent>
												<SelectItem value="firearm">Arma de fogo</SelectItem>
												<SelectItem value="nonLethal">
													Arma não letal
												</SelectItem>
												<SelectItem value="carVehicle">
													Viatura carro
												</SelectItem>
												<SelectItem value="motorcycle">Viatura moto</SelectItem>
												<SelectItem value="protectionItem">
													Item de proteção
												</SelectItem>
												<SelectItem value="videoMonitoring">
													Serviço videomonitoramento
												</SelectItem>
												<SelectItem value="other">Outros</SelectItem>
											</SelectContent>
										</Select>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="brandsModels"
							render={() => (
								<FormItem>
									<FormLabel>Marcas e Modelos Disponíveis</FormLabel>
									<FormControl>
										<BrandSelect />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="unitPrice"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Preço Unitário</FormLabel>
									<FormControl>
										<Input
											type="number"
											placeholder="Digite o preço unitário"
											{...field}
											onChange={(e) =>
												field.onChange(parseFloat(e.target.value))
											}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="minQuantity"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Quantidade Mínima para Venda</FormLabel>
									<FormControl>
										<Input
											type="number"
											placeholder="Digite a quantidade mínima para venda"
											{...field}
											onChange={(e) => field.onChange(parseInt(e.target.value))}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="guarantee"
							render={() => (
								<FormItem>
									<FormLabel>Garantia</FormLabel>
									<FormControl className="flex py-2">
										<div className="flex items-center gap-2">
											<Switch id="airplane-mode" />
											<span className="text-sm text-muted-foreground">
												Este produto possui garantia
											</span>
										</div>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="support"
							render={() => (
								<FormItem>
									<FormLabel>Suporte Técnico</FormLabel>
									<FormControl className="flex py-2">
										<div className="flex items-center gap-2">
											<Switch id="airplane-mode" />
											<span className="text-sm text-muted-foreground">
												Este produto possui suporte técnico
											</span>
										</div>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<div className="col-span-2 space-y-4">
							<FormField
								control={form.control}
								name="technicalDescription"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Descrição Técnica</FormLabel>
										<FormControl>
											<Textarea
												placeholder="Digite a descrição técnica"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name="biddingSpecs"
								render={({ field }) => (
									<FormItem>
										<FormLabel>
											Especificações Detalhadas para Licitação
										</FormLabel>
										<FormControl>
											<Textarea
												placeholder="Digite as especificações detalhadas para licitação"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>

						<FormField
							control={form.control}
							name="companyBudget"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Orçamento</FormLabel>
									<FormControl>
										<Input
											{...field}
											type="number"
											placeholder="Ex: R$ 10.000,00"
											onChange={(e) => field.onChange(parseInt(e.target.value))}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<DatePicker
							form={form}
							label="Validade do Orçamento"
							placeholder="Validade do Orçamento"
							entity="companyBudgetValidity"
						/>

						<FormField
							control={form.control}
							name="competitor1Budget"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Orçamento do 1º Concorrente</FormLabel>
									<FormControl>
										<Input
											{...field}
											type="number"
											placeholder="Ex: R$ 10.000,00"
											onChange={(e) => field.onChange(parseInt(e.target.value))}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<DatePicker
							form={form}
							label="Validade do Orçamento do 1º Concorrente"
							placeholder="Validade do Orçamento do 1º Concorrente"
							entity="competitor1BudgetValidity"
						/>

						<FormField
							control={form.control}
							name="competitor2Budget"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Orçamento do 2º Concorrente</FormLabel>
									<FormControl>
										<Input
											{...field}
											type="number"
											placeholder="Ex: R$ 10.000,00"
											onChange={(e) => field.onChange(parseInt(e.target.value))}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<DatePicker
							form={form}
							label="Validade do Orçamento do 2º Concorrente"
							placeholder="Validade do Orçamento do 2º Concorrente"
							entity="competitor2BudgetValidity"
						/>
					</div>

					<AttachmentsUploader />
				</div>
			</form>
		</Form>
	);
}
