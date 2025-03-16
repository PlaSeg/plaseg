import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { DatePicker } from "@/components/ui/date-picker";
import { usePriceAgreement } from "@/hooks/use-price-agreement";

export function PriceAgreementFormInfo() {
	const { form } = usePriceAgreement();

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmitForm}>
				<div className="w-[1000px] grid grid-cols-2 gap-x-6 gap-y-4 p-6 rounded-lg border">
					<FormField
						control={form.control}
						name="priceAgreementNumber"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Número da ata</FormLabel>
								<FormControl>
									<Input placeholder="Digite o número da ata" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="year"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Ano da ata</FormLabel>
								<FormControl>
									<Input placeholder="Digite o ano da ata" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="validity"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Validade</FormLabel>
								<FormControl>
									<Input placeholder="Ex: 12 meses" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="responsible"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Órgão responsável</FormLabel>
								<FormControl>
									<Input placeholder="Digite o Órgão responsável" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<DatePicker
						form={form}
						label="Data de Assinatura"
						placeholder="Data de assinatura"
						entity="signatureDate"
					/>

					<FormField
						control={form.control}
						name="priceAgreementAttachments"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Anexo</FormLabel>
								<FormControl>
									<Input
										type="file"
										{...field}
										accept="application/pdf,image/*"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
			</form>
		</Form>
	);
}
