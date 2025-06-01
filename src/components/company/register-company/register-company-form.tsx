import { Button } from "@/components/ui/button";
import { useRegisterCompany } from "@/hooks/companies/use-register-company";
import { Form } from "@/components/ui/form";
import { FormInput } from "@/components/form/form-input";
import { LoaderCircle } from "lucide-react";

export function RegisterCompanyForm() {
	const { form, isLoadingCompany } = useRegisterCompany();

	return (
		<div className="flex items-center justify-center flex-1 mt-4">
			<div className="flex flex-col items-center gap-8 text-center w-[500px]">
				<div className="flex flex-col gap-2">
					<h2 className="text-2xl font-bold">Informações Cadastrais</h2>
					<span className="text-sm text-muted-foreground">
						Preencha as informações abaixo para se cadastrar.
					</span>
				</div>
				<div className="w-[400px]">
					<Form {...form}>
						<form onSubmit={form.handleSubmitForm} className="space-y-4">
							<FormInput
								form={form}
								entity="cnpj"
								label="CNPJ"
								placeholder="Digite o seu CNPJ"
							/>

							<FormInput
								form={form}
								type="text"
								entity="legalName"
								label="Razão Social"
								placeholder="Digite a razão social"
							/>

							<FormInput
								form={form}
								entity="tradeName"
								label="Nome Fantasia"
								placeholder="Digite o nome fantasia"
							/>

							<FormInput
								form={form}
								type="text"
								entity="address"
								label="Endereço"
								placeholder="Digite o endereço"
							/>

							<FormInput
								form={form}
								type="email"
								entity="email"
								label="Email"
								placeholder="Digite seu email"
							/>

							<FormInput
								form={form}
								type="text"
								entity="phone"
								label="Telefone"
								placeholder="Digite seu telefone"
							/>

							<FormInput
								form={form}
								type="text"
								entity="site"
								label="Site"
								placeholder="Digite a url do seu site"
							/>

							<FormInput
								form={form}
								type="text"
								entity="portfolioDescription"
								label="Descrição do Portfólio"
								placeholder="Digite a descrição do seu portfólio"
							/>

							<Button
								type="submit"
								className="mt-2 w-full"
								disabled={isLoadingCompany}
							>
								{isLoadingCompany && <LoaderCircle className="animate-spin" />}
								Confirmar
							</Button>
						</form>
					</Form>
				</div>
			</div>
		</div>
	);
}
