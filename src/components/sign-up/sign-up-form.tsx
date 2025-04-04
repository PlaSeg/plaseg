import { Button } from "@/components/ui/button";
import { useSignUp } from "@/hooks/use-sign-up";
import { Form } from "@/components/ui/form";
import { Combobox } from "@/components/ui/combobox";
import { roleOptions } from "@/mocks/sign-up/role-options,";
import { FormInput } from "../form/form-input";
import { Loader } from "lucide-react";

export function SignUpForm() {
	const { form, isLoadingSignUp } = useSignUp();

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmitForm} className="space-y-3">
				<FormInput
					form={form}
					type="text"
					entity="document"
					label="CPF/CNPJ"
					placeholder="Digite seu CPF ou CNPJ"
				/>

				<FormInput
					form={form}
					type="text"
					entity="name"
					label="Nome"
					placeholder="Digite o seu nome"
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
					label="Celular"
					placeholder="Digite seu telefone"
				/>

				<FormInput
					form={form}
					type="password"
					entity="password"
					label="Senha"
					placeholder="Digite sua senha"
				/>

				<Combobox
					form={form}
					entity="role"
					translatedEntity="Cargo"
					placeholder="Selecione o cargo"
					emptyMessage="Nenhum cargo encontrado"
					options={roleOptions}
				/>

				<Button
					type="submit"
					className="mt-2 w-full"
					disabled={isLoadingSignUp}
				>
					{isLoadingSignUp && <Loader className="animate-spin" />}
					Confirmar
				</Button>
			</form>
		</Form>
	);
}
