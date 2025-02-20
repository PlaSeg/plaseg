import { RegisterCompanyForm } from "@/components/register-company-form/form-container";
import { FormSteps } from "@/components/register-company-form/form-steps";

export function RegisterCompany() {
	return (
		<div className="w-full h-screen grid grid-cols-3">
			<div className="flex flex-col  items-center justify-center bg-muted/30">
				<div className="flex flex-col text-left items-start gap-12 justify-center">
					<div className="flex flex-col items-start">
						<strong className="text-3xl">Plaseg</strong>
						<span className="text-muted-foreground/70 font-medium">Cadastro de Empresa</span>
					</div>

					<FormSteps />
				</div>
			</div>

			<div className="col-span-2">
				<RegisterCompanyForm />
			</div>
		</div>
	);
}
