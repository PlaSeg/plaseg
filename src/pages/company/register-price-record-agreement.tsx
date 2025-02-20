import { InputField } from "@/components/price-registration/input-field";
import { ProductRegistration } from "@/components/price-registration/product-registration";

export function RegisterPriceRecordAgreement() {
	return (
		<div>
			<header className="bg-blue-600 text-white p-4 mb-6 ">
				<h1 className="text-xl font-bold">PlaSeg</h1>
			</header>

			<div className="p-6 ">
				<div className="bg-white border p-6 rounded-lg mb-6">
					<h2 className="text-xl font-semibold mb-4">Informações Gerais</h2>
					<div className="grid grid-cols-2 gap-4">
						<InputField
							label="Nome da Ata"
							type="text"
							placeholder="Digite o nome da Ata"
						/>
						<InputField
							label="Número da Ata"
							type="text"
							placeholder="Digite o número da Ata"
						/>
						<InputField
							label="Ano da Ata"
							type="text"
							placeholder="Digite o ano da Ata"
						/>
						<InputField
							label="Órgão Responsável"
							type="text"
							placeholder="Digite o órgão responsável"
						/>
						<InputField
							label="Fornecedor"
							type="text"
							placeholder="Digite o fornecedor"
						/>
						<InputField label="Data de Assinatura" type="date" placeholder="" />
						<InputField label="Validade" type="date" placeholder="" />
					</div>
				</div>

				<ProductRegistration />

				<div className="flex justify-end gap-4">
					<button className="bg-blue-500 text-white px-4 py-2 rounded-md">
						Cancelar
					</button>
					<button className="bg-blue-500 text-white px-4 py-2 rounded-md">
						Cadastrar
					</button>
				</div>
			</div>
		</div>
	);
}
