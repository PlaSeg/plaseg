// import { FormField } from "@/components/register-company-form/form-field";
// import {
// 	FormItem,
// 	FormLabel,
// 	FormControl,
// 	FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";

// export function ProductAttachments() {
// 	return (
// 		<div className="space-y-4">
// 			<h3 className="text-lg font-medium text-blue-800">Anexos e Orçamentos</h3>
// 			<FormField
// 				control={form.control}
// 				name="attachments"
// 				render={({ field }) => (
// 					<FormItem>
// 						<FormLabel>Fotos e Documentos Técnicos</FormLabel>
// 						<FormControl>
// 							<div className="flex items-center gap-2">
// 								<Input
// 									type="file"
// 									accept="image/*,application/pdf"
// 									multiple
// 									// onChange={(e) => field.onChange([...e.target.files])}
// 								/>
// 								<Button type="button" variant="outline">
// 									Adicionar anexo
// 								</Button>
// 							</div>
// 						</FormControl>
// 						<FormMessage />
// 					</FormItem>
// 				)}
// 			/>
// 			<FormField
// 				control={form.control}
// 				name="companyBudget"
// 				render={({ field }) => (
// 					<FormItem>
// 						<FormLabel>Orçamento da Empresa</FormLabel>
// 						<FormControl>
// 							<Input
// 								type="file"
// 								accept="application/pdf"
// 								// onChange={(e) => field.onChange(e.target.files[0])}
// 							/>
// 						</FormControl>
// 						<FormMessage />
// 					</FormItem>
// 				)}
// 			/>
// 			<FormField
// 				control={form.control}
// 				name="companyBudgetValidity"
// 				render={({ field }) => (
// 					<FormItem>
// 						<FormLabel>Validade do Orçamento (Empresa)</FormLabel>
// 						<FormControl>
// 							<Input type="date" {...field} />
// 						</FormControl>
// 						<FormMessage />
// 					</FormItem>
// 				)}
// 			/>
// 			<FormField
// 				control={form.control}
// 				name="competitor1Budget"
// 				render={({ field }) => (
// 					<FormItem>
// 						<FormLabel>Orçamento de Concorrente 1</FormLabel>
// 						<FormControl>
// 							<Input
// 								type="file"
// 								accept="application/pdf"
// 								// onChange={(e) => field.onChange(e.target.files[0])}
// 							/>
// 						</FormControl>
// 						<FormMessage />
// 					</FormItem>
// 				)}
// 			/>
// 			<FormField
// 				control={form.control}
// 				name="competitor1BudgetValidity"
// 				render={({ field }) => (
// 					<FormItem>
// 						<FormLabel>Validade do Orçamento Concorrente 1</FormLabel>
// 						<FormControl>
// 							<Input type="date" {...field} />
// 						</FormControl>
// 						<FormMessage />
// 					</FormItem>
// 				)}
// 			/>
// 			<FormField
// 				control={form.control}
// 				name="competitor2Budget"
// 				render={({ field }) => (
// 					<FormItem>
// 						<FormLabel>Orçamento de Concorrente 2</FormLabel>
// 						<FormControl>
// 							<Input
// 								type="file"
// 								accept="application/pdf"
// 								// onChange={(e) => field.onChange(e.target.files[0])}
// 							/>
// 						</FormControl>
// 						<FormMessage />
// 					</FormItem>
// 				)}
// 			/>
// 			<FormField
// 				control={form.control}
// 				name="competitor2BudgetValidity"
// 				render={({ field }) => (
// 					<FormItem>
// 						<FormLabel>Validade do Orçamento Concorrente 2</FormLabel>
// 						<FormControl>
// 							<Input type="date" {...field} />
// 						</FormControl>
// 						<FormMessage />
// 					</FormItem>
// 				)}
// 			/>
// 		</div>
// 	);
// }
